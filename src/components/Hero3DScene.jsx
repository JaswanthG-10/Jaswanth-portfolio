import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient & Directional Lights for Glass Refraction effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x8b5cf6, 2.5); // Pastel violet
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0ea5e9, 2.0); // Soft aqua
    dirLight2.position.set(-10, -10, 10);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x6366f1, 3, 20); // Periwinkle core glow
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // Core Translucent Glass Sphere
    const sphereGeo = new THREE.SphereGeometry(2.4, 64, 64);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8f1ff,
      transmission: 0.85,
      opacity: 0.9,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      ior: 1.4,
      thickness: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(coreSphere);

    // Inner Glowing Polyhedron Core
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      emissive: 0x6366f1,
      emissiveIntensity: 0.4,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);

    // Orbiting Satellite 1: Thin Glass Torus Ring 1
    const ring1Geo = new THREE.TorusGeometry(4.2, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    // Orbiting Satellite 2: Thin Glass Torus Ring 2 (Cross orbit)
    const ring2Geo = new THREE.TorusGeometry(5.4, 0.06, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.3,
      metalness: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 3;
    scene.add(ring2);

    // Small Floating Geometric Satellites
    const satellitesGroup = new THREE.Group();
    
    // Sat A: Octahedron
    const satAGeo = new THREE.OctahedronGeometry(0.5);
    const satAMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.2 });
    const satA = new THREE.Mesh(satAGeo, satAMat);
    satA.position.set(4.5, 1.8, 1);
    satellitesGroup.add(satA);

    // Sat B: Small Translucent Sphere
    const satBGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const satBMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.9,
      transparent: true,
      roughness: 0.15,
    });
    const satB = new THREE.Mesh(satBGeo, satBMat);
    satB.position.set(-4.2, -2.2, 1.5);
    satellitesGroup.add(satB);

    // Sat C: Dodecahedron
    const satCGeo = new THREE.DodecahedronGeometry(0.45);
    const satCMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3 });
    const satC = new THREE.Mesh(satCGeo, satCMat);
    satC.position.set(2.8, -3.5, -1);
    satellitesGroup.add(satC);

    scene.add(satellitesGroup);

    // Mouse Tracking for Parallax Drift
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Gentle smooth damping mouse movement
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate objects
      coreSphere.rotation.y = elapsedTime * 0.15;
      coreSphere.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      innerCore.rotation.y = -elapsedTime * 0.4;
      innerCore.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.2;

      satellitesGroup.rotation.y = elapsedTime * 0.3;
      satellitesGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.15;

      satA.rotation.x = elapsedTime * 0.8;
      satC.rotation.y = elapsedTime * 0.6;

      // Apply camera parallax drift
      camera.position.x = targetX * 8;
      camera.position.y = -targetY * 8;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[380px] sm:h-[480px] lg:h-[550px] relative z-10 cursor-grab active:cursor-grabbing"
    />
  );
};

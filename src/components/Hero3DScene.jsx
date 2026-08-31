import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const Hero3DScene = () => {
  const mountRef = useRef(null);
  const { isTouch, tier, maxDpr } = useDeviceCapabilities();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const isMobile = window.innerWidth < 768;

    let isCanvasVisible = true;
    let isTabVisible = true;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Viewport camera configuration
    const fov = isMobile ? 55 : 45;
    const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 18 : 15;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: tier !== 'low' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDpr));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isMobile ? 1.4 : 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x8b5cf6, isMobile ? 2.0 : 2.5);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0ea5e9, isMobile ? 1.5 : 2.0);
    dirLight2.position.set(-10, -10, 10);
    scene.add(dirLight2);

    const scaleFactor = isMobile ? 0.75 : 1.0;

    // Core Translucent Glass Sphere
    const sphereGeo = new THREE.SphereGeometry(2.4 * scaleFactor, tier === 'low' ? 24 : 48, tier === 'low' ? 24 : 48);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8f1ff,
      transmission: tier === 'low' ? 0.6 : 0.85,
      opacity: 0.9,
      transparent: true,
      roughness: 0.15,
      metalness: 0.1,
      ior: 1.4,
      thickness: 1.2 * scaleFactor,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(coreSphere);

    // Inner Wireframe Core
    const innerGeo = new THREE.IcosahedronGeometry(1.4 * scaleFactor, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      emissive: 0x6366f1,
      emissiveIntensity: 0.4,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);

    // Orbiting Torus Ring 1
    const ring1Geo = new THREE.TorusGeometry(4.2 * scaleFactor, 0.07 * scaleFactor, 16, tier === 'low' ? 40 : 80);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.25,
      metalness: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    // Orbiting Torus Ring 2
    const ring2Geo = new THREE.TorusGeometry(5.4 * scaleFactor, 0.05 * scaleFactor, 16, tier === 'low' ? 40 : 80);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.3,
      metalness: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 3;
    scene.add(ring2);

    // Floating Geometric Satellites
    const satellitesGroup = new THREE.Group();
    
    // Sat A: Octahedron
    const satAGeo = new THREE.OctahedronGeometry(0.45 * scaleFactor);
    const satAMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.2 });
    const satA = new THREE.Mesh(satAGeo, satAMat);
    satA.position.set(4.2 * scaleFactor, 1.8 * scaleFactor, 1);
    satellitesGroup.add(satA);

    // Sat B: Small Translucent Sphere
    const satBGeo = new THREE.SphereGeometry(0.35 * scaleFactor, 16, 16);
    const satBMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.9,
      transparent: true,
      roughness: 0.2,
    });
    const satB = new THREE.Mesh(satBGeo, satBMat);
    satB.position.set(-3.8 * scaleFactor, -2.0 * scaleFactor, 1.2);
    satellitesGroup.add(satB);

    if (tier !== 'low') {
      const satCGeo = new THREE.DodecahedronGeometry(0.4 * scaleFactor);
      const satCMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3 });
      const satC = new THREE.Mesh(satCGeo, satCMat);
      satC.position.set(2.5 * scaleFactor, -3.2 * scaleFactor, -1);
      satellitesGroup.add(satC);
    }

    scene.add(satellitesGroup);

    // Parallax Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      if (isTouch) return;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0006;
      mouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // IntersectionObserver to pause rendering when hero is out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isCanvasVisible = entry.isIntersecting;
        if (isCanvasVisible && isTabVisible) {
          renderLoop();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isCanvasVisible && isTabVisible) {
        renderLoop();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const renderLoop = () => {
      if (!isCanvasVisible || !isTabVisible) return;
      animationFrameId = requestAnimationFrame(renderLoop);

      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      coreSphere.rotation.y = elapsedTime * 0.12;
      coreSphere.rotation.x = Math.sin(elapsedTime * 0.15) * 0.08;

      innerCore.rotation.y = -elapsedTime * 0.3;
      innerCore.rotation.z = elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.18;

      satellitesGroup.rotation.y = elapsedTime * 0.25;

      if (!isTouch) {
        camera.position.x = targetX * 6;
        camera.position.y = -targetY * 6;
      }
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      if (!isTouch) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isTouch, tier, maxDpr]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[240px] xs:h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] relative z-10 mx-auto max-w-full overflow-hidden"
    />
  );
};

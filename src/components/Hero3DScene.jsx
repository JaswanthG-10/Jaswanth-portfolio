import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const Hero3DScene = () => {
  const mountRef = useRef(null);
  const { isTouch, tier, maxDpr, prefersReducedMotion } = useDeviceCapabilities();

  useEffect(() => {
    const container = mountRef.current;
    if (!container || prefersReducedMotion) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const isMobile = window.innerWidth < 768 || tier === 'low';

    let isCanvasVisible = true;
    let isTabVisible = !document.hidden;

    // Scene
    const scene = new THREE.Scene();
    
    // Viewport-based camera configuration
    const fov = isMobile ? 55 : 45;
    const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 18 : 15;

    // WebGL Renderer settings
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile && tier === 'high',
      powerPreference: isMobile ? 'low-power' : 'high-performance',
      precision: isMobile ? 'mediump' : 'highp',
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.0 : 1.75));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isMobile ? 1.5 : 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x8b5cf6, isMobile ? 1.8 : 2.5);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    if (!isMobile) {
      const dirLight2 = new THREE.DirectionalLight(0x0ea5e9, 2.0);
      dirLight2.position.set(-10, -10, 10);
      scene.add(dirLight2);
    }

    const scaleFactor = isMobile ? 0.75 : 1.0;

    // Core Sphere: Use lightweight MeshStandardMaterial on Mobile/Low Tier to avoid expensive transmission shaders
    const sphereGeo = new THREE.SphereGeometry(2.4 * scaleFactor, isMobile ? 24 : 64, isMobile ? 24 : 64);
    
    const sphereMat = (isMobile || tier === 'low')
      ? new THREE.MeshStandardMaterial({
          color: 0xdbe8ff,
          roughness: 0.2,
          metalness: 0.1,
        })
      : new THREE.MeshPhysicalMaterial({
          color: 0xe8f1ff,
          transmission: 0.85,
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
    const ring1Geo = new THREE.TorusGeometry(4.2 * scaleFactor, 0.07 * scaleFactor, 12, isMobile ? 36 : 80);
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
    const ring2Geo = new THREE.TorusGeometry(5.4 * scaleFactor, 0.05 * scaleFactor, 12, isMobile ? 36 : 80);
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

    if (!isMobile && tier === 'high') {
      const satBGeo = new THREE.SphereGeometry(0.35 * scaleFactor, 16, 16);
      const satBMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 });
      const satB = new THREE.Mesh(satBGeo, satBMat);
      satB.position.set(-3.8 * scaleFactor, -2.0 * scaleFactor, 1.2);
      satellitesGroup.add(satB);
    }

    scene.add(satellitesGroup);

    // Mouse Parallax Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      if (isTouch || isMobile) return;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0005;
      mouseY = (event.clientY - windowHalfY) * 0.0005;
    };

    if (!isTouch && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Debounced Resize Handler
    let resizeTimer = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!container) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // IntersectionObserver: PAUSE render loop when canvas is off screen
    let animationFrameId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isCanvasVisible = entry.isIntersecting;
        if (isCanvasVisible && isTabVisible) {
          if (!animationFrameId) renderLoop();
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isCanvasVisible && isTabVisible) {
        if (!animationFrameId) renderLoop();
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    // Render loop
    const clock = new THREE.Clock();

    const renderLoop = () => {
      if (!isCanvasVisible || !isTabVisible) {
        animationFrameId = null;
        return;
      }
      animationFrameId = requestAnimationFrame(renderLoop);

      const elapsedTime = clock.getElapsedTime();

      if (!isTouch && !isMobile) {
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
      }

      coreSphere.rotation.y = elapsedTime * 0.12;
      coreSphere.rotation.x = Math.sin(elapsedTime * 0.15) * 0.08;

      innerCore.rotation.y = -elapsedTime * 0.3;
      innerCore.rotation.z = elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.18;

      satellitesGroup.rotation.y = elapsedTime * 0.25;

      if (!isTouch && !isMobile) {
        camera.position.x = targetX * 5;
        camera.position.y = -targetY * 5;
      }
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      if (!isTouch && !isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isTouch, tier, maxDpr, prefersReducedMotion]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[240px] xs:h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] relative z-10 mx-auto max-w-full overflow-hidden"
    />
  );
};

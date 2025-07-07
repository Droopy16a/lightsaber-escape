import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Desktop() {
  const saberRef = useRef(null);
  const mountRef = useRef(null);
  const ws = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    ws.current = new window.WebSocket('wss://192.168.1.19:4000');

    ws.current.onopen = () => console.log('WebSocket connected (desktop)');
    ws.current.onerror = (e) => console.error('WebSocket error', e);
    ws.current.onclose = () => console.log('WebSocket closed');

    ws.current.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.rotation) {
          const { alpha, beta, gamma } = data.rotation;
          const { x, y, z } = data.motion;
          console.log('Received rotation:', { alpha, beta, gamma });

          // Only update if there's actual movement (avoid flicker from 0 values)
          if (
            beta !== 0 ||
            alpha !== 0 ||
            gamma !== 0
          ) {
            rotationRef.current = {
              x: ((parseFloat(beta) + 90)) * (Math.PI / 180),
              y: 0,
              z: ((parseFloat(gamma))) * (Math.PI / 180),
            };
          }
        }
      } catch (err) {
        console.error('Invalid WebSocket message:', e.data);
      }
    };

    // THREE.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const geometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const saber = new THREE.Mesh(geometry, material);
    saber.position.y = 1.5;
    scene.add(saber);
    saberRef.current = saber;

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      if (saberRef.current) {
        const saberRotation = saberRef.current.rotation;
        const target = rotationRef.current;

        // Smooth rotation using linear interpolation (lerp)
        saberRotation.x += (target.x - saberRotation.x) * 0.1;
        saberRotation.y += (target.y - saberRotation.y) * 0.1;
        saberRotation.z += (target.z - saberRotation.z) * 0.1;

        console.log('Applying rotation:', {
          x: saberRotation.x.toFixed(2),
          y: saberRotation.y.toFixed(2),
          z: saberRotation.z.toFixed(2),
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      if (ws.current) ws.current.close();
    };
  }, []);

  return (
    <div>
      <div ref={mountRef} style={{ width: '100vw', height: '70vh' }} />
      <h2>Waiting for phone motion data...</h2>
    </div>
  );
}

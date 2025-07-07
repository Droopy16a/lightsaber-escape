import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Desktop() {
  const saberRef = useRef(null);
  const mountRef = useRef(null);
  const ws = useRef(null);

  useEffect(() => {
    // Connect to WSS WebSocket server (replace with your server's IPv4 if needed)
    ws.current = new window.WebSocket('wss://192.168.1.19:4000');
    ws.current.onopen = () => console.log('WebSocket connected (desktop)');
    ws.current.onerror = (e) => console.error('WebSocket error', e);
    ws.current.onclose = () => console.log('WebSocket closed');
    ws.current.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.rotation && saberRef.current) {
          const { alpha, beta, gamma } = data.rotation;
          saberRef.current.rotation.x = (parseFloat(beta) || 0) * (Math.PI / 180);
          saberRef.current.rotation.y = (parseFloat(gamma) || 0) * (Math.PI / 180);
          saberRef.current.rotation.z = (parseFloat(alpha) || 0) * (Math.PI / 180);
        }
      } catch (err) {
        console.error('Invalid WebSocket message:', e.data);
      }
    };

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

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
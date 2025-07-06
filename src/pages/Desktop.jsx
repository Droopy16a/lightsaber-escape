// src/pages/Desktop.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Desktop() {
  const mountRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('wss://TON_SERVEUR_WS'); // 🔁 À remplacer

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'register', role: 'desktop' }));
    };

    // Setup Three.js scene
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

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle motion updates
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'motion') {
        const { alpha, beta, gamma } = data.payload;
        saber.rotation.x = (beta || 0) * (Math.PI / 180);
        saber.rotation.y = (gamma || 0) * (Math.PI / 180);
        saber.rotation.z = (alpha || 0) * (Math.PI / 180);
      }
    };

    return () => {
      socket.close();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} />
  );
}

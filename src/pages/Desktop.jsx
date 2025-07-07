import React, { useEffect, useRef, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import * as THREE from 'three';

export default function Desktop() {
  const [offerId, setOfferId] = useState('');
  const peerRef = useRef(null);
  const saberRef = useRef(null);
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize WebRTC with STUN server
    const peer = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });
    peerRef.current = peer;

    peer.ondatachannel = (event) => {
      const channel = event.channel;
      console.log('Data channel received on desktop'); // Debug
      channel.onmessage = (e) => {
        console.log('Data channel message received:', e.data); // Debug
        const { alpha, beta, gamma } = JSON.parse(e.data);
        if (saberRef.current) {
          saberRef.current.rotation.x = (beta || 0) * (Math.PI / 180);
          saberRef.current.rotation.y = (gamma || 0) * (Math.PI / 180);
          saberRef.current.rotation.z = (alpha || 0) * (Math.PI / 180);
        }
      };
    };

    // Create and store offer
    peer.createOffer()
      .then((offer) => peer.setLocalDescription(offer))
      .then(() => {
        const offerJSON = JSON.stringify(peer.localDescription);
        console.log('Offer JSON:', offerJSON); // Debug
        console.log('Offer length:', offerJSON.length); // Debug
        // Send offer to backend
        return fetch('https://a98f-2a01-cb00-18c7-a00-e5bd-ab4f-c883-93d9.ngrok-free.app/store-offer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ offer: offerJSON }),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        setOfferId(data.id);
        console.log('Offer ID:', data.id); // Debug
      })
      .catch((error) => console.error('Error storing offer:', error));

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
      if (peerRef.current) {
        peerRef.current.close();
      }
    };
  }, []);

  // Polling for the answer
  useEffect(() => {
    if (!offerId) return;

    const pollAnswer = setInterval(() => {
      console.log('Polling for answer with offerId:', offerId); // Debug
      fetch(`https://a98f-2a01-cb00-18c7-a00-e5bd-ab4f-c883-93d9.ngrok-free.app/get-answer/${offerId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Poll response:', data); // Debug
          if (data.answer) {
            const remoteDesc = new RTCSessionDescription(JSON.parse(data.answer));
            peerRef.current.setRemoteDescription(remoteDesc)
              .then(() => console.log('WebRTC connection established!'))
              .catch((error) => console.error('Error setting remote description:', error));
            clearInterval(pollAnswer); // Stop polling
          }
        })
        .catch((error) => console.error('Error polling answer:', error));
    }, 1000); // Poll every second

    return () => clearInterval(pollAnswer); // Clean up polling
  }, [offerId]);

  const baseUrl = 'https://a6cc-2a01-cb00-18c7-a00-e5bd-ab4f-c883-93d9.ngrok-free.app'; // ngrok frontend URL
  const qrCodeValue = offerId ? `${baseUrl}/mobile?offerId=${offerId}` : '';

  return (
    <div>
      <div ref={mountRef} style={{ width: '100vw', height: '70vh' }} />
      <h2>📱 Scan this QR code with your phone:</h2>
      {offerId ? (
        <QRCodeSVG
          value={qrCodeValue}
          size={300}
          level="L"
          bgColor="#ffffff"
          fgColor="#000000"
        />
      ) : (
        <p style={{ color: 'red' }}>Loading QR code... Check console for errors.</p>
      )}
    </div>
  );
}
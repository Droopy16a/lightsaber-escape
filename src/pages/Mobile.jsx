import { useEffect, useState, useRef } from "react";

function Mobile() {
  const [motion, setMotion] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });
  const ws = useRef(null);

  useEffect(() => {
    // Use wss and your server's IPv4 address (replace with your actual IP if needed)
    ws.current = new window.WebSocket("wss://192.168.1.19:4000");
    ws.current.onopen = () => console.log("WebSocket connected");
    ws.current.onerror = (e) => console.error("WebSocket error", e);
    ws.current.onclose = () => console.log("WebSocket closed");

    // Ask for permission on iOS
    const requestPermission = async () => {
      if (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        try {
          const response = await DeviceMotionEvent.requestPermission();
          if (response === "granted") {
            window.addEventListener("devicemotion", handleMotion);
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (e) {
          console.error("Motion permission error:", e);
        }
      } else {
        // Android and others
        window.addEventListener("devicemotion", handleMotion);
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    const handleMotion = (e) => {
      const acc = e.accelerationIncludingGravity || e.acceleration;
      if (acc) {
        const newMotion = {
          x: acc.x?.toFixed(2),
          y: acc.y?.toFixed(2),
          z: acc.z?.toFixed(2),
        };
        setMotion(newMotion);
        sendCoords({ motion: newMotion, rotation });
      }
    };

    const handleOrientation = (e) => {
      const newRotation = {
        alpha: e.alpha?.toFixed(2),
        beta: e.beta?.toFixed(2),
        gamma: e.gamma?.toFixed(2),
      };
      setRotation(newRotation);
      sendCoords({ motion, rotation: newRotation });
    };

    const sendCoords = (data) => {
      if (ws.current && ws.current.readyState === 1) {
        ws.current.send(JSON.stringify(data));
      }
    };

    requestPermission();

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
      window.removeEventListener("deviceorientation", handleOrientation);
      if (ws.current) ws.current.close();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📱 Phone Motion Tracker</h2>
      <h3>Acceleration (with gravity)</h3>
      <p>X: {motion.x}</p>
      <p>Y: {motion.y}</p>
      <p>Z: {motion.z}</p>

      <h3>Orientation</h3>
      <p>Alpha (compass): {rotation.alpha}°</p>
      <p>Beta (front-back): {rotation.beta}°</p>
      <p>Gamma (left-right): {rotation.gamma}°</p>
    </div>
  );
}

export default Mobile;
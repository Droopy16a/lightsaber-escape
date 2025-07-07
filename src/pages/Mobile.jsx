import { useEffect, useState } from "react";

function Mobile() {
  const [motion, setMotion] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  useEffect(() => {
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
        setMotion({
          x: acc.x?.toFixed(2),
          y: acc.y?.toFixed(2),
          z: acc.z?.toFixed(2),
        });
      }
    };

    const handleOrientation = (e) => {
      setRotation({
        alpha: e.alpha?.toFixed(2), // compass direction
        beta: e.beta?.toFixed(2),   // front-back
        gamma: e.gamma?.toFixed(2), // left-right
      });
    };

    requestPermission();

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
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

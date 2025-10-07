import React, { useState, useEffect } from "react";

import "./Footer.css";

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Manila",
    hour12: false,
  };

  const formattedTime = time.toLocaleTimeString([], options);
  const gmtOffset = "+8";

  return (
    <div className="footer-container-contact">
      <p>©2025 Allen Rojo</p>
      <p>
        Manila, Philippines: (GMT{gmtOffset}) {formattedTime}
      </p>
    </div>
  );
}
export default Footer;



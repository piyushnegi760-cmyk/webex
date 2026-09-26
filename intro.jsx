import { useEffect } from "react";
import "./Intro.css";

export default function Intro({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="intro-screen">
      <div className="logo-wrapper">
        <div className="logo-glow"></div>

        <h1 className="webex-logo">
          WEBEX
        </h1>
      </div>
    </div>
  );
}
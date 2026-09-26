import { useEffect } from "react";

export default function Intro({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="intro-screen">
      <div className="intro-glow" />

      <div className="intro-content">
        <div className="intro-small">
          DIGITAL STUDIO
        </div>

        <h1 className="intro-logo">
          WEBEX
        </h1>

        <div className="intro-line">
          <span />
        </div>

        <div className="intro-location">
          DEHRADUN / INDIA
        </div>
      </div>
    </div>
  );
}
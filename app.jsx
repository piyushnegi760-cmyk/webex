import { useState } from "react";
import Intro from "./Intro";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <Intro onComplete={() => setShowIntro(false)} />
      )}

      <div>
        {/* Webex website yahan se start hogi */}
      </div>
    </>
  );
}

export default App;
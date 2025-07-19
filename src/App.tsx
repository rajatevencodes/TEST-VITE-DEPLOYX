import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // step 1: trigger confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <div className="hero-section">
        <h1 className="title">Successfully Deployed with ❤️</h1>
        <p className="subtitle">DeployX</p>
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-circle circle-3"></div>
      </div>

      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`confetti-piece confetti-${i % 5}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

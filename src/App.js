import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const messages = [
  "Naucz się React ⚛️",
  "Aplikuj do pracy 💼",
  "Pozszerzaj swoje umiejętności 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((open) => !open)}
      >
        <IoMdClose />
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Krok {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              type="button"
              onClick={handlePrev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Poprzedni
            </button>
            <button
              type="button"
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Następny
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

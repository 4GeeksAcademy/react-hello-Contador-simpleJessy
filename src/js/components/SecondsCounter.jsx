import React, { useState, useEffect, useRef } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    startCounter();
    return () => stopCounter();
  }, []);

  const startCounter = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    setIsRunning(true);
  };

  const stopCounter = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetCounter = () => {
    setSeconds(0);
  };

  const toggleCounter = () => {
    if (isRunning) stopCounter();
    else startCounter();
  };

  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="wrapper">
      <div className="counter-container">
        <div className="cuadros-contador">
          <i className="fa-regular fa-clock"></i>
        </div>
        {digits.map((d, i) => (
          <div key={i} className="cuadros-contador">{d}</div>
        ))}
      </div>

      <div className="buttons">
        <button className="boton-azul" onClick={toggleCounter}>
          {isRunning ? (
            <div className="boton1"><i className="fa-solid fa-pause"></i> Detener</div>
            ) : (
            <div className="boton1"><i className="fa-solid fa-play"></i> Reanudar</div>
          )}
        </button>

        <button className="boton-verde" onClick={resetCounter}>
            <div className="boton2"><i className="fa-solid fa-rotate-right"></i> Reiniciar</div>
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter;

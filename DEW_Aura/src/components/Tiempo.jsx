import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div>
      <p>Fecha: {formattedDate}</p>
      <p>Hora: {formattedTime}</p>
    </div>
  );
};

export default RealTimeClock;

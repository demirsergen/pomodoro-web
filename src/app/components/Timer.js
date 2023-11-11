'use client';

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            alert("Time's up!");
            clearInterval(timer);
            setIsActive(false);
            // add additional logic for what happens when the timer reaches 0
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, minutes, seconds]);
  return (
    <div className="w-2/3 p-8 flex flex-col items-center">
      <span className="text-8xl">
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </span>
      <button
        className="bg-red-200 text-white p-2 font-bold uppercase "
        onClick={() => startTimer()}
      >
        {isActive ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;

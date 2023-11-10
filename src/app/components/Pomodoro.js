'use client';

import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [time, setTime] = useState(25);

  const startTimer = () => {};
  return (
    <div className="bg-red-100 p-4 flex flex-col items-center">
      <span>{time}</span>
      <button
        className="bg-red-200 text-white p-2"
        onClick={() => startTimer()}
      >
        Start
      </button>
    </div>
  );
};

export default Pomodoro;

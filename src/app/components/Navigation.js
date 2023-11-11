import React from 'react';

const Navigation = ({ mode, setMode }) => {
  const handleChangeMode = (e) => {
    const mode = e.target.value;
  };
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h1>BeProductive</h1>
        <span></span>
      </div>
      <div className="flex gap-8">
        {mode.map((mode, idx) => (
          <button key={idx}>{mode}</button>
        ))}
      </div>
      <div>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Navigation;

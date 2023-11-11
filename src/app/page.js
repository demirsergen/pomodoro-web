'use client';

import { useState } from 'react';
import Timer from './components/Timer';
import Navigation from './components/Navigation';
export default function Home() {
  const [mode, setMode] = useState([
    'Pomodoro',
    'Short Break',
    'Long Break',
  ]);

  return (
    <main className="w-full bg-teal-900 text-white mx-auto flex min-h-screen flex-col items-center justify-between p-24">
      <Navigation mode={mode} setMode={setMode} />
      <Timer />
    </main>
  );
}

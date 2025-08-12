import { useState } from 'react';
import { Heading } from './components/Heading';
import { Memory } from './components/Memory';
import { generateShuffledCards } from './utils/generateShuffledCards';

function App() {
  const arr = [1, 2, 3, 4, 5, 6];
  const shuffledArr = generateShuffledCards(arr);
  return (
    <div className="flex h-screen flex-col items-center gap-y-10 bg-slate-950">
      <Heading />
      <Memory cardNumber={12} shuffledArr={shuffledArr} />
    </div>
  );
}

export default App;

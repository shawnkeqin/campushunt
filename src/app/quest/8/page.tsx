'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FirstQuestPage: React.FC = () => {
  const router = useRouter();
  const [secretCode, setSecretCode] = useState('');
  const [hintVisible, setHintVisible] = useState(false);
  const handleRevealHint = () => {
    setHintVisible(false); // Reset visibility for animation
    setTimeout(() => {
      setHintVisible(true); // Show the hint with animation
    }, 100); // Small delay to trigger the animation
    const revealedQuests = JSON.parse(localStorage.getItem('revealedQuests') || '[]');
    if (!revealedQuests.includes('7')) {
      revealedQuests.push('7');
      localStorage.setItem('revealedQuests', JSON.stringify(revealedQuests));
    }
  };
  return (
    <div className="p-6 max-w-md mx-auto text-center mt-20">
<div className="relative flex w-full mb-12 items-center">
  <Image
    src={'/back-button.svg'}
    alt="Back"
    width={32}
    onClick={() => router.back()}
    height={32}
    className="absolute left-0"
  />
  <p className="absolute left-1/2 transform -translate-x-1/2 text-lg text-[#11446D] font-bold">
    Quest 8
  </p>
</div>
      <h1 className="text-4xl text-[#11446D] font-bold mb-4">I FOUND THE TREASURE!</h1>
      <p className="text-lg mb-6 text-[#11446D]">
        Head over the UniLah Booth and mention that you are hunting for treasure! The NPC will provide you with a secret code that will reveal a hint.
      </p>
      <form className="space-y-4">
      <p className="text-sm text-left text-[#11446D]">Secret code</p>
        <input
          type="text"
          placeholder="Enter the secret code..."
          className="w-full p-4  rounded-2xl border border-[#E7ECF0]"
          value={secretCode}
          onChange={(e) => setSecretCode(e.target.value)}
        />
        <button
        type="button"
        className="mb-4 w-full max-w-md p-2 py-5 bg-gradient-to-r from-[#4FD5D5] to-[#2595F7] text-white rounded-full mt-[50vh]"
        onClick={handleRevealHint}
        disabled={!secretCode}
      >
        REVEAL A HINT
      </button>
      </form>
      <div
  className={`text-left p-6 bg-white mt-10 rounded-3xl border border-[#11446D] transform transition-all duration-500 ease-in-out
    ${hintVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
  `}
>
  <h2 className="text-2xl text-[#11446D] font-bold mb-2">The Hint</h2>
  <p className="text-lg mb-6 text-[#11446D]">The treasure is hidden somewhere ....</p>
</div>

    </div>
  );
};

export default FirstQuestPage;
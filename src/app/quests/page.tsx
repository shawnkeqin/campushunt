'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuestsLayout from './layout';
const steps = [
  { id: '1', title: "Go to UniLah Booth", link: '/quest/1' },
  { id: '2', title: "Follow UniLah Instagram", link: '/quest/2' },
  { id: '3', title: "Follow UniLah Tiktok", link: '/quest/3' },
  { id: '4', title: "Go to SBIS Booth", link: '/quest/4' },
  { id: '5', title: "Follow SBIS Instagram", link: '/quest/5' },
  { id: '6', title: "Go to Echo Media", link: '/quest/6' },
  { id: '7', title: "Follow Echo Media Instagram", link: '/quest/7' },
  {id: '8', title: "I FOUND THE TREASURE!", link: '/quest/8' }
];

const QuestsPage: React.FC = () => {
  const router = useRouter();
  const [revealedQuests, setRevealedQuests] = useState<string[]>([]);
  useEffect(() => {
    const storedRevealedQuests = JSON.parse(localStorage.getItem('revealedQuests') || '[]');
    setRevealedQuests(storedRevealedQuests);
  }, []);

console.log(revealedQuests)
  return (
    <QuestsLayout>
    <div className="mx-auto text-center">

      <div className="relative mx-auto text-center">
      <h1 className="text-4xl font-bold pb-0 pt-[20%] mb-8">Quests</h1>
      <ul className="h-[50vh] mt-[5vh] space-y-4 pt-6 bg-white rounded-tl-2xl rounded-tr-2xl">
      {steps.map((step) => (
          <li
            key={step.id}
            className={`w-[85%] mx-auto flex items-center gap-x-2 p-4 rounded-lg border border-[#E7ECF0] shadow-md 
              text-[#11446D] bg-white text-center cursor-pointer transition mt-8 ${
                revealedQuests.includes(step.id) ? 'bg-[#11446D] text-white' : 'hover:text-white hover:bg-[#11446D]'
              }`}
            onClick={() => router.push(step.link)}
          >
            <p className="justify-center font-bold">{step.id}</p>
            <p>{step.title}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </QuestsLayout>
  );
};

export default QuestsPage;
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import QuestsLayout from './layout';
const steps = [
  { title: "Go to UniLah Booth", link: '/quest/1' },
  { title: "Follow UniLah Instagram", link: '/quest/2' },
  { title: "Follow UniLah Tiktok", link: '/quest/3' },
  { title: "Go to SBIS Booth", link: '/quest/4' },
  { title: "Follow SBIS Instagram", link: '/quest/5' },
  { title: "Go to Echo Media", link: '/quest/6' },
  { title: "Follow Echo Media Instagram", link: '/quest/7' },
  { title: "I FOUND THE TREASURE!", link: '/quest/8' }
];

const QuestsPage: React.FC = () => {
  const router = useRouter();

  return (
    <QuestsLayout>
    <div className="mx-auto text-center">

      <div className="relative mx-auto text-center">
      <h1 className="text-4xl font-bold pb-0 pt-[20%] mb-8">Quests</h1>
      <ul className="h-[50vh] mt-[5vh] space-y-4 pt-6 bg-white rounded-tl-2xl rounded-tr-2xl">
        {steps.map((step, index) => (
          <li
            key={index}
            className="w-[85%] mx-auto flex items-center gap-x-2 p-4 rounded-lg border border-[#E7ECF0] shadow-md 
            text-[#11446D] hover:text-white bg-white hover:bg-[#11446D] text-center cursor-pointer transition mt-8"          
            onClick={() => router.push(step.link)}
          >
            <p className="justify-center font-bold">{index + 1}</p> <p className=''>{step.title}</p> 
          </li>
        ))}
      </ul>
      </div>
    </div>
    </QuestsLayout>
  );
};

export default QuestsPage;
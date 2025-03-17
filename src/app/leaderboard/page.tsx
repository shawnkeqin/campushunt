'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import QuestsLayout from './layout';
const steps = [
  { title: "TreasureHunter23", link: '/profile/1' },
  { title: "CampusExplorer", link: '/profile/2' },
  { title: "CoinCrafter", link: '/profile/3' },
];

const LeaderboardPage: React.FC = () => {
  const router = useRouter();

  return (
    <QuestsLayout>
    <div className="mx-auto text-center">

      <div className="relative mx-auto text-center">
      <h1 className="text-4xl font-bold pb-0 pt-[20%] mb-8">Leaderboard</h1>
      <p>Total Players: 1289</p>
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

export default LeaderboardPage;
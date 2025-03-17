'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import QuestsLayout from './layout';
import Image from 'next/image';
const steps = [
  { title: "Sunway Gold 1", link: '/sunway-gold/1' },
  { title: "Sunway SG 1", link: '/sunway-sg/1' },
  { title: "Sunway Silver 1", link: '/sunway-silver/1' },
];

const QuestsPage: React.FC = () => {
  const router = useRouter();

  return (
    <QuestsLayout>
      <div className="mx-auto text-center">
        <div className="relative mx-auto text-center">
          <h1 className="text-4xl font-bold pb-0 pt-[20%]">Sunway SG 1</h1>
          <p>Conquer the tasks, crack the clues,  and claim this treasure! 
          RM1000 awaits—let the hunt begin!</p>
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
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <ul className="flex justify-around py-4">
          <li className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/home')}>
          <Image
    src={'/home.svg'}
    alt="Back"
    width={32}
    onClick={() => router.push('/')}
    height={32}

  />
            <span className="text-sm text-[#60829D]">Home</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/leaderboard')}>
          <Image
    src={'/leaderboard.svg'}
    alt="Back"
    width={32}
    onClick={() => router.push('/leaderboard')}
    height={32}

  />
            <span className="text-sm text-[#60829D]">Leaderboard</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/profile')}>
          <Image
    src={'/user.svg'}
   alt="Back"
    width={32}
    onClick={() => router.push('/profile')}
    height={32}

  />
            <span className="text-sm text-[#60829D]">Profile</span>
          </li>
        </ul>
      </nav>
    </QuestsLayout>
  );
};

export default QuestsPage;
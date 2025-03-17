'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import QuestsLayout from './layout';
import Image from 'next/image';
const steps = [
  { title: "The treasure lies near the path where many first step onto campus—look for the wide arch with the golden letters.", link: '/sunway-gold/1' },
  { title: "Sunway SG 1", link: '/sunway-sg/1' },
  { title: "Sunway Silver 1", link: '/sunway-silver/1' },
];

const QuestsPage: React.FC = () => {
  const router = useRouter();

  return (
    <QuestsLayout>
      <div className="mx-auto text-center">
        <div className="relative mx-auto text-center">
          <h1 className="text-4xl font-bold pb-0 pt-[20%]">Sunway Gold 1</h1>
          <p>Conquer the tasks, crack the clues,  and claim this treasure! 
          RM1000 awaits—let the hunt begin!</p>
          <ul className="h-[50vh] mt-[5vh] space-y-4 pt-6 bg-white rounded-tl-2xl rounded-tr-2xl">
            {steps.map((step, index) => (
              <li
                key={index}
                className="w-[85%] mx-auto flex  gap-x-2 p-4 rounded-lg border border-[#E7ECF0] shadow-md 
                text-[#11446D] hover:text-white bg-white hover:bg-[#11446D] cursor-pointer transition mt-8"          
                onClick={() => router.push(step.link)}
              >
                <p className="!text-left justify-center font-bold">{index + 1}</p> <p className='text-start'>{step.title}</p> 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </QuestsLayout>
  );
};

export default QuestsPage;
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import QuestsLayout from './layout';
const steps = [
  { title: "The treasure lies near the path where many first step onto campus—look for the wide arch with the golden letters.", link: '/sunway-gold/1' },
  { title: "The next hint is hidden where students gather for books and coffee. Head to the place of knowledge and caffeine.", link: '/sunway-sg/1' },
  { title: "The treasure isn’t far, just past the first stone laid in the year of the university’s foundation.", link: '/sunway-silver/1' },
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
          <div className="h-[50vh] mt-[5vh] space-y-4 pt-6 bg-white rounded-tl-2xl rounded-tr-2xl">
<div className="w-[85%] rounded-xl mx-auto px-8 bg-[#50D6D6] text-white text-center p-6" onClick={() => router.push('/sunway-gold/1/clue-summary')}>
<h3 className="font-bold text-3xl">
All Clues Unlocked!
</h3>
<p>
You’ve cracked every hint! Tap here to piece it all together and find where the treasure is waiting for you.
</p>
</div>

<ul>
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
      </div>
    </QuestsLayout>
  );
};

export default QuestsPage;
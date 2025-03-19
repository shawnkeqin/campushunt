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
          <h1 className="text-4xl font-bold pb-0 pt-[20%]">Clue Summary</h1>
          <p>You’ve unlocked all the clues—now it’s time to connect the dots and uncover the treasure’s hidden location. Ready to claim your prize?</p>
          <ul className="text-[#11446D] h-[50vh] mt-[5vh] space-y-4 pt-6 bg-white rounded-tl-2xl rounded-tr-2xl">
          <li>The treasure lies near the path where many first step onto campus—look for the wide arch with the golden letters.</li>
    <li>The next hint is hidden where students gather for books and coffee. Head to the place of knowledge and caffeine.</li>
    <li>The treasure isn’t far, just past the first stone laid in the year of the university’s foundation.</li>
    <li>Look for the bustling area where students gather after class, near where memories are shared online.</li>
    <li>Find the tall statue that watches over the library’s front door. The treasure might just be under its gaze.</li>
    <li>The treasure is within reach, just a few steps away from the heart of campus, where everyone passes by.</li>
    <li>Your next step leads to where students relax and chat under the shade of the trees. Keep your eyes peeled!</li>
    <li>The treasure hides in the shadow of the one who leads this great institution. Find where leadership stands tall.</li>
    <li>Where the mascot stands proud, the treasure is waiting in the shadow of a symbol of school pride.</li>
    <li>Look towards the area known for lively discussions and tweets—the place where students meet and share.</li>
    <li>Your next hint is hidden just beyond the door where wisdom and books dwell—head to the library’s heart.</li>
    <li>Near the place where champions train, the treasure lies within the walls where victory is celebrated.</li>
    <li>The treasure hides where water flows freely, near a fountain that reflects the sky above.</li>
    <li>The treasure is near the center of activity, where students gather to shape the future of the university.</li>
    <li>Rest your feet by the bench, near the shady trees. The next clue is somewhere between the leaves and stone.</li>
    <li>Strength is found in the gym, but your treasure lies in the path behind it, where few tread.</li>
    <li>The next hint is behind the door where students meet to plan and create—look for it inside the student union.</li>
    <li>The treasure is closer than you think—under the sun and the eyes of many, near where you snapped that selfie.</li>
    <li>Where the motto is displayed proudly, the treasure rests nearby, waiting to be discovered.</li>
    <li>The last hint takes you where students find peace—near the benches where everyone takes a break. The treasure is hidden nearby.</li>
          </ul>
        </div>
      </div>
    </QuestsLayout>
  );
};

export default QuestsPage;


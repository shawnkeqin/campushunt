'use client'
import React, { useState, useEffect } from 'react';
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
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <QuestsLayout>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-2xl text-[#11446D] font-bold">Treasure Hunt House Rules</h2>
            <p className="mt-2 text-[#11446D] ">1. Play Fair & Honest: Complete tasks yourself, submit real proof, and let everyone enjoy the adventure equally.</p>
            <p className="mt-2 text-[#11446D] ">2. Safety First: Stay within safe, accessible areas and follow all campus rules—your well-being matters most!</p>
            <p className="mt-2 text-[#11446D] ">3. No Digging or Damage: Coins are never buried or hidden in places requiring destruction. Look carefully but respect the surroundings.</p>

            <p className="mt-2 text-[#11446D] ">4. One Claim Per Player: Each coin can only be claimed once per player. Share the fun and let everyone have a shot!</p>
            <p className="mt-2 text-[#11446D] ">5. Have Fun & Stay Kind: Treat others and the environment with respect, and enjoy the thrill of the hunt!</p>
           
            <button
            type="button"
            onClick={() => setShowModal(false)}
            className="py-5 w-full p-2 text-white rounded-full transition bg-gradient-to-r from-[#4FD5D5] to-[#2595F7]"
            
          >
      GOT IT 
          </button>
        
          </div>
        </div>
      )}

      <div className="mx-auto text-center">
        <div className="relative mx-auto text-center">
          <h1 className="text-4xl font-bold pb-0 pt-[20%]">Treasure Hunt</h1>
          <p>Complete tasks, gather clues, and find hidden campus treasures!</p>
          <ul className="h-[50vh] mt-[5vh] space-y-4 pt-6 bg-white rounded-tl-2xl rounded-tr-2xl">
            {steps.map((step, index) => (
              <li
                key={index}
                className="w-[85%] mx-auto flex items-center gap-x-2 p-4 rounded-lg border border-[#E7ECF0] shadow-md 
                text-[#11446D] hover:text-white bg-white hover:bg-[#11446D] text-center cursor-pointer transition mt-8"          
                onClick={() => router.push(step.link)}
              >
                <p className="justify-center font-bold">{index + 1}</p> <p>{step.title}</p> 
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <ul className="flex justify-around py-4">
          <li className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/home')}>
            <Image src={'/home.svg'} alt="Home" width={32} height={32} />
            <span className="text-sm text-[#60829D]">Home</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/leaderboard')}>
            <Image src={'/leaderboard.svg'} alt="Leaderboard" width={32} height={32} />
            <span className="text-sm text-[#60829D]">Leaderboard</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/profile')}>
            <Image src={'/user.svg'} alt="Profile" width={32} height={32} />
            <span className="text-sm text-[#60829D]">Profile</span>
          </li>
        </ul>
      </nav>
    </QuestsLayout>
  );
};

export default QuestsPage;

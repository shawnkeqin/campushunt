'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuestsLayout from './layout';
import Image from 'next/image';

const steps = [
  { title: "Edit Profile", link: '/edit-profile' },
  { title: "Notifications", link: '/notifications' },
  { title: "Redeem Coins", link: '/redeem-coins' },
  { title: "How to Play", link: '/how-to-play' },
  { title: "Help & Support", link: '/help-support' },
  { title: "Follow Unilah", link: '/follow-unilah' },
  { title: "Logout", link: '/logout' },
];

const QuestsPage: React.FC = () => {
  const router = useRouter();

  return (
    <QuestsLayout>

    
      <div className="mx-auto text-center">
        <div className="relative mx-auto text-center">
          <h1 className="text-4xl font-bold pb-0 pt-[20%]">JhonDoe</h1>
          <p>jhondoe@email.com</p>
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

  
    </QuestsLayout>
  );
};

export default QuestsPage;

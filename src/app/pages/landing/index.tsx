'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const LandingPage: React.FC = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/login')} className="bg-gradient-to-r from-[#4FD5D5] to-[#2595F7] min-h-screen flex flex-col justify-start items-start">
<div className="flex items-center justify-center min-h-screen">
  <div className="p-6 max-w-md text-start">
    <h1 className="text-4xl text-white font-bold">🎒🗺️📍</h1>
    <h1 className="text-4xl text-white font-bold">Unilah</h1>
    <h1 className="text-4xl text-white font-bold">Campus Hunt</h1>
  </div>
</div>
    </div>
  );
};

export default LandingPage;
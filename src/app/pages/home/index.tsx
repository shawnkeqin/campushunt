'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isFormValid = name.trim() !== '' && email.trim() !== '';

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="p-6 max-w-md mx-auto h-[80vh] text-center">
        <h1 className="text-4xl text-[#11446D] font-bold mb-4">Welcome to Campus Hunt</h1>
        <h2 className="text-2xl text-[#11446D] font-thin mb-6">We need to create a hunter profile for you first</h2>
        <form className="space-y-4 h-[60vh] flex flex-col flex-grow">
          <label className="text-[#11446D] text-start">Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full w-full py-4 p-2 text-[#11446D] border border-[#E7ECF0]"
          />
                    <label className="text-[#11446D] text-start">Email</label>
          <input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full w-full py-4 p-2 text-[#11446D] border border-[#E7ECF0]"
          />
          <div className="flex-grow"></div>
          <button
            type="button"
            onClick={() => router.push('/quests')}
            disabled={!isFormValid}
            className={`py-5 w-full p-2 text-white rounded-full transition 
              ${isFormValid ? 'bg-gradient-to-r from-[#4FD5D5] to-[#2595F7]' : 'bg-[#E7ECF0] text-[#B5C5D2] cursor-not-allowed'}`}
            
          >
            START HUNTING
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';

export default function QuestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-[#4FD5D5] to-[#2595F7]  justify-center">
        {children}
    </div>
  );
}
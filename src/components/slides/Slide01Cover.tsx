import React from 'react';

export const Slide01Cover: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20 bg-[#0A2240] text-white select-none">
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.2] text-balance">
          Argentina: un sobresaliente desarrollo humano,{' '}
          <span className="italic font-normal text-[#75B2DD]">
            donde no alcanza para comer.
          </span>
        </h1>
      </div>
    </div>
  );
};

import React from 'react';

const Hero = () => {
  return (
    <div
      className='relative h-[400px] w-full bg-cover bg-center '
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/01/81/65/85/360_F_181658575_6gz3Gx96iRndmBtXv2llVsGOGsfdT1AP.jpg')`,
      }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 flex justify-center items-center'>
        <h1 className='text-black bg-slate-100 text-4xl'>Welcome to Ryzens Wholesale LTD</h1>
      </div>
    </div>
  );
};

export default Hero;

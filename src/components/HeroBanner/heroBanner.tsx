import React from 'react';

const HeroBanner = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="ml-auto mr-auto mt-[-100px] flex h-[632px] w-[1102px] gap-[50px]">
        <div className="flex w-[300px] flex-col justify-between">
          <img
            src="/hb_bl.png"
            alt=""
          />
          <img
            src="/hb_br.png"
            alt=""
          />
        </div>
        <div className="w-[400px]">
          <img
            src="/hb_m.png"
            alt=""
          />
        </div>
        <div className="flex w-[302px] flex-col justify-between">
          <img
            src="/hb_tl.png"
            alt=""
          />
          <img
            src="/hb_tr.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[120px] mb-[96px] h-[384px] w-[800px]">
        <p className="text-[20px] font-normal leading-[32px] text-[#777777]">
          Our story
        </p>
        <p className="mt-[12px] mb-[30px] text-[48px] font-normal leading-[72px]">
          Handshake infographic mass market crowdfunding iteration.
        </p>
        <p className="text-[20px] font-normal leading-[32px] text-[#777777]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.{' '}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;

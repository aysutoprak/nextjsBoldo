import React from 'react';

const Leaders = () => {
  return (
    <div className="flex h-[989px] justify-center">
      <div className="mt-[96px] h-[773px] w-[1000px]">
        <div className="ml-auto mr-auto mb-[52px] h-[251px] w-[800px]">
          <p className="text-[20px] font-normal leading-[32px] text-[#777777]">
            Our team
          </p>
          <p className="mt-[12px] mb-[20px] text-[48px] font-normal leading-[72px]">
            The leadership team
          </p>
          <p className="text-[20px] font-normal leading-[32px] text-[#777777]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{' '}
          </p>
        </div>
        <div className="flex h-[470px] w-[1000px] justify-between">
          <div>
            <img
              src="/micheal.png"
              alt=""
            />
            <p className="mb-[12px] text-[28px] font-normal leading-[48px]">
              Micheal Scott
            </p>
            <p className="text-[20px] font-normal leading-[32px] text-[#777777]">
              General Manager
            </p>
          </div>
          <div>
            <img
              src="/dwight.png"
              alt=""
            />
            <p className="mb-[12px] text-[28px] font-normal leading-[48px]">
              Dwight Schrute
            </p>
            <p className="text-[20px] font-normal leading-[32px] text-[#777777]">
              General Manager
            </p>
          </div>
          <div>
            <img
              src="/pam.png"
              alt=""
            />
            <p className="mb-[12px] text-[28px] font-normal leading-[48px]">
              Pam Beetsley
            </p>
            <p className="text-[20px] font-normal leading-[32px] text-[#777777]">
              General Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;

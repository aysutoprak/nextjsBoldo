import React from 'react';

const Stats = () => {
  return (
    <div className="flex h-[584px] flex-col items-center bg-[#0a2640] text-white">
      <div className="mt-[94px] mb-[84px] flex h-[184px] w-[842px] flex-col items-center">
        <p className="text-[20px] font-normal leading-[32px]">Our Numbers</p>
        <p className="mt-[12px] mb-[30px] text-center text-[48px] font-normal leading-[72px]">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>
      <div className="flex h-[124px] w-[1000px] gap-[136px]">
        <div>
          <p className="text-[96px] font-normal leading-[56px] text-[#4FE9A4]">
            120m
          </p>
          <p className="mt-[32px] text-[24px] font-normal leading-[36px] text-[#F1F1F1]">
            Cool feature title
          </p>
        </div>
        <div>
          <p className="text-[96px] font-normal leading-[56px] text-[#4FE9A4]">
            10.000
          </p>
          <p className="mt-[32px] text-[24px] font-normal leading-[36px] text-[#F1F1F1]">
            Cool feature title
          </p>
        </div>
        <div>
          <p className="text-[96px] font-normal leading-[56px] text-[#4FE9A4]">
            240
          </p>
          <p className="mt-[32px] text-[24px] font-normal leading-[36px] text-[#F1F1F1]">
            Cool feature title
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

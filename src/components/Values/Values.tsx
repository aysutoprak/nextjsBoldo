import React from 'react';

function Values() {
  return (
    <div className="flex h-[1166px] flex-col items-center bg-[#0a2640] pt-[120px]">
      <div className="w-[799px] text-white">
        <p className="text-[20px] font-normal leading-[32px]">Our values</p>
        <p className="mt-[12px] mb-[20px] text-[48px] font-normal leading-[72px]">
          Things in we believe
        </p>
        <p>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake <br /> infographic mass market crowdfunding iteration.
          Traction stock user experience <br /> deployment beta innovator
          incubator focus.{' '}
        </p>
      </div>
      <div className="mt-[72px] flex h-[606px] w-[800px] flex-col justify-between text-white">
        <div className="flex h-[154px] w-[800px] gap-[50px]">
          <div>
            <img
              className="h-[150px] w-[150px]"
              src="/card_img1.png"
              alt=""
            ></img>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="mb-[16px] text-[28px] font-normal leading-[48px] text-white">
              We are commited.
            </p>
            <p className="text-[20px] font-normal leading-[32px] text-[#f1f1f1]">
              Conversion angel investor entrepreneur first mover advantage.{' '}
              <br /> Handshake infographic mass market crowdfunding iteration.{' '}
            </p>
          </div>
        </div>
        <div className="flex h-[154px] w-[800px] gap-[50px]">
          <div>
            <img
              className="h-[150px] w-[150px]"
              src="/card_img2.png"
              alt=""
            ></img>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="mb-[16px] text-[28px] font-normal leading-[48px] text-white">
              We are responsible.
            </p>
            <p className="text-[20px] font-normal leading-[32px] text-[#f1f1f1]">
              Conversion angel investor entrepreneur first mover advantage.{' '}
              <br /> Handshake infographic mass market crowdfunding iteration.{' '}
            </p>
          </div>
        </div>
        <div className="flex h-[154px] w-[800px] gap-[50px]">
          <div>
            <img
              className="h-[150px] w-[150px]"
              src="/card_img3.png"
              alt=""
            ></img>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="mb-[16px] text-[28px] font-normal leading-[48px] text-white">
              We aim for progress.
            </p>
            <p className="text-[20px] font-normal leading-[32px] text-[#f1f1f1]">
              Conversion angel investor entrepreneur first mover advantage.{' '}
              <br /> Handshake infographic mass market crowdfunding iteration.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;

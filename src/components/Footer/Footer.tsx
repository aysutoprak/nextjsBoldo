import React from 'react';

const Footer = () => {
  return (
    <div className="mt-[124px] h-[949px]">
      <div className="ml-auto mr-auto mb-[84px] flex h-[391px] w-[1200px] items-center justify-center rounded-[10px] bg-[#0a2640]">
        <div className="flex h-[248px] w-[716px] flex-col items-center justify-center">
          <div className="text-[48px] text-white">
            <p className="text-center text-[48px] font-normal leading-[72px]">
              An enterprise template to ramp up your company website
            </p>
          </div>
          <div className="mt-[30px] h-[60px] w-[604px]">
            <input
              className="mr-[10px] h-[56px] w-[370px] rounded-[30px] indent-[30px] text-black placeholder:m-[10px] placeholder:text-[20px] placeholder:font-normal placeholder:leading-[32px] placeholder:text-black placeholder:opacity-100"
              placeholder="Your email address"
              type="text"
            />
            <button className="h-[60px] w-[219px] rounded-[50em] bg-[#69e6a6] text-[18px] font-bold text-[#0a2640]">
              Start now
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[auto] mr-[auto] flex h-[474px] w-[1121px] items-center justify-between">
        <div>
          <div className="h-[41px] w-[156px]">
            <img
              className="h-full w-full"
              src="/footer_boldo_logo.png"
              alt=""
            />
          </div>
          <div className="text-[18px] text-[#777777]">
            <p className="mt-[40px]">
              Social media validation business model <br />
              canvas graphical user interface launch <br />
              party creative facebook iPad twitter.
            </p>
          </div>
          <div className="mt-[64px] text-[18px] text-[#777777]">
            <p className="mt-[40px]">All rights reserved.</p>
          </div>
        </div>
        <div className="flex h-[240px] w-[642px] justify-between text-[#777777]">
          <div>
            <p className="mb-[50px] text-[20px] font-bold leading-[32px] text-black">
              Landings
            </p>
            <div className="flex flex-col items-start gap-[40px]">
              <p className="text-[20px] font-normal leading-[32px]">Home</p>
              <p className="text-[20px] font-normal leading-[32px]">Products</p>
              <p className="text-[20px] font-normal leading-[32px]">Services</p>
            </div>
          </div>
          <div>
            <p className="mb-[50px] text-[20px] font-bold leading-[32px] text-black">
              Company
            </p>
            <div className="flex flex-col items-start gap-[40px]">
              <p className="text-[20px] font-normal leading-[32px]">Home</p>
              <p className="text-[20px] font-normal leading-[32px]">
                Careers
                <button className="ml-[10px] h-[30px] w-[72px] rounded-[30px] border-none bg-[#69e6a6] text-[13px] font-bold text-[#0a2640]">
                  Hiring!
                </button>
              </p>
              <p className="text-[20px] font-normal leading-[32px]">Service</p>
            </div>
          </div>
          <div>
            <p className="mb-[50px] text-[20px] font-bold leading-[32px] text-black">
              Resources
            </p>
            <div className="flex flex-col items-start gap-[40px]">
              <p className="text-[20px] font-normal leading-[32px]">Blog</p>
              <p className="text-[20px] font-normal leading-[32px]">Products</p>
              <p className="text-[20px] font-normal leading-[32px]">Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

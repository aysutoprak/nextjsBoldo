import React from 'react';
import Navbar from '../Navbar';

export interface HeaderProps {
  headerFirst: string;
  headerSecond: string;
  headerThird: string;
  children?: JSX.Element;
}

function Header({
  headerFirst,
  headerSecond,
  headerThird,
}: HeaderProps): JSX.Element {
  return (
    <div className="m-0 flex h-[615px] flex-col bg-[#0a2640] p-0 text-white">
      <Navbar />
      <div className="ml-auto mr-auto mt-[72px] flex h-[279px] w-[888px] flex-col items-center">
        <p className="text-[20px] font-normal leading-[32px]">{headerFirst}</p>
        <p className="text-center text-[64px] font-normal leading-[84px]">
          {headerSecond}
        </p>
        <p className="mt-[17px] text-center text-[16px] font-normal leading-[28px]">
          {headerThird}
        </p>
      </div>
    </div>
  );
}

export default Header;

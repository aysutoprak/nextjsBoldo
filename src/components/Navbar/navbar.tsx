import React from 'react';

function Navbar(): JSX.Element {
  return (
    <div className="flex h-[98px] items-end justify-center bg-[#0a2640] text-white">
      <nav className="m-0 flex h-[42px] w-[1200px] p-0">
        <div>
          <img
            className="h-[42px] w-[162px]"
            src="/boldo_logo_navbar.png"
            alt=""
          />
        </div>
        <ul className="ml-auto flex items-center gap-[40px]">
          <li>
            <p>Product</p>
          </li>
          <li>
            <p>Services</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <button className="h-[40px] w-[128px] rounded-[24px] bg-white text-[#0a2640]">
              Log In
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

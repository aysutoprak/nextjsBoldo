import React from 'react';
import Image from 'next/image';
import img from './boldo_logo_navbar.png';
import styles from './navbar.module.css';


function Navbar(): JSX.Element {
  return <div className={styles.navbar_div}>
    <nav className={styles.navbar}>
      <div className="navbar-left">
        <Image src={img} alt="" />
      </div>
      <ul className={styles.navbar_right}>
      <li><p>Product</p></li>
      <li><p>Services</p></li>
      <li><p>About</p></li>
      <li><button className={styles.login_button}>Log In</button></li>
      </ul>
    </nav>
  </div>;
}

export default Navbar;

import React from 'react';
import styles from './header.module.css';

interface HeaderProps {
  headerFirst : string;
  headerSecond: string;
  headerThird: string;
}

function Header({ headerFirst, headerSecond, headerThird }: HeaderProps): JSX.Element {
  return <div className={styles.header_div}> 
    <div className={styles.about_div}>
        <p className={styles.header_first}>{headerFirst}</p>
        <p className={styles.header_second}>{headerSecond}</p>
        <p className={styles.header_third}>{headerThird}</p>
    </div>
  </div>;
}

export default Header;

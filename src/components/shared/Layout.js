import styles from './Layout.module.css';
import Header from '../Header';
import Menu from '../Menu';
import LogoMenu from '../LogoMenu';
import React, { useState } from 'react';

function Layout({ children, activeMenu }) {
  const [noMenu, setNoMenu] = useState(true);

  function clickHamburger (){
    setNoMenu(!noMenu)
  };

  return (
    <div className={styles.container}>
      <Header  clickHamburger={clickHamburger}/>
      <div className={styles.layout}>

        {
          noMenu
          ? <Menu activeMenu={activeMenu} />
          : <LogoMenu activeMenu={activeMenu} />
        }
        <div className={noMenu 
          ?styles.contents 
          :styles.setContents}> {children}</div>
      </div>
    </div>
  );
}

export default Layout;
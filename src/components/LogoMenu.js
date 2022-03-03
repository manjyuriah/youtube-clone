import styles from './Menu.module.css';
import {Link} from 'react-router-dom'
import { TiHome } from 'react-icons/ti';
import { FaRegCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';



function LogoMenu({activeMenu}) {
    return (
      <div className={styles.Logomenu}>
        <Link
          to="/"
          className={activeMenu === 'home' 
          ? styles.LogoFocused
          : styles.LogoLink}
        >
          <TiHome className={styles.icon} />
          <div className={styles.text}>홈</div>
        </Link>
        <Link
          to="/explore"
          className={activeMenu === 'explore' 
          ? styles.LogoFocused
          : styles.LogoLink}
        >
          <FaRegCompass className={styles.icon} />
          <div className={styles.text}>탐색</div>
        </Link>
        <Link
          to="/subscription"
          className={activeMenu === 'subscription' 
          ? styles.LogoFocused
          : styles.LogoLink}
        >
          <MdSubscriptions className={styles.icon} />
          <div className={styles.text}>구독</div>
        </Link>
      </div>
    );
  }
  
  export default LogoMenu;
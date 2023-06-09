import React, {useState} from 'react';
import styles from './navbar.module.scss';
import cubeseed from "../../icons/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import hamburgerIcon from "../../icons/menu-icon.svg"
import xIcon from "../../icons/x-symbol.svg"
import { useRouter } from 'next/navigation';



const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter()

  const handleOnClick = () => {
      router.push('/join/join')
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <Image className={styles.hamburger} src={hamburgerIcon} alt='menu' onClick={toggleMenu}/>
      <Link className={styles.logo} href="/"><Image src={cubeseed} alt='cubeseed-logo'/></Link>
      <ul className={`${styles.navLinks} ${showMenu ? styles.showMenu : ''}`}>
        <div className={styles.close_btn}>
            <Image src={xIcon} alt='x-symbol' onClick={toggleMenu}/>
        </div>
        <li><Link href="/">About</Link></li>
        <li><Link href="/how_it_works/how_it_works">How it works</Link></li>
        <li><Link href="/features/features">Features</Link></li>
        <li><Link href="/team/team">Team</Link></li>
        <button className={styles.waitBtn_small_screen} onClick={handleOnClick}>Join Waitlist</button>
      </ul>
      <button className={styles.waitBtn} onClick={handleOnClick}>Join Waitlist</button>
    </nav>
  );
};

export default Navbar;
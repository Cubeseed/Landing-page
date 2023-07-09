import React from 'react';
import styles from './footer.module.scss'
import Image from 'next/image';
import instagram from "../../icons/instagram.svg"
import twitter from "../../icons/twitter.svg"
import facebook from "../../icons/facebook.svg"
import Link from 'next/link'



const Footer: React.FC = () => {
  return (
        <footer className={styles.main_footer}>
            <div className={styles.footer}>
            <div className={styles.footer_left}>
                <h3>Cubeseed</h3>
                <button>Join Waitlist</button>
            </div>
            <div className={styles.footer_right}>
                <div>
                    <ul>
                        <li><Link href="/about/about">About</Link></li>
                        <li><Link href="/features/features">Features</Link></li>
                        <li><Link href="/how_it_works/how_it_works">How it Works</Link></li>
                        <li><Link href="/contact_us/contact_us">Contact Us</Link></li>
                        <li><Link href="/team/team">Team</Link></li>
                    </ul> 
                </div>
                <div>
                    <p>A new way to Farm and invest in Agriculture in Africa</p>   
                </div>  
            </div>
            <div className={styles.icons}>
            <Image src={instagram} alt="instagram"/>
            <Image src={twitter} alt="twitter"/>
            <Image src={facebook} alt="facebook"/>

            </div>
            </div>
        </footer>
  );
};

export default Footer;
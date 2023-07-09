import React from 'react';
import styles from './contact_us.module.scss'
import Image from 'next/image';
import rightLeaves from "../../icons/right-leaves.svg"

const Header: React.FC = () => {
  return (
    <div className={styles.main_contact}>
        <div className={styles.main_header}>
            <div className={styles.header_container}>
            <div className={styles.left_leaves}>  </div> 
            <div  className={styles.header_title}>
            <h3>Contact us</h3> 
            <h4>We would be happy to help you with any of your requests! All recommendations, suggestions, and offers of cooperation are welcome!</h4>
            </div>
            </div>
            <div className={styles.right_leaves}>
                    <Image src={rightLeaves} alt='leaves'/>     
            </div>   
            </div>
        <div className={styles.contact}>
        <p>Phone:</p>
           <p>+2349135365078</p> 
            <p>+2347065314400 (WhatsApp)</p>
            <p>Email:</p>
            <p>Virtualagrocommerce@gmail.com 
            (Cubeseed)</p>
            <p>mcagricinternaitonal@gmail.com 
            (Services)</p>
        </div>
    </div>
  );
};

export default Header;
import React from 'react';
import styles from './join_request.module.scss'
import { useRouter } from 'next/router';


const Join: React.FC = () => {
  const router = useRouter()

  const handleOnClick = () => {
      router.push('/about/about')
  }

  return (
    <div>
        <div className={styles.join_main}>
          <div className={styles.join_main_title}>
            <h1>Join the Waitlist for Cubeseed</h1>
          </div>
        <div className={styles.box}>
            <div className={styles.leaf}>
                <h4>Thank you for submitting your request!</h4> 
                   <p>We will be in touch shortly!</p>
             <div className={styles.join_btn}>
             <button onClick={handleOnClick}>To Main page</button>
             </div>
              </div>
            </div>
        </div>   
        <div className={styles.sphere}>
  
        </div>
      </div>   
      
  );
};

export default Join;
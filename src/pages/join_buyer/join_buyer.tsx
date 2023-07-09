import React from 'react';
import Image from 'next/image';
import styles from './join_buyer.module.scss'
import back from "../../images/back.svg"
import { useRouter } from 'next/router';



const Join: React.FC = () => {
  const router = useRouter()

  const handleOnClick = () => {
      router.push('/join/join')
  }

  const handleFurther = () => {
    router.push('/join_request/join_request')
}

  return (
    <div>
        <div className={styles.join_main}>
        <div className={styles.join_main_title}>
          <h1>Join the Waitlist for Cubeseed</h1>
          <h2>Fresh from the farm to your doorstep at farm-gate prices</h2>
       </div>
        <div className={styles.box}>
            <div className={styles.leaf}>
                <h4>Please answer the additional questions to help us get to know you.</h4>
                <h5>User Type: <span>Direct-to-farm-buyer</span></h5>
                <form className={styles.main_form}>
                    <label>Farm Product of Interest</label>
                    <input type="text"  />
                    <label>Average Quantity Per Order</label>
                    <input type="text"  />
                    <label htmlFor="consumer">Consumer</label>
                            <select id="consumer" name="consumer">
                            <option value="supermarket">Supermarket</option>
                            <option disabled>────────────────────</option>
                            <option value="household">Household</option>
                            <option disabled>────────────────────</option>
                            <option value="hotel">Hotel</option>
                            <option disabled>────────────────────</option>
                            <option value="restaurant">Restaurant</option>
                            </select>

                            <label htmlFor="payment">Payment Preference</label>
                            <select id="payment" name="payment">
                            <option value="advance">Payment in advance</option>
                            <option disabled>────────────────────</option>
                            <option value="delivery">Payment on delivery</option>
                            </select>
              </form>
              <div className={styles.main_btn}>
              <div className={styles.back_btn}>
               <p onClick={handleOnClick}><Image src={back} alt='back'/>Back</p>
               </div>
             <div className={styles.join_btn}>
             <button onClick={handleFurther}>Join</button>
             </div>
            </div>
            </div>
        </div>   
        <div className={styles.sphere}>
  
        </div>
      </div>   

    </div>  
      
  );
};

export default Join;
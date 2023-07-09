import React from 'react';
import styles from './join.module.scss'
import { useRouter } from 'next/router';
import { useState, ChangeEvent  } from 'react';




const Join: React.FC = () => {
  const router = useRouter()
  const [selectedUserType, setSelectedUserType] = useState('');



  const handleUserTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserType(event.target.value);
  };

  const handleOnClick = () => {
    
      if (selectedUserType === 'investor') {
        router.push('/join_investor/join_investor')

      } else if (selectedUserType === 'seller') {
        router.push('/join_producer/join_producer')

      } else if (selectedUserType === 'provider') {
        router.push('/join_provider/join_provider')

      } else if (selectedUserType === 'marketplace') {
        router.push('/join_buyer/join_buyer')

      } else if (selectedUserType === 'processing') {
        router.push('/join_processor/join_processor')

      } else (selectedUserType === 'farmer')
        router.push('/join_farmers/join_farmers')
  }

  return (
    <div>
        <div className={styles.join_main}>
          <div className={styles.join_main_title}>
            <h1>Join the Waitlist for Cubeseed</h1>
            <h2>A new way to Farm and invest in Agriculture in Africa</h2>
          </div>
            <div className={styles.box}>
                <div className={styles.leaf}>
                    <form className={styles.main_form}>
                        <label>Name</label>
                        <input type="text" id="fname" name="fname" />
                        <label>Email</label>
                        <input type="email" id="email" name="email"/>
                        <label>Phone Number</label>
                        <input type="phone" id="phone" name="phone"/>
                        <label>Address</label>
                        <input type="text" id="address" name="address"/>
                        <label htmlFor="user">User Profile Type</label>
                            <select id="user" name="user" value={selectedUserType} onChange={handleUserTypeChange}>
                            <option value="farmer">Farmer</option>
                            <option disabled>────────────────────</option>
                            <option value="investor">Investor</option>
                            <option disabled>────────────────────</option>
                            <option value="seller">Input Producer</option>
                            <option disabled>────────────────────</option>
                            <option value="provider">Service Provider</option>
                            <option disabled>────────────────────</option>
                            <option value="processing">Processing/Storage</option>
                            <option disabled>────────────────────</option>
                            <option value="marketplace">Marketplace</option>
                            </select>
                    </form>
                        <div className={styles.join_btn}>
                            <button onClick={handleOnClick}>Continue</button>
            
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
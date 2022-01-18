import React from "react";
import styles from '../styles/ReactivateToken.module.css';
import BunnyBg from '../assets/bunny-bg.png'

const ReactivateToken = () => {
  return (
    <div className={styles.ReactivateToken}>
      <h2 className={styles.RTHeader}>Reactivate Token</h2>
      <h5 className={styles.RTSubHeader}>Connect crypto wallet to claim rebase token</h5>
      <p className={styles.RTText}>
        Rebase is an increase or decrease in the total supply of a given token
        across all holding pools and all wallets. This is done in order to
        adjust the token price, without affecting the value of anyone’s share of
        coins.
      </p>
      <button className={styles.HeroButtonPrimary}>Activate Token</button>
      <img src={BunnyBg} alt="Bunny" className={styles.Bunnysvg} />
    </div>
  );
};

export default ReactivateToken;

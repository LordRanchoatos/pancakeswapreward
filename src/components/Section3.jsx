import React from "react";
import { ReactComponent as TradeBg } from "../assets/trade-cut-bg.svg";
import styles from "../styles/Section3.module.css";
import BnbCoin from "../assets/bnb-coin.png";
import BtcCoin from "../assets/btc-coin.png";
import PancakeCoin from "../assets/pancake-coin.png";

const Section3 = () => {
  return (
    <div className={styles.Section3}>
      <div>
        <TradeBg className={styles.TradeBg} />
      </div>
      <div className={styles.Section3Content}>
        <div className={styles.Section3Writeup}>
          <h3>
            <span className={styles.TextHighlighted}>Trade</span> anything. No
            registration, no hassle.
          </h3>
          <p>
            Trade any token on Binance Smart Chain in seconds, just by
            connecting your wallet.
          </p>
          <button className={styles.HeroButtonPrimary}>Trade Now</button>
        </div>
        <div className={styles.Section3Coins}>
          <img src={PancakeCoin} className={styles.PancakeCoin} />
          <img src={BtcCoin} className={styles.BtcCoin} />
          <img src={BnbCoin} className={styles.BnbCoin} />
        </div>
      </div>
    </div>
  );
};

export default Section3;

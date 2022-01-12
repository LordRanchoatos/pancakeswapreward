import React from 'react';
import styles from '../styles/Section1.module.css'
import SwapTokenUI from '../assets/swap-tokens-ui.png'
import LiquidityOptionsUI from '../assets/liquidity-options.png';

const Section1 =() => {
  return (
    <div className={styles.Section1}>
      <div className={styles.Section1InnerContainer}>
        <div>
          <img alt="swap tokens" src={SwapTokenUI} />
        </div>  
        <div className={styles.Section1Section2}>
          <h2 className={styles.Section1MainText}>
            <span>Swap</span> your tokens and provide <span>liquidity</span> in an instant
          </h2>
          <img alt="swap tokens" src={LiquidityOptionsUI} />
        </div>
      </div>      
    </div>
  )
}

export default Section1;
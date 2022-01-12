import React from "react";
import Bunny from '../assets/bunny-2x.png';
import styles from '../styles/Hero.module.css'
import BunnyStarBack from '../assets/star-middle.png';
import BunnyStarBottom from '../assets/star-bottom.png';
import BunnyStarTop from '../assets/star-top.png';

const Hero = () => {
  return (
    <div className={styles.Hero}>      
      <div
        className={styles.HeroContainer}
      >          
          <div>
            <h2
              className={styles.bigHeroText}
            >
              You deserve a reward.
            </h2>
            <h2
              className={styles.HeroText}
            >
              {`You’re`} one step from claiming your rewards on your preferred token and get it airdropped to any wallet of your choice on the most popular decentralized platform in the galaxy.
            </h2>
            <div className={styles.HeroFlexButtons}>
              <button className={styles.HeroButtonPrimary} >
                Claim
              </button>
              <a href="/swap">
                <button className={styles.HeroButtonOutline} >
                  Trade
                </button>
              </a>
            </div>
          </div>
          <div className={styles.heroImgContainer}>            
            <img src={Bunny} alt="big-bunny" />
            <img alt="bunny star placed at top" src={BunnyStarTop} className={styles.bunnyStarTop} />
            <img alt="bunny star placed at bottom" src={BunnyStarBottom} className={styles.bunnyStarBottom} />
            <img alt="bunny star placed at the behind" src={BunnyStarBack} className={styles.bunnyStarBack}/>
          </div>
        </div>          
    </div>
  );
};

export default Hero;

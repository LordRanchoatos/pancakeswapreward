import React from "react";
import { ReactComponent as Logo } from "../assets/pancake-logo.svg";
import { ReactComponent as ThreeDotsIcon } from "../assets/three-dots-icon.svg";
import { ReactComponent as CakeLogo } from "../assets/cake-logo.svg";
import { ReactComponent as GlobeIcon } from "../assets/globe-icon.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings-icon.svg";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.NavContainer}>
      <nav className={styles.Nav}>
        <div className={styles.NavSectionOne}>
          <div className={styles.NavLogo}>
            <a
              aria-label="Pancake home page"
              className={styles.NavLogoCentering}
              href="/"
            >
              <Logo className={styles.NavLogoMainDesktop} />
            </a>
          </div>
          <div className={styles.NavRandom}>
            <div className={styles.NavRandomItem}>
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <div className={styles.NavRandomItemInner}>Trade</div>
                </div>
              </div>
            </div>
            <div className={styles.NavRandomItem}>
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <div className={styles.NavRandomItemInner}>Earn</div>
                </div>
              </div>
            </div>
            <div className={styles.NavRandomItem}>
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <div className={styles.NavRandomItemInner}>Win</div>
                </div>
              </div>
            </div>
            <div className={styles.NavRandomItem}>
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <div className={styles.NavRandomItemInner}>NFT</div>
                </div>
              </div>
            </div>
            <div className={styles.NavRandomItem}>
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <div className={styles.NavRandomItemInner}>
                    <ThreeDotsIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.NavSectionTwo}>
          <div className={styles.CakeSignal}>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
              target="_blank"
              className={styles.CakeSignalFlex}
              rel="noreferrer"
            >
              <CakeLogo className={styles.CakeLogoAnim} />
              <div className={styles.CakeSignalText}>$14.827</div>
            </a>
          </div>
          <div className={styles.GlobeArea}>
            <button className={styles.NavSvgButton}>
              <GlobeIcon className={styles.NavSvgButtonSvg} />
            </button>
          </div>
          <div className={styles.SettingsFlex}>
            <button
              className={styles.NavSvgButton}
              scale="sm"
              id="open-settings-dialog-button"
            >
              <SettingsIcon className={styles.NavSvgButtonSvg} />
            </button>
          </div>
          <button className={styles.NavConnectButton} scale="sm">
            Connect Wallet
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

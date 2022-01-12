import React from "react";
import styles from "../styles/Section2.module.css";
import InfoCard from "./infoCard";
import PancakePurple from "../assets/pancake-purple.png";
import { ReactComponent as UsersIcon } from "../assets/users-icon.svg";
import { ReactComponent as TradesIcon } from "../assets/trades-icon.svg";
import { ReactComponent as RewardsIcon } from "../assets/rewards-icon.svg";

const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <img
        src={PancakePurple}
        alt="Purple Version of the famous pancake swap logo"
      />
      <h2 className={styles.SectionTextBig}>
        Used by millions.
        <br /> Trusted with billions.
      </h2>
      <p className={styles.SectionShortText}>
        PancakeSwap has the most users of any decentralized platform ever. And
        those users are now entrusting the platform with over $16 billion in
        funds.
      </p>
      <span className={styles.SectionQuestion}>Will you join them?</span>
      <div className={styles.infoCardSection}>
        <InfoCard
          Icon={UsersIcon}
          children={
            <p>
              2.8 million <span style={{ color: "#280D5F" }}>Users</span>
            </p>
          }
          statement={"in the last 30 days"}
        />
        <InfoCard
          Icon={TradesIcon}
          children={
            <p>
              31 million <span style={{ color: "#1FC7D4" }}>trades</span>
            </p>
          }
          statement={"made in the last 30 days"}
        />
        <InfoCard
          Icon={RewardsIcon}
          children={
            <p>
              1.1 million <span style={{ color: "#ED4B9E" }}>rewards</span>
            </p>
          }
          statement={"claimed in the last 7 days"}
        />
      </div>
    </div>
  );
};

export default Section2;

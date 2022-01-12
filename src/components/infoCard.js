import React from 'react';
import styles from '../styles/infocard.module.css';

const InfoCard = ({ Icon, children, statement }) => {
  return (
    <div className={styles.InfoCard}>
      <Icon className={styles.InfoCardIcon} />
      <div>
        <h3>{children}</h3>
      </div>
      <p className={styles.InfoCardStatement}>{statement}</p>
    </div>
  )
}

export default InfoCard;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <img
        src={`${process.env.PUBLIC_URL}/images/bards-n-mead-banner.png`}
        alt="Bards n Mead Banner"
        className={styles.homeBanner}
      />
      <p className={styles.homeDescription}>
        A tavern-running board game of music, mead, and mischief. Compete to earn the most Renown by entertaining crowds,
        serving frothy drinks, and sabotaging rival taverns — all in good fun.
      </p>

      <div className={styles.homeButtons}>
        <Link to="/rules" className={styles.ctaButton}>📜 Read the Rules</Link>
        <Link to="/progress" className={styles.ctaButton}>⚒️ Development Progress</Link>
      </div>
    </div>
  );
}

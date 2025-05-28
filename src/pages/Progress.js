import React from 'react';
import styles from '../styles/Progress.module.css';

export default function Progress() {
  return (
    <div className={styles.progressContainer}>
      <h1>Development Progress</h1>
      <ul className={styles.progressList}>
        <li>✅ Rulebook draft complete</li>
        <li>⚙️ Card balancing underway</li>
        <li>🔜 Prototype board creation</li>
      </ul>

      <h2>Screenshots</h2>  
      <div className={styles.screenshotGallery}>
        <img src={`${process.env.PUBLIC_URL}/images/dev/dex-cards.png`} alt="Dextrous Project" />
      </div>
    </div>
  );
}
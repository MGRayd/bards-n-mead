import React, { useState } from 'react';
import styles from '../styles/Rules.module.css';

export default function AccordionCard({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.rulesCard}>
      <h2
        onClick={() => setOpen(!open)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {title}
        <span style={{ fontSize: '1rem', opacity: 0.6 }}>{open ? '▲' : '▼'}</span>
      </h2>
      <div className={open ? styles.accordionContent : styles.accordionHidden}>
        {children}
      </div>
    </div>
  );
}

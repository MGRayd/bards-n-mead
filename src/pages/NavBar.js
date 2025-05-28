import React from 'react';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navLink}>Home</NavLink>
      <NavLink to="/rules" className={styles.navLink}>Rules</NavLink>
      <NavLink to="/progress" className={styles.navLink}>Dev Progress</NavLink>
    </nav>
  );
}
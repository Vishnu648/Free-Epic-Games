import React from 'react';
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <img className={styles.logo} src='/logo.png' alt='logo'/>
        <h2>Free Epic Games</h2>
    </div>
  )
}

export default Header
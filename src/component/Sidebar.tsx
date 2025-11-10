import React from 'react'
import styles from '../styles/Sidebar.module.css'
import Radio from './Radio'

const Sidebar = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
        <div className={styles.top_logo}>
            <p className={styles.logo}>Sidebar</p>
        </div>
        </div>
        <div className={styles.top_nav}>
            <div className={styles.circle}></div>
            <span className={styles.nav_name}>Home</span>
        </div>
        <Radio/>
        <Radio/>
        </div>
 
  )
}

export default Sidebar
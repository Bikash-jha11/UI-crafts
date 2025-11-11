import React from 'react'
import styles from '../styles/Goeey.module.css'
import logo from '../assets/logo.png'


const Goeey = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_circle}>
        <img src={logo}></img>
      </div>
      <div className={styles.content}>
        <div className={styles.texts}>
          <p className={styles.next_js}>Next.js&nbsp; &nbsp; v.1.0.2</p>
          <div className={styles.errors}>
            <p className={styles.error}>Error</p>
            <p className={styles.numberoferror}>6</p>
          </div>
          <p className={styles.error}>Route &nbsp;&nbsp;&nbsp; <span className={styles.next_js}>/home</span></p>
        </div>
      </div>
    </div>
  )
}

export default Goeey
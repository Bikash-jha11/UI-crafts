import React from 'react'
import styles from '../styles/Textreveal.module.css'

function TextReveal() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>
           <p className={styles.io}>Google I/0</p> <p className={styles.light}>Catch up on</p> <p className={styles.bold}>21 May,2025</p>  <button className={styles.btn}>Get Ticket</button>
           <div className={styles.blurarea}></div>
           </div>
          
      </div>
    </div>
  )
}

export default TextReveal
import React from 'react'
import styles from '../styles/Radialmenu.module.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiPrinter } from "react-icons/fi";
import { MdSlowMotionVideo } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { FiCalendar } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

function Radialmenu() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.main}>
            <div className={styles.div1}>
               <FaArrowLeftLong className={styles.icon1}/>
            </div>
            <div className={styles.div2}>
               <MdSlowMotionVideo className={styles.icon2}/>
            </div>
            <div className={styles.div3}>
                  <FiPrinter className={styles.icon3}/>
            </div>
            <div className={styles.div4}>
                   <SlEarphones className={styles.icon4}/>
            </div>
                 <FiCalendar className={styles.icon5}/>
                 <FiLock className={styles.icon6}/>
        </div>
        </div>
    </div>
  )
}

export default Radialmenu
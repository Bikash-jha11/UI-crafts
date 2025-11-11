import React, { useEffect, useState } from 'react'
import styles from '../styles/Precision.module.css'
import { HiSpeakerWave } from "react-icons/hi2";

function Precision() {
  const [hovered, setHovered] = useState(false);
  const [mouseX, setMousex] = useState(0);
  useEffect(() => { }, [mouseX])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>

          {
            !hovered ? (
              <div className={styles.small}>
                <HiSpeakerWave />
                <div className={styles.outer_volume}>
                  <div className={styles.inner_volume}></div>
                </div>
              </div>

            ) : (
              <div className={styles.big}>
                <HiSpeakerWave className={styles.speaker} />
                <div className={styles.outerbig_volume}>
                  <div className={styles.innerbig_volume}></div>
                </div>

              </div>
            )}
        </div>

      </div>
    </>
  )
}

export default Precision
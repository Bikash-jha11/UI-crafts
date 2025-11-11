import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/Precision.module.css'
import { HiSpeakerWave } from "react-icons/hi2";

function Precision() {
  const [hovered, setHovered] = useState(false);
  const [mouseX, setMousex] = useState(0);
  const ref = useRef(null);
  const bigRef = useRef(null);
  const smallRef = useRef(null);
  useEffect(() => {
    let rafId = null;
    document.addEventListener('mousemove', (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x_axis = e.clientX - rect.left;
        setMousex(x_axis);

        if (rafId === null) {
          rafId = window.requestAnimationFrame(() => {
            if (bigRef.current) {
              const outer_volume = bigRef.current.querySelectorAll('div')[0];
              const inner_volume = outer_volume.children[0];
              inner_volume.style.width = `${mouseX}px`
            }

            rafId = null;
          })
        }
      }
    })
  }, [mouseX])

  useEffect(() => {
    if (smallRef.current) {
      const smaller_outer_volume = smallRef.current.querySelectorAll('div')[0];
      const smaller_inner_volume = smaller_outer_volume.children[0];
      //very close calculation
      smaller_inner_volume.style.width = `${((mouseX / 120) * 100) - 50}%`;
    }
  }, [hovered])
  return (
    <>
      <div className={styles.container} >
        <div className={styles.main} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} ref={ref}>

          {
            !hovered ? (
              <div className={styles.small} ref={smallRef}>
                <HiSpeakerWave />
                <div className={styles.outer_volume}>
                  <div className={styles.inner_volume}></div>
                </div>
              </div>

            ) : (
              <div className={styles.big} ref={bigRef}>
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
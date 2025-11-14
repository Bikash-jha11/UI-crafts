import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/Diary.module.css'

function Diary() {
    const mainRef = useRef(null);
    const daysRef = useRef(null);
    const [mouseX, setMouseX] = useState(0)

    useEffect(() => {
        const box = mainRef.current;
        const daysBox = box.querySelector('div');
        let rafId:any = null;
  

        const rect = daysRef.current.getBoundingClientRect();

        for (let i = 0; i < 100; i++) {
            const Lines = document.createElement('div');
            Lines.classList.add(styles['lines']);
            daysBox.appendChild(Lines);
        }

        const handleMove = (e) => {
            if(rafId === null){
                rafId = window.requestAnimationFrame(() => {
                     
            const daysBox = daysRef.current.querySelectorAll('div');
            const x = e.clientX - rect.left;
            setMouseX(x)
            let cumulativeLength = 0
            
            for (let i = 0; i < 100; i++) {
                cumulativeLength += 9;
                
                if (x < cumulativeLength) {
                    console.log(i)
                    break;
                }
            }
                    rafId = null;
                })
            }
         
            

        }

        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [mouseX])




    return (
        <div className={styles.container}>
            <div className={styles.main} ref={mainRef}>
                <div className={styles.days} ref={daysRef}>
                 
                </div>
            </div>
        </div>
    )
}

export default Diary
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Minimap.module.css'

function Minimap() {
    const mainRef = useRef(null);
    const linesRef = useRef(null);
    const [mouseX, setMouseX] = useState(0)

    useEffect(() => {
        const box = mainRef.current;
        const linesBox = box.querySelector('div');
        let rafId: any = null;


        const rect = linesRef.current.getBoundingClientRect();

        for (let i = 0; i < 25; i++) {
            const Lines = document.createElement('div');
            Lines.classList.add(styles['lines']);
            linesBox.appendChild(Lines);
        }

        const handleMove = (e) => {

            if (rafId === null) {
                rafId = window.requestAnimationFrame(() => {

                    const linesBox = linesRef.current.querySelectorAll('div');
                    const x = e.clientX - rect.left;
                    setMouseX(x)
                    let cumulativeLength = 0
                    let idx;
                    for (let i = 0; i < 100; i++) {
                        cumulativeLength += 9;

                        if (x < cumulativeLength) {
                            idx = i;

                            break;
                        }
                    }
                    let leftjump = 1;
                    let rightjump = 3;
                    for (let currIdx = idx - 5; currIdx <= idx + 5; currIdx++) {
                        leftjump += 0.2;
                        rightjump -= 0.2;
                        //if lines are on left side it will be in ascending order
                        if (currIdx <= idx) {
                            //add 5 to (idx - 5th) line to idx line 
                            linesBox[currIdx].style.transform = `scale(${leftjump})`

                        } else {
                            linesBox[currIdx].style.transform = `scale(${rightjump})`
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
                <div className={styles.days} ref={linesRef}>

                </div>
            </div>
        </div>
    )
}

export default Minimap
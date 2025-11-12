import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Scheduler.module.css'

import isInside from '../logics/isInside';

function Scheduler() {
    const ref = useRef(null);
    const moverRef = useRef(null);
    const [data, setData] = useState({ mouseX: 0, mouseY: 0 });
    const[isDraggind,setDragging] = useState(false);
    const { mouseX, mouseY } = data;


    useEffect(() => {
        let rect: any;
        let rafid: any = null;
        if (ref.current) {
            rect = ref.current.getBoundingClientRect();
        }

        const handleMove = (e) => {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setData({ mouseX: x, mouseY: y });
            if (rafid === null) {
                rafid = window.requestAnimationFrame(() => {
                    if (rect && isInside(rect, e.clientX, e.clientY)) {
                         moverRef.current.style.top = `${mouseY}px`;
                    }
                    rafid = null;
                })
            }

        }
        const handleDrag = (e) => {
             setDragging(true);
        }

        window.addEventListener('mousemove', handleMove)
        window.addEventListener('mousedown', handleDrag)

        return () => window.removeEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousedown', handleDrag);

    }, [mouseX, mouseY])
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.times}>
                    <span>1 PM</span>
                    <span>2 PM</span>
                    <span>3 PM</span>
                    <span>4 PM</span>
                    <span>5 PM</span>
                </div>
                <div className={styles.scheduler} ref={ref}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>

                    <div className={styles.mover} ref={moverRef}>

                    </div>
                <div className={styles.events}></div>
                </div>
            </div>
        </div>
    )
}

export default Scheduler
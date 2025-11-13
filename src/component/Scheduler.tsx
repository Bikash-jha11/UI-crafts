import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Scheduler.module.css'

import isInside from '../logics/isInside';

function Scheduler() {
    const ref = useRef(null);
    const moverRef = useRef(null);
    const eventRef = useRef(null);
    const [data, setData] = useState({ mouseX: 0, mouseY: 0 });
    const [draggedlength, setDraggedLength] = useState(0)
    const [isDragging, setDragging] = useState(false);
    const currLenRef = useRef(0);
    const { mouseX, mouseY } = data;


    useEffect(() => {
        let rect: any;
        let rafid: any = null;
        if (ref.current) {
            rect = ref.current.getBoundingClientRect();
        }

        const handleMouseDown = (e) => {
            currLenRef.current = e.clientY - rect.top;
            setDragging(false);

        }
        const handleMouseUp = (e) => {
            const nowAt = e.clientY - rect.top;
            const start = currLenRef.current;
            const cursordiff = Math.abs(nowAt - start)
            if (isDragging && eventRef.current) {
                eventRef.current.style.display = `inline-block`;
                eventRef.current.style.top = `${mouseY - cursordiff}px`;
                eventRef.current.style.height = `${cursordiff}px`;
            }
            setDragging(false);
        }
        const handleMove = (e) => {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setData({ mouseX: x, mouseY: y });
            setDragging(true)
            if (rafid === null) {
                rafid = window.requestAnimationFrame(() => {
                    if (rect && isInside(rect, e.clientX, e.clientY)) {
                        moverRef.current.style.top = `${mouseY}px`;
                    }
                    rafid = null;
                })
            }

        }


        window.addEventListener('mousemove', handleMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)


        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
        }


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
                    <div className={styles.events} ref={eventRef}>
                        <p>Enter your schedule....</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scheduler
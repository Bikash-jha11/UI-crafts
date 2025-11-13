import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Xray.module.css'
import isAbove from '../logics/isAbove';


function Xray() {
    const mainRef = useRef(null);
    const sliderRef = useRef(null);
    const boxRef = useRef(null);
    const[mouseY,setMouseY] = useState(0);



    useEffect(() => {
        let rafId:any = null;
        const rect = mainRef.current.getBoundingClientRect();
        const text_box = boxRef.current.getBoundingClientRect();
  
      

        const handleMove = (e) => {
            let  y = e.clientY - rect.top;
            setMouseY(y);
         
            if (rafId === null) {
                rafId = window.requestAnimationFrame(() => {
                     const text = boxRef.current.children[0];

                    if (sliderRef.current) {
                        sliderRef.current.style.height = `${mouseY}PX`
                    }
                    if (isAbove(text_box, sliderRef.current.style.height ) &&boxRef.current) {
                      
                        console.log('adding')
                       text.classList.add(styles['extra'])

                    }else{
                          text.classList.remove(styles['extra'])
                    }
                    rafId = null;
                })
            }
        }

      

        window.addEventListener('mousemove', handleMove);

        return () => {
            window.removeEventListener('mousemove', handleMove);
        }
    }, [mouseY]);


    return (
        <>
        <div className={styles.container}>
            <div className={styles.main} ref={mainRef}>
                <div className={styles.text_box} ref={boxRef}>
                    <p className={styles.text}>UI is awesome and it scales</p>
                </div>
                <div className={styles.slider} ref={sliderRef}>

                </div>
            </div>
        </div>
        </>
    )
}

export default Xray
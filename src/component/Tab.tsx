import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Tab.module.css'
import isOverlapping from '../logics/isoverlapping';

function Tab() {
    const ref = useRef(null);
    const mainRef = useRef(null);
    const [data, setData] = useState({ mouseX: 0, mouseY: 0 });
    const { mouseX, mouseY } = data;



    useEffect(() => {
        let rafId: any = null;

        document.addEventListener('mousemove', function (event) {
            let rect;

            if (mainRef.current && ref.current) {
                //@ts-ignore
                rect = mainRef.current.getBoundingClientRect();


            }

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            // const x = event.clientX;
            //  const y = event.clientY; 

            setData({ mouseX: x, mouseY: y });

            if (rafId === null) {
                rafId = requestAnimationFrame(() => {
                    if (ref.current && mainRef.current) {

                        //MOVE SLIDER AS MOUSE MOVE 
                        ref.current.style.left = `${mouseX - 40}px`;
                        ref.current.style.transitionDuration = '1s';
                        let sliderpos = ref.current.getBoundingClientRect();


                        //logic to change coloy when slider and text overlap to black
                        let texts = mainRef.current.querySelectorAll('p');
                        texts.forEach((text) => {

                            let textpos = text.getBoundingClientRect();
                            if (isOverlapping(textpos, sliderpos)) {
                                text.style.color = 'black';

                            } else {
                                text.style.color = 'white'
                            }
                        })

                    }
                    rafId = null;
                });
            }
        });

    }, [mouseX])



    return (
        <div className={styles.container}>
            <div className={styles.main} >
                <div className={styles.content} ref={mainRef} >
                    <p className={styles.text} >Feed</p>
                    <p className={styles.text} >Stories</p>
                    <p className={styles.text} >Home</p>
                    <p className={styles.text} >View</p>
                    <p className={styles.text} >Help</p>

                    <div className={styles.slider} ref={ref}>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tab
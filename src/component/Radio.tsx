import React,{useEffect, useRef, useState} from 'react'
import styles from '../styles/Radio.module.css'

function Radio() {
   const[hovered,setHovered] = useState(false);

    const ref = useRef(null);

     useEffect(() => {
   
     
       
         if(ref.current){
              
        const line = ref.current.querySelectorAll('div')[0];
        const text = ref.current.querySelectorAll('div')[1];
          line.classList.remove(styles["line_animation"]);
          text.classList.remove(styles['text_animation'])
          void line.offsetWidth;
              
           
           if(hovered){
                line.classList.add(styles["line_animation"])
                text.classList.add(styles["text_animation"])
           }
    
       }

          console.log(hovered)
     },[hovered])


  return (
    <div className={styles.container}>
        <div className={styles.units} onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} ref={ref}>
    <div className={styles.line}></div>
    <div className={styles.text}>Introduction</div>
    </div>
    {/* <div className={styles.chapters}>
    <div className={styles.line}></div>
    <div className={styles.text}></div>
    </div> */}
    </div>
  )
}

export default Radio
import React from 'react'
import styles from '../styles/TextConversion.module.css'

const TextConversion = () => {
    return (
        <>
        <div className={styles.container}>
            <p className={styles.text}>the perfect weight is</p>
            <div className={styles.changing_div}>
                <div className={styles.slider}>
                <p className={styles.main_text}>60kg</p>
                <p className={styles.bottom_text}>132lbs</p>
                </div>
        </div>

        
            </div>
            </>
    )
}

export default TextConversion
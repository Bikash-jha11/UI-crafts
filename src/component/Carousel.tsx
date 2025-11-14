import React from 'react'
import styles from '../styles/Carousel.module.css'
import apple from '../assets/logos/apple.svg'
import tinder from '../assets/logos/tinder.svg'
import bmw from '../assets/logos/bmw.svg'
import slack from '../assets/logos/slack.svg'
import donalds from '../assets/logos/donalds.svg'
import snapchat from '../assets/logos/snapchat.svg'
import love from '../assets/logos/love.svg'
import google from '../assets/logos/google.svg'
import whatsapp from '../assets/logos/whatsapp.svg'
import ethereum from '../assets/logos/ethereum.svg'

function Carousel() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.slider}>
                    <div className={styles.first}>
                        <div className={styles.first_scrollable}>
                            <img src={apple}></img>
                            <img src={tinder}></img>
                            <img src={bmw}></img>
                               <img src={apple}></img>
                            <img src={tinder}></img>
                            <img src={bmw}></img>
                        </div>
                    </div>

                    <div className={styles.second}>
                        <div className={styles.second_scrollable}>
                        <img src={slack}></img>
                        <img src={donalds}></img>
                        <img src={snapchat}></img>
                         <img src={slack}></img>
                        <img src={donalds}></img>
                        <img src={snapchat}></img>
                        </div>
                    </div>

                    <div className={styles.third}>
                        <div className={styles.third_scrollable}>
                        <img src={love}></img>
                        <img src={google}></img>
                        <img src={ethereum}></img>
                         <img src={love}></img>
                        <img src={google}></img>
                        <img src={ethereum}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
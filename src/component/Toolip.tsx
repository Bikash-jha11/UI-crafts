import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Toolips.Module.css'

import { FaRegComment } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import { PiShareNetworkBold } from "react-icons/pi";
import { FaRegDotCircle } from "react-icons/fa";
import roundOffTo60s from '../logics/roundoff';

const Toolip = () => {

  const [hovered, setHovered] = useState(false);
  const [data, setData] = useState({ mouseX: 0, mouseY: 0 });
  const [pix, setPix] = useState(0);
  //@ts-ignore
  const { mouseX, mouseY } = data;

  const ref = useRef(null);
  const mainref = useRef(null);


  useEffect(() => {
    document.addEventListener('mousemove', function (event) {
      let rect;
      if (mainref.current) {
        //@ts-ignore
        rect = mainref.current.getBoundingClientRect();
      }

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setData({ mouseX: x, mouseY: y });

      setPix(roundOffTo60s(mouseX));
    });

  }, [mouseX, mouseY])

  useEffect(() => {
    if (hovered) {
      if (ref.current) {
        const namesdiv = ref.current.querySelectorAll('div')[0];
        ref.current.classList.add('hover')
        ref.current.style.left = `${mouseX}` + "px";
        ref.current.style.display = 'block';
        namesdiv.style.transform = `translateX(${-pix}px)`
      }
    }

  }, [hovered])

  return (
    <div className={styles.main} ref={mainref}>
      <div className={styles.container} onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <FaRegComment className={styles.icons} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} />
        <RiInboxArchiveLine className={styles.icons} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} />
        <FaRegDotCircle className={styles.icons} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} />
        <MdOutlineCloudUpload className={styles.icons} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} />
        <PiShareNetworkBold className={styles.icons} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} />
        <IoMenu className={styles.icons} onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} />
      </div>

      {
        hovered ? (
          <div className={styles.wrapper} ref={ref}>
            <div className={styles.names}>
              <span>chat</span>
              <span>inbox</span>
              <span>view</span>
              <span>send</span>
              <span>Menu</span>
            </div>
          </div>
        ) : (<p></p>)
      }

    </div>
  )
}

export default Toolip
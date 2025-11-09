import React, { useState, useEffect } from 'react'
import styles from '../styles/Toolips.Module.css'

import { FaRegComment } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import { PiShareNetworkBold } from "react-icons/pi";
import { FaRegDotCircle } from "react-icons/fa";

const Toolip = () => {

  const [hovered, setHovered] = useState(false);
  const [data, setData] = useState({ mouseX: 0, mouseY: 0 });

  //@ts-ignore
  const { mouseX, mouseY } = data;

  useEffect(() => {
    document.addEventListener('mousemove', function (event) {
      const x = event.clientX; // Horizontal coordinate
      const y = event.clientY; // Vertical coordinate
      setData({ mouseX: x, mouseY: y });
      console.log(mouseX, mouseY)
    });
  }, [mouseX, mouseY])

  return (
    <div className={styles.main}>
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
          <div className={styles.names}>
            <span>chat</span>
            <span>inbox</span>
            <span>view</span>
            <span>upload</span>
            <span>Menu</span>
          </div>
        ) : (<p></p>)
      }

    </div>
  )
}

export default Toolip
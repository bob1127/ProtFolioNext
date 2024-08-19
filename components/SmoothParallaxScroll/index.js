'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://cdn.prod.website-files.com/61789b489343c8242282a0ae/${src}?w=${width}?p=${placeholder}`
}
const images = [
  "65d5204d5182ad1a76b7de0e_v-eAjxpodWUyCSg2blUcHVxqpagQ7gSnJQxnWR49qaU.png",
  "65d3c889459c1244c9b18495_74-9AkKzjzsxBJMdKpoUixuZrpnxoBKHjIx7Ux33H74.png",
  "652c53ebc64b205154286448_On7F43UK3MmfB1hvAD0fgadX5RbcOE3qff0odPJtW-c.jpeg",
  
 "64575947bc71a0cf995a7b34_JEubAaiocBrAyYwOH51Q-ctbfZTy_wnJ_BaDpn7swZc.jpeg",
  "645df56a9a0c36bc628ab13c_C1Cl6kLIfVJd3t855pD5qi0A_Gr1AIFYd6s9AdA9XAs.jpeg",
  "645df56142dc74d7ef923a31_E-InOL4cmnITHd7zaXBc-MMustwJUO9rs-SOjehZj7Q.jpeg",
  
   "645df569db924aa2697e2964_7PIWSQzdyu8-Mo9kxuaO8TZe5pdBM1Ch-TCJy8j7vWM.jpeg",
  "64bc392b169789b698bea1b2_cmQWBofJIav3O1g3bST4yn8s-QInGCQOt6gKpoOwZ9g.jpeg",
    "65d5204d5182ad1a76b7de0e_v-eAjxpodWUyCSg2blUcHVxqpagQ7gSnJQxnWR49qaU.png",
    
  
   "65d3c889459c1244c9b18495_74-9AkKzjzsxBJMdKpoUixuZrpnxoBKHjIx7Ux33H74.png",
  "652c53ebc64b205154286448_On7F43UK3MmfB1hvAD0fgadX5RbcOE3qff0odPJtW-c.jpeg",
  
 "64575947bc71a0cf995a7b34_JEubAaiocBrAyYwOH51Q-ctbfZTy_wnJ_BaDpn7swZc.jpeg",
]

export default function Home() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 4.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
           

            <Image 
              src={`${src}`}
              alt='image'
              fill
              loader={myLoader}
            />
    
          </div>
        })
      }
    </motion.div>
  )
}

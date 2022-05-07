import styles from './Slider.module.scss'

import { useState } from 'react';

const Slider = () => {
    const [idx, setIdx] = useState(0)

    const imgArr = ['img/kids1.jpg','img/kids2.jpg','img/kids3.jpg','img/kids4.jpg']

    return(
        <div align ="center" className={styles.wrap}>
            <img 
                className={`${styles.arrow} ${styles.leftArrow}`} 
                src='img/arrow1.png'
                onClick={() => setIdx(idx === 0 ? idx : idx - 1)}
            />
            <img src={imgArr[idx]} className={styles.img}/>
            <img 
                className={styles.arrow} 
                src='img/arrow1.png'
                onClick={() => setIdx(idx === imgArr.length - 1 ? idx : idx + 1)}
            />
        </div>
    )
}

export default Slider
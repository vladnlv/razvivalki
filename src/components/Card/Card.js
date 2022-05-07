import { useState } from 'react';
import styles from './Card.module.scss';

function Card({id, title, price, imgUrl, onPlus}) {
    const [isItemAdded, setIsItemAdded] = useState(false);
    
    const onClickPlus = () => {
        onPlus({id, title, price, imgUrl});
        setIsItemAdded(!isItemAdded);
    };

    return (
        <div className={styles.card}>
            <img width="85%" height={135} src={imgUrl} alt="Photo" />
            <h5>{title}</h5>
            <div className={styles.btm}>
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
              <img
                className={styles.plus}
                onClick = {onClickPlus}
                src={isItemAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
                alt="Plus"
              />
          </div>
        </div>
    );
}

export default Card;
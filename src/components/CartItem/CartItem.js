import { useState } from "react";
import styles from "./CartItem.module.scss";

function CartItem({ item, onRemove }) {
  const [num, setNum] = useState(1);
  const onPlus = () => {
    setNum(num + 1);
  };
  const onMinus = () => {
    num - 1 ? setNum(num - 1) : "";
  };
  return (
    <div className={styles.cartItem}>
      <div style={{ backgroundImage: `url(${item.imgUrl})` }} className={styles.cartItemImg}></div>
      <div className={styles.text}>
        <span className="mr-20 mt-5 mb-5">{item.title}</span>
      </div>
      <div className="d-flex justify-between align-center">
        <img onClick={onMinus} className={styles.pam} src="img/minus1.png" alt="Minus" />
        <p className={styles.num}>{num}</p>
        <img onClick={onPlus} className={styles.pam} src="img/plus1.png" alt="Plus" />
      </div>
      <h3 className="">{item.price} руб.</h3>
      <img onClick={() => onRemove(item.id)} className={styles.removeBtn} src="img/btn-remove.svg" alt="Remove" />
    </div>
  );
}

export default CartItem;

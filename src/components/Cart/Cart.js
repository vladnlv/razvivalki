import styles from "./Cart.module.scss";

function Cart({ cartProducts, onClose, onRemove, opened }) {
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.cart}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>

        <div className="d-flex flex-column flex">
          <div className={styles.items}>
            {cartProducts.map((item, index) => (
              <div key={index} className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: `url(${item.imgUrl})` }} className="cartItemImg"></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{item.title}</p>
                  <b>{item.price} руб.</b>
                </div>
                <img onClick={() => onRemove(item.id)} className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
              </div>
            ))}
          </div>
          <div className="cartTotalBlock">
            <span>Итого:</span>
            <div></div>
            <b>19.99 руб. </b>
            <button className="greenButton mt-40">
              Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import styles from "./Cart1.module.scss";
import CartItem from "../components/CartItem/CartItem";

function Cart1({ cartProducts, onRemove }) {
  return (
    <div className="p-25 ml-25">
      <h2 className="d-flex justify-between mb-30">Корзина</h2>

      <div className="d-flex flex-column flex">
        <div className={styles.items}>
          {cartProducts.map((item) => (
            // <div key={item.id} className="cartItem d-flex align-center mb-20">
            //   <div style={{ backgroundImage: `url(${item.imgUrl})` }} className="cartItemImg"></div>

            //   <div className="mr-20 flex">
            //     <p className="mb-5">{item.title}</p>
            //     <b>{item.price} руб.</b>
            //   </div>
            //   <img onClick={() => onRemove(item.id)} className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            // </div>
            <CartItem key={item.id} item={item} onRemove={onRemove}></CartItem>
          ))}
        </div>
        <div className="cartTotalBlock d-flex justify-between">
          <div className="d-flex">
            <h3 className="mr-20">Итого:</h3>
            <h3>17 руб. </h3>
          </div>
          <div>
            <button className="greenButton">
              Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart1;

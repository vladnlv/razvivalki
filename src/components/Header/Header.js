import "./Header.module.scss";

import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className="d-flex justify-between align-center pt-40 pl-40 pr-40 pb-0">
        <div className="cu-p d-flex align-center">
          <img width={45} src="img/logo.png" alt="logo" />
          <div className="ml-20">
            <h3 className="text-uppercase">Razvivalki</h3>
            <p className="opacity-7">Интернет-магазин развивающих игрушек</p>
          </div>
        </div>
        <ul className="d-flex">
          {/* onClick={props.onClickCart} */}
          <NavLink to="/cart">
            <li className="mr-30 cu-p">
              <img className="mb-5" width={25} height={25} src="img/cart.png" alt="Корзина" />
              <span className="ml-5 text-center">1500 руб.</span>
            </li>
          </NavLink>
          <li onClick={props.onClickAcc} className="mr-30 cu-p">
            <img width={25} height={25} src="img/user.png" alt="Пользователь" />
          </li>
        </ul>
      </div>
      <ul className="mt-20 mb-20 d-flex align-center justify-center">
        <li className="mr-30 cu-p">
          <NavLink to="/">
            <p>Главная</p>
          </NavLink>
        </li>
        <li className="mr-30 cu-p">
          <NavLink to="/catalog">
            <p>Каталог</p>
          </NavLink>
        </li>
        <li className="mr-30 cu-p">
          <NavLink to="/delnpay">
            <p>Доставка и оплата</p>
          </NavLink>
        </li>
        <li className="cu-p">
          <NavLink to="/aboutus">
            <p>О нас</p>
          </NavLink>
        </li>
      </ul>
      <hr />
    </header>
  );
}

export default Header;

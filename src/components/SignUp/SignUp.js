import styles from "./SignUp.module.scss";
import { NavLink } from "react-router-dom";

function SignUp({ onClose, signUpOpened }) {
  return (
    <div className={`${styles.overlay} ${signUpOpened ? styles.overlayVisible : ""}`}>
      <div className={styles.login}>
        <h2 className="d-flex justify-between mb-30 mt-30">
          Регистрация <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>
        <div className={styles.inputblock}>
          <input placeholder="Логин..." />
        </div>
        <div className={styles.inputblock}>
          <input type="email" placeholder="Эл.почта..." />
        </div>
        <div className={styles.inputblock}>
          <input type="password" placeholder="Пароль..." />
        </div>
        <div className={styles.inputblock}>
          <input type="password" placeholder="Подтвердите пароль..." />
        </div>
        <button className={styles.enterButton}>Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default SignUp;

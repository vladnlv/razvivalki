import styles from "./SignIn.module.scss";
import { NavLink } from "react-router-dom";

function SignIn({ onClose, signInOpened, onSignUp, signUpOpened }) {
  return (
    <div className={`${styles.overlay} ${signInOpened ? styles.overlayVisible : ""}`}>
      <div className={styles.login}>
        <h2 className="d-flex justify-between mb-30 mt-30">
          Вход <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>

        <div className={styles.inputblock}>
          <input placeholder="Логин..." />
        </div>

        <div className={styles.inputblock}>
          <input type="password" placeholder="Пароль..." />
        </div>

        <button className={styles.enterButton}>Войти</button>

        <div className={styles.ref} onClick={onSignUp}>
          Зарегистрироваться
        </div>
      </div>
    </div>
  );
}

export default SignIn;

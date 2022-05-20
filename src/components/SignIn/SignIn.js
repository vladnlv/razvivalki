import styles from "./SignIn.module.scss";
import validator from "validator";
import { useState } from "react";
import axios from "axios";

function SignIn({ onClose, signInOpened, onSignUp, signUpOpened, setUser }) {
  const [login, setLogin] = useState(() => {
    return {
      email: "",
      password: "",
    };
  });

  const changeInputLogin = (event) => {
    event.persist();
    setLogin((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    if (!validator.isEmail(login.email)) {
      alert("You did not enter email");
    } else if (login.password.length < 6) {
      alert("Password must contain 6 or more symbols");
    } else {
      axios
        .post("http://localhost:8085/signin", {
          email: login.email,
          password: login.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data !== null) {
            alert("You signed in successfully");
            setUser(res.data);
            //window.location.href = "http://localhost:8080/";
          } else {
            alert("Incorrect email or password");
          }
        })
        .catch(() => {
          alert("An error occurred on the server");
        });
    }
  };

  return (
    <div className={`${styles.overlay} ${signInOpened ? styles.overlayVisible : ""}`}>
      <div className={styles.login}>
        <h2 className="d-flex justify-between mb-30 mt-30">
          Вход <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>

        <div className={styles.inputblock}>
          <input
            type="email"
            id="email"
            name="email"
            value={login.email}
            onChange={changeInputLogin}
            formNoValidate
            placeholder="Эл.почта..."
          />
        </div>

        <div className={styles.inputblock}>
          <input
            type="password"
            id="password"
            name="password"
            value={login.password}
            onChange={changeInputLogin}
            placeholder="Пароль..."
          />
        </div>

        <button className={styles.enterButton} onClick={submitLogin}>
          Войти
        </button>

        <div className={styles.ref} onClick={onSignUp}>
          Зарегистрироваться
        </div>
      </div>
    </div>
  );
}

export default SignIn;

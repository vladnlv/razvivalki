import styles from "./SignUp.module.scss";
import validator from "validator";
import { useState } from "react";
import axios from "axios";

function SignUp({ onClose, signUpOpened, isSignUpCorrect }) {
  const [register, setRegister] = useState(() => {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  });

  const changeInputRegister = (event) => {
    event.persist();
    setRegister((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitChackin = (event) => {
    event.preventDefault();
    if (!validator.isEmail(register.email)) {
      alert("You did not enter email");
    } else if (register.password.length < 6) {
      alert("Password must contain 6 or more symbols");
    } else if (register.password2.length < 6) {
      alert("Password must contain 6 or more symbols");
    } else if (register.password !== register.password2) {
      alert("Repeated password incorrectly");
    } else {
      axios
        .post("http://localhost:8085/registration", {
          name: register.name,
          email: register.email,
          password: register.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data === true) {
            isSignUpCorrect();
            //window.location.href = "http://localhost:8080/";
          } else {
            alert("There is already a user with this email");
          }
        })
        .catch(() => {
          alert("An error occurred on the server");
        });
    }
  };

  return (
    <div className={`${styles.overlay} ${signUpOpened ? styles.overlayVisible : ""}`}>
      <div className={styles.login}>
        <h2 className="d-flex justify-between mb-30 mt-30">
          Регистрация <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>
        <div className={styles.inputblock}>
          <input
            type="name"
            id="name"
            name="name"
            value={register.name}
            onChange={changeInputRegister}
            placeholder="Логин..."
          />
        </div>
        <div className={styles.inputblock}>
          <input
            type="email"
            id="email"
            name="email"
            value={register.email}
            onChange={changeInputRegister}
            formNoValidate
            placeholder="Эл.почта..."
          />
        </div>
        <div className={styles.inputblock}>
          <input
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={changeInputRegister}
            placeholder="Пароль..."
          />
        </div>
        <div className={styles.inputblock}>
          <input
            type="password"
            id="password2"
            name="password2"
            value={register.password2}
            onChange={changeInputRegister}
            placeholder="Подтвердите пароль..."
          />
        </div>
        <button onClick={submitChackin} className={styles.enterButton}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}

export default SignUp;

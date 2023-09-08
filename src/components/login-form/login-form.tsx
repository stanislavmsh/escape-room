import React, { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/user-process/user-process.action';
import { useLocation, useNavigate } from 'react-router-dom';

type TInputValues = {
  email: string;
  password: string;
}

type TLocationState = {
  from: {
    pathname: string;
  };
}

type TLocationObject = {
  state? : TLocationState;
}

export default function LoginForm() {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location: TLocationObject = useLocation();

  const [isChecked, setIsChecked] = useState(false);
  const [inputValues , setInputValues] = useState<TInputValues>({
    email: '',
    password: '',
  });

  const handleCheckboxClick = () => {
    setIsChecked((current) => !current);
  };

  const handleInputsChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.type === 'email') {
      setInputValues({ ...inputValues, email: evt.target.value });
    } else {
      setInputValues({ ...inputValues, password: evt.target.value });
    }
  };

  const handleSubmit = (evt : FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(inputValues)).then(() => {
      if(location.state?.from) {
        navigate(location.state.from.pathname);
      }
    });
    setIsChecked(false);
  };

  const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  const regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

  const isPasswordValid = regexPassword.test(inputValues.password);
  const isLoginValid = regexEmail.test(inputValues.email);
  const isUserInfoValid = isPasswordValid && isLoginValid;


  return(
    <div className="login__form">
      <form
        className="login-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login-form__inner-wrapper">
          <h1 className="title title--size-s login-form__title">Вход</h1>
          <div className="login-form__inputs">
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="email">
                    E&nbsp;–&nbsp;mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Адрес электронной почты"
                value={inputValues.email}
                onChange={handleInputsChange}
                required
              />
            </div>
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">
                    Пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                value={inputValues.password}
                onChange={handleInputsChange}
                required
              />
            </div>
          </div>
          <button
            className="btn btn--accent btn--general login-form__submit"
            type="submit"
            disabled={!isUserInfoValid}
          >
                Войти
          </button>
        </div>
        {isUserInfoValid &&
         <label className="custom-checkbox login-form__checkbox">
           <input
             type="checkbox"
             id="id-order-agreement"
             name="user-agreement"
             onChange={handleCheckboxClick}
             checked={isChecked}
             required
           />
           <span className="custom-checkbox__icon">
             <svg width={20} height={17} aria-hidden="true">
               <use xlinkHref="#icon-tick" />
             </svg>
           </span>
           <span className="custom-checkbox__label">
                Я&nbsp;согласен с
             <a
               className="link link--active-silver link--underlined"
               href="#"
             >
                  правилами обработки персональных данных
             </a>
                &nbsp;и пользовательским соглашением
           </span>
         </label>}
      </form>
    </div>
  );
}

import {login, setToken, setName } from "./api.js"
import {getTodo} from "./main.js"
import { renderRegister } from "./renderRegister.js";

export const renderLogin = ()=>{
    const appEl = document.getElementById('app');
    const loginHtml = ` <div id="form" class="add-form">
    <p>Форма входа</p>
    <input
      id="loginInput"
      type="text"
      class="login-input"
      placeholder="Введите логин"
    />
    <br>
    <input
      id="passwordInput"
      type="password"
      class="password-input"
      placeholder="Введите пароль"
    ></input>
    
      <button  id="enterButton"  class="login-button">Войти</button>

  </div>
  <br>
  <div id="regLink" class="reg-link">Регистрация</div>
  </div> `
  appEl.innerHTML = loginHtml;
  document.querySelector('.add-form').scrollIntoView();
  const enterButtonEl = document.getElementById('enterButton');
  const loginInpurEl = document.getElementById('loginInput');
  const passwordInputEl = document.getElementById('passwordInput');

  const regLinkEl = document.getElementById('regLink');
  regLinkEl.addEventListener('click', ()=>{
    renderRegister();
  })

enterButtonEl.addEventListener('click', ()=>{
  document.querySelector(".body").scrollIntoView({behavior: 'smooth'})
    login({
        login:loginInpurEl.value,
        password:passwordInputEl.value,
    })
    .then((resData)=>{
        setToken(resData.user.token);
        getTodo();
        return resData;
    })
    .then((resData)=>{
      setName(resData.user.name);
    }) 
})
}
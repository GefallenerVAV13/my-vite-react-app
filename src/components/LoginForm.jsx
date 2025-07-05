import React from 'react';
import { Placeholder } from './Placeholder';
import Cross from '../assets/cross.svg?react';
import { NavigateButton } from './NavigateButton';

export const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Email:', email);
    console.log('Password:', password);

    alert(`Вы вошли как ${email}`);
  };

  return (
    <div className='login'>
      <div className='login-f'>
            <div className='cross'>
              <NavigateButton link={"/"} icon={<Cross className = "footer-icon logo"/>} className={'btnNav'}/>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
        <div className='loginHeader'>
            <h2 className='MainText'>Войти</h2>
        </div>

        <div className='form-group'>
            <div className="form-item">
                <Placeholder title={"Email"} type={"email"}/>
            </div>

            <div className="form-item">
                <Placeholder title={"Пароль"} type={"password"}/>
            </div>
        </div>
        <div className='btnn-login'> 
        <NavigateButton link="/" icon={"Войти"} className={"btnAccentLarge"} />
        </div>
        </form>
        </div>
    </div>
  );
};
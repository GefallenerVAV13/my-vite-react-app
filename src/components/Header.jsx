import React from 'react'
import ProfileIcon from '../assets/profile1.svg?react';
import CartIcon from '../assets/cart1.svg?react';
import Logo from '../assets/logo.svg?react';
import { NavigateButton } from './NavigateButton';

const Header = () => {
  return (
    <header className="header">
      <NavigateButton link="/" icon={<Logo className="icon logo"/>} className={'btnNav'}/>
      <div className='menu'>
        <NavigateButton link="/cart" icon={<CartIcon className="icon"/>} className={'btnNav'}/>
        <NavigateButton link="/login" icon={<ProfileIcon className="icon"/>} className={'btnNav'}/> 
      </div>
    </header>
  )
}

export default Header
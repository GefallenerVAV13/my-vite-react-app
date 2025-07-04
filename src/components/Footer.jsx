import React from 'react';
import Logo from '../assets/logo.svg?react';
import Inst from '../assets/inst5.svg?react';
import Yt from '../assets/yt2.svg?react';
import VK from '../assets/vk.svg?react';
import TG from '../assets/tg.svg?react';
import { NavigateButton} from './NavigateButton';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Покупателю</p>
        <ul className="footer-links">
          <li><a className='link' href="#">Акции</a></li>
          <li><a className='link' href="#">Оплата</a></li>
          <li><a className='link' href="#">Доставка</a></li>
        </ul>
      </div>
        <NavigateButton link="/" icon={<Logo className="icon logo"/>} className={'btnNav'}/>
      <div className="footer-right">
        <div>
          <p>Контакты</p>
          <ul className="footer-links">
            <li><a className='link' href="tel:+79999999999">+799-999-99-99</a></li>
            <li><a className='link' href="mailto:vav@gmail.com">VAV@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <ul className="social-media-icons">
            <li><NavigateButton link="/" icon={<Inst className = "footer-icon logo"/>} className={'btnNav'}/></li>
            <li><NavigateButton link="/" icon={<VK className = "footer-icon logo"/>}className={'btnNav'}/></li>
            <li><NavigateButton link="/" icon={<TG className = "footer-icon logo"/>}className={'btnNav'}/></li>
            <li><NavigateButton link="/" icon={<Yt className = "footer-icon logo"/>}className={'btnNav'}/></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
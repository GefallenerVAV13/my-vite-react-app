import React from 'react';
import { MainButton } from './MainButton';
import MoreIco from '../assets/more.svg?react';

export const ProductItem = ({ item }) => {
  return (
    <div className='Product-block'>
      <div className='Item-card'>
        <div className='Item-img'>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        <div className='Item-title'>
          <h4>{item.title}</h4>
        </div>
      </div>
      <div className='Item-info'>
        
        <p><strong>{item.price}$</strong></p>
        <div className='Item-Btn'>
          <MainButton title={<MoreIco className="icon-more"/>} className={'btnNeutral-more'}/>
          <MainButton title={"Купить"} className={'btnNeutral'}/>
        </div>
      </div>
    </div>
  );
};
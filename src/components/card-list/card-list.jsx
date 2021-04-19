import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card';

export const CardList = (props) => {
  return (
  <div className='card-list'>
      {props.profiles.map(item => (<Card key={item.id} monster={item}  />))}
  </div>);
}

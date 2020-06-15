import React from 'react';
import Card from './Card';
import {Kit} from './Kit';

const CardList = () =>{
  const cardComponent = Kit.map((id, i) => {
     return  <Card id={Kit[i].id}
             img={Kit[i].img} 
             name={Kit[i].name} 
             price={Kit[i].price} 
             model={Kit[i].model}  />
   });

   return (
     <div className='flex flex-wrap pa2 ba b--dotted bw2'>
      {cardComponent}
     </div>
    );

}

export default CardList;
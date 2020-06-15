import React from 'react';

const Card = (props) =>{
  return (
    <div className='cardsize tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
    <img src={props.img} alt={props.img} />
    <h2> {props.name}</h2>
    <h2>Model: {props.model} </h2>
    <div class="ph3">
  	 <a class="f6 link dim ph3 b pv2 mb2 dib white navy bg-light-green" href="#0">Pret: {props.price}</a>
	</div>
    <h2> </h2>
    </div>
    );

}

export default Card;
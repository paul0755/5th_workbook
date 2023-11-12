import React from 'react';
import adimg from '../img/Untitled.svg';

const Ad = ({showAd})=>{
  if(!showAd){
    return null;
  }

  return(
    <div className='ad-container'>
      <img src={adimg} alt="ad"></img>
    </div>
  )
};

export default Ad;
import React, { Component } from 'react'
import './Cards.css';

function Cards({ classes, headerText}) {
    return (
    <div className={classes}>
      <div>{headerText != '' ? headerText : ''}</div>
      <div className='cards-wrapper'>
        <ul className='cards-items'>
        </ul>
      </div>
    </div>
    )
}

export default Cards;

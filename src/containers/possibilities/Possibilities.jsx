import React from 'react'
import './possibilities.css'
import possibilityImage from '../../assests/assets/possibility.png'

const Possiblities = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
      <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content' >
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text' >
        The possibilities are beyond your imagination
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione dolore quam mollitia tempore, maiores sint ad facilis obcaecati molestias sequi fugit repudiandae corrupti facere eum alias praesentium. Eos, eum.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possiblities

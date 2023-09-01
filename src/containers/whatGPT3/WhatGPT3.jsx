import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature ' >
        <Feature title="What is GPT3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias possimus, ullam consectetur ipsum omnis qui. Dicta odio maiores expedita laboriosam adipisci quisquam, molestiae recusandae dignissimos voluptatibus earum facere eos esse nostrum reiciendis a tempora illo velit."/>
         
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature className='feature' title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias possimus, ullam consectetur ipsum omnis qui. Dicta odio maiores expedita laboriosam adipisci quisquam, molestiae recusandae dignissimos voluptatibus earum facere eos esse nostrum reiciendis a tempora illo velit. "/>
        <Feature className='feature' title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature className='feature' title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default WhatGPT3



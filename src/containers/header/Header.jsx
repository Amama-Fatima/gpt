import React from 'react';
import people from '../../assests/assets/people.png';
import ai from '../../assests/assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='' />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='' />
    </div>
  </div>
);

export default Header;
















// import React from 'react'
// import './header.css'
// import people from '../../assests/assets/people.png';
// import ai from '../../assests/assets/ai.png'
// import allthree from '../../assests/assets/allthree.png'
// import two from '../../assests/assets/two.png'
// import boot from '../../assests/assets/boot.png'


// const Header = () => {
//   return (
//     <div className='gpt3__header section__padding'  id='home' >
//       <div className='gpt3__header-content'>
//         <h1 className='gradient__text' >
//         Responsive and Visually Aesthetic Landing Pages
//         </h1>
//         <div className='imgs'>
//         <img src={allthree} alt=""  className='allthree'/>
//         <img src={two} alt=""  className='two'/>
//         <img src={boot} alt="" className='boot'/>
//         </div>
        
//         {/* <div className='gpt3__header-content__input'>
//           <input type="email" placeholder='Your Email Address' />
//           <button type='button'>Get Started</button>

//         </div>
//         <div className='gpt__header-content__people' >
//           <img src={people} alt="people" />
//           <p>1,600 people requested access a visit in last 24 hours</p>
//         </div> */}
       
//       </div>
//       <div className='gpt3__header-image' >
//           <img src={ai} alt="ai" />
//         </div>
//     </div>
//   )
// }

// export default Header

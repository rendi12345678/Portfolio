import React from 'react';
import rendiImage from '../img/rendi.jpg';
import '../styles/about.css';
import '../styles/reset.css';

const About = () => {
  return (
    <section className="about-section">
      <img src={rendiImage} 
           alt="About Image"
           title="About Image"/>
      <div className="texts">
       <h1 className="about-title">About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. eligendi ducimus mollitia similique, expedita saepe Lorem ipsum dolor sit amet, consecteur adipisicing elit. Cupiditate, quod, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quae, velit.
      </p>
      </div>
    </section>
  );
}

export default About;
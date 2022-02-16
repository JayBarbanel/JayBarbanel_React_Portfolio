import React from 'react'
import img from '../images/avatar.jpg'

import "./Warzone.css"

function About (){
    return (
        <div class="About w-100">
  <div class="card-body">
  <element id="about"/>
    <p class="about-text">For the past several years, I worked in the photography industry as an Agent and Producer <br/>
    to some of Los Angeles' and New Yorks' top photographers and directors.<br/>
    I was looking for a career change, and coding is where I landed.  <br/>
    With a big art influenced background, I find that using my creativity and new skills I developed <br/>
    at the UCLA coding bootcamp, front end development has sparked my interest.  <br/>
    I received my certificate as a full stack developer in Feb. 2022, and excited to enter the field. <br/>
    My goal is to become a Front End Developer.  With skills such as HTML, CSS, JavaScript, React, Bootstrap, Handlebars, Node, SQL and JQuery,<br/>
    I feel as if I can be a great asset to the right company.  </p>
    <img src={img} class="avatar" alt="avatar"/>
  </div>
</div>
    )
}


export default About;
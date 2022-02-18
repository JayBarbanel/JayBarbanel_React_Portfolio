import React from "react"
import img from '../Images/wz1.png'
import img2 from '../Images/wz2.png'
import img3 from '../Images/wz3.png'
import img4 from '../Images/wz4 .png'

import "./Warzone.css"

function Warzone () {
    return (
        <div class="cardWZ">
             <div class="card-body">
    <h5 class="card-title">Warzone Weapon Review</h5>
    <p class="card-text">An application thats allows users to create a profile, login, and leave reviews on specific in game weapons.<br/>
    This app was built using JavaScript, Handlebars, HTML and CSS</p>
    <a id="view" href="https://nameless-plains-70878.herokuapp.com/login " class="btn btn-primary">View App</a>
    <a id="view" href="https://github.com/JayBarbanel/CoD-Weapons-Reviewer" class="btn btn-primary">GitHub</a>
  </div>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="w-20" alt="landing page, login or sign up"/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="w-20" alt="menu page, select weapon to review"/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="w-20" alt="aar page, leave review"/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="w-20" alt="sub machine gun page, leave review"/>
    </div>
  </div>
  <button id="pro" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button id="pre"  type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
      
    )
}


export default Warzone;


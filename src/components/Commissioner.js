import React from "react"
import img from '../images/com1.jpg'
import img2 from '../images/comm2.jpg'
import img3 from '../images/comm3.jpg'


import "./Warzone.css"

function Commissioner() {
    return (
        <div class="cardWZ">
          <element id="recentwork"/>            
        <div class="card-body">
    <h5 class="card-title">The Commissioner App</h5>
    <p class="card-text">An application thats allows users to create a profile, login and search for any NBA basektball team, returning current season statistics.</p>
    <a id="view" href="https://peaceful-cliffs-88132.herokuapp.com/" class="btn btn-primary">View App</a>
    <a id="view" href="https://github.com/JayBarbanel/Commissioner" class="btn btn-primary">GitHub</a>
  </div>
        <div id="carouselExampleControlsNoTouching1" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="w-10" alt="landing page of app"/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="w-10" alt="second page with pulled data"/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="w-10" alt="update page with team selection"/>
    </div>

  </div>
  <button id="pro" type="button" data-bs-target="#carouselExampleControlsNoTouching1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button id="pre"  type="button" data-bs-target="#carouselExampleControlsNoTouching1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
      
    )
}


export default Commissioner;

import React from "react"
import img from '../images/wz1.png'
import img2 from '../images/wz2.png'
import img3 from '../images/wz3.png'


function Commissioner () {
    return (
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3}  alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    )
}


export default Commissioner;


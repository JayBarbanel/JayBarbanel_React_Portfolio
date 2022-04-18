import React from "react";
import tgn from "../Images/tgn.gif";
import page2 from "../Images/page2.png";
import page3 from "../Images/page3.png";
import page4 from "../Images/page4.png";

import "./Warzone.css";

function Network() {
  return (
    <div class="cardWZ">
      <element id="recentwork" />
      <div class="card-body">
        <h5 class="titleS">The Grace Network | Website </h5>
        <p class="card-text">
          Contract work: A website for The Grace Network, a non-profit
          organization. <br /> Responsible for creative direction, frontend
          maintenence, photo direction, graphics and layout. <br/>Built with HTML and
          CSS.{" "}
        </p>
        <a
          id="view"
          href="https://gracenetworkchi.org/"
          class="btn btn-primary"
        >
          Visit Site
        </a>
      </div>
      <div
        id="carouselExampleControlsNoTouching4"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={tgn} class="w-10" alt="landing page of app" />
          </div>
          
      </div>
    </div>
    </div>
  );
}

export default Network;

import React from "react";

function About() {
  return (
    <>
      <div className="about container">
        <div className="about-left">
          <h2>Our Journey</h2>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div className="about-left-bottom">
            <div className="numbers">
              <h4>200+</h4>
              <p className="number">Happy Customers</p>
            </div>
            <div className="numbers">
              <h4>10k+</h4>
              <p className="number">Properties For Clients</p>
            </div>
            <div className="numbers">
              <h4>16+</h4>
              <p className="number">Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <img src="imgs/house.png" alt="" />
        </div>
      </div>
      <div className="value"></div>
    </>
  );
}

export default About;

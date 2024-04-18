import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
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
      <div className="value container">
        <div className="value-left">
          <h2>Our Values</h2>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="value-right">
          <div className="values ">
            <div className="value-box">
              <img src="imgs/zvezda.svg" alt="" />
              <h4>Trust</h4>
            </div>
            <p>
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div className="values ">
            <div className="value-box">
              <img src="imgs/hat.svg" alt="" />
              <h4>Excellence</h4>
            </div>
            <p>
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
          <div className="values">
            <div className="value-box">
              <img src="imgs/clients.svg" alt="" />
              <h4>Client-Centric</h4>
            </div>
            <p>
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>
          <div className="values">
            <div className="value-box">
              <img src="imgs/zvezda.svg" alt="" />
              <h4>Our Commitment</h4>
            </div>
            <p>
              We are dedicated to providing you with the highest level of
              service, professionalism, and support.
            </p>
          </div>
        </div>
      </div>
      <div className="achivement container">
        <div className="achivements-top">
          <h2>Our Achievements</h2>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="achivements-bottom">
          <div className="achives">
            <h4>3+ Years of Excellence</h4>
            <p>
              With over 3 years in the industry, we've amassed a wealth of
              knowledge and experience, becoming a go-to resource for all things
              real estate.
            </p>
          </div>
          <div className="achives">
            <h4>Happy Clients</h4>
            <p>
              Our greatest achievement is the satisfaction of our clients. Their
              success stories fuel our passion for what we do.
            </p>
          </div>
          <div className="achives">
            <h4>Industry Recognition</h4>
            <p>
              We've earned the respect of our peers and industry leaders, with
              accolades and awards that reflect our commitment to excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation container">
        <div className="navigation-top">
          <h2>Navigating the Estatein Experience</h2>
          <p>
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        <div className="navigation-bottom">
          <div className="steps">
            <h6>Step 01</h6>
            <div className="stepic">
              <h4>Discover a World of Possibilities</h4>
              <p>
                Your journey begins with exploring our carefully curated
                property listings. Use our intuitive search tools to filter
                properties based on your preferences, including location, type,
                size, and budget.
              </p>
            </div>
          </div>
          <div className="steps">
            <h6>Step 02</h6>
            <div className="stepic">
              <h4>Narrowing Down Your Choices</h4>
              <p>
                Once you've found properties that catch your eye, save them to
                your account or make a shortlist. This allows you to compare and
                revisit your favorites as you make your decision.
              </p>
            </div>
          </div>
          <div className="steps">
            <h6>Step 03</h6>
            <div className="stepic">
              <h4>Personalized Guidance</h4>
              <p>
                Have questions about a property or need more information? Our
                dedicated team of real estate experts is just a call or message
                away.
              </p>
            </div>
          </div>
          <div className="steps">
            <h6>Step 04</h6>
            <div className="stepic">
              <h4>See It for Yourself</h4>
              <p>
                Arrange viewings of the properties you're interested in. We'll
                coordinate with the property owners and accompany you to ensure
                you get a firsthand look at your potential new home.
              </p>
            </div>
          </div>
          <div className="steps">
            <h6>Step 05</h6>
            <div className="stepic">
              <h4>Making Informed Decisions</h4>
              <p>
                Before making an offer, our team will assist you with due
                diligence, including property inspections, legal checks, and
                market analysis. We want you to be fully informed and confident
                in your choice.
              </p>
            </div>
          </div>
          <div className="steps">
            <h6>Step 06</h6>
            <div className="stepic">
              <h4>Getting the Best Deal</h4>
              <p>
                We'll help you negotiate the best terms and prepare your offer.
                Our goal is to secure the property at the right price and on
                favorable terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team container">
        <div className="team-top">
          <h2>Meet the Estatein Team</h2>
          <p>
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>
        <div className="team-bottom">
          <div className="bio">
            <div className="image-box">
              <img src="imgs/1.svg" alt="" />
              <img className="btn-img" src="imgs/btn.svg" alt="" />
            </div>
            <h4> Max Mitchell</h4>
            <p>Founder</p>
            <div className="button-box">
              <h5>Say Hello 👋</h5>
              <img src="imgs/sender.svg" alt="" />
            </div>
          </div>
          <div className="bio">
            <div className="image-box">
              <img src="imgs/2.svg" alt="" />
              <img className="btn-img" src="imgs/btn.svg" alt="" />
            </div>
            <h4>Sarah Johnson</h4>
            <p>Chief Real Estate Officer</p>
            <div className="button-box">
              <h5>Say Hello 👋</h5>
              <img src="imgs/sender.svg" alt="" />
            </div>
          </div>
          <div className="bio">
            <div className="image-box">
              <img src="imgs/3.svg" alt="" />
              <img className="btn-img" src="imgs/btn.svg" alt="" />
            </div>
            <h4>Chief Real Estate Officer</h4>
            <p>Head of Property Management</p>
            <div className="button-box">
              <h5>Say Hello 👋</h5>
              <img src="imgs/sender.svg" alt="" />
            </div>
          </div>
          <div className="bio">
            <div className="image-box">
              <img src="imgs/4.svg" alt="" />
              <img className="btn-img" src="imgs/btn.svg" alt="" />
            </div>
            <h4>Michael Turner</h4>
            <p>Legal Counsel</p>
            <div className="button-box">
              <h5>Say Hello 👋</h5>
              <img src="imgs/sender.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section container">
        <div className="section-top">
          <h2>Our Valued Clients</h2>
          <p>
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="section-box">
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2019</p>
                    <h3>ABC Corporation</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Luxury Home Development</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2018</p>
                    <h3>GreenTech Enterprises</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Retail Space</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-box">
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2018</p>
                    <h3>GreenTech Enterprises</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Retail Space</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2018</p>
                    <h3>GreenTech Enterprises</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Retail Space</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-box">
              {" "}
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2019</p>
                    <h3>ABC Corporation</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Luxury Home Development</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2019</p>
                    <h3>ABC Corporation</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Luxury Home Development</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-box">
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2019</p>
                    <h3>ABC Corporation</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Luxury Home Development</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
              <div className="section-bottom">
                <div className="since">
                  <div className="year">
                    <p>Since 2019</p>
                    <h3>ABC Corporation</h3>
                  </div>
                  <button>Visit Website</button>
                </div>
                <div className="domain">
                  <div className="domain-left">
                    <div className="domainy">
                      <img src="imgs/domain.png" alt="" />
                      <p>Domain</p>
                    </div>
                    <h4>Commercial Real Estate</h4>
                  </div>
                  <div className="domain-right">
                    <div className="domainy">
                      <img src="imgs/electr.png" alt="" />
                      <p>Category</p>
                    </div>
                    <h4>Luxury Home Development</h4>
                  </div>
                </div>
                <div className="said">
                  <p>What They Said 🤗</p>
                  <h5>
                    Estatein's expertise in finding the perfect office space for
                    our expanding operations was invaluable. They truly
                    understand our business needs.
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default About;

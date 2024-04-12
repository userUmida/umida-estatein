import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function Home() {
  return (
    <>
      <div className="home ">
        <div className="home-box container">
          <div className="home-right">
            <div className="right-top">
              <h2>Discover Your Dream Property with Estatein</h2>
              <p>
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
            </div>
            <div className="right-center">
              <button>Learn More</button>
              <button className="purple">Browse Properties</button>
            </div>
            <div className="right-bottom">
              <div className="card">
                <h3>200+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="card">
                <h3>10k+</h3>
                <p>Properties For Clients</p>
              </div>
              <div className="card">
                <h3>16+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
            <img src="imgs/subcontainer.svg" alt="" />
          </div>
          <div className="home-left"></div>
        </div>
      </div>
      <div className="icons ">
        <div className="icon">
          <img src="imgs/one.png" alt="" />
          <h5>Find Your Dream Home</h5>
        </div>
        <div className="icon">
          <img src="imgs/two.png" alt="" />
          <h5>Unlock Property Value</h5>
        </div>
        <div className="icon">
          <img src="imgs/three.png" alt="" />
          <h5>Effortless Property Management</h5>
        </div>
        <div className="icon">
          <img src="imgs/four.png" alt="" />
          <h5>Smart Investments, Informed Decisions</h5>
        </div>
      </div>
      <div className="features container">
        <div className="feature-top">
          <h2>Featured Properties</h2>
          <div className="featured">
            {" "}
            <p>
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
            <button>View All Properties</button>
          </div>
        </div>
        <div className="feature-bottom">
          <Swiper
            pagination={true}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <div className="card-top">
                  <img src="imgs/first.svg" alt="" />
                </div>
                <div className="card-bottom">
                  <div className="top">
                    <h4>Seaside Serenity Villa</h4>
                    <p>
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood... Read More
                    </p>
                  </div>
                  <div className="center">
                    <button>
                      <i class="bx bxs-bed"></i>
                      4-Bedroom
                    </button>
                    <button>
                      <i class="bx bxs-bath"></i>3-Bathroom
                    </button>
                    <button>
                      <i class="bx bxs-building-house"></i>Villa
                    </button>
                  </div>
                  <div className="bottom">
                    <span>Price</span>
                    <div className="bottom-box">
                      <h5>$550,000</h5>
                      <button>View Property Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <div className="card-top">
                  <img src="imgs/second.svg" alt="" />
                </div>
                <div className="card-bottom">
                  <div className="top">
                    <h4>Metropolitan Haven</h4>
                    <p>
                      A chic and fully-furnished 2-bedroom apartment with
                      panoramic city views... Read More
                    </p>
                  </div>
                  <div className="center">
                    <button>
                      <i class="bx bxs-bed"></i>
                      2-Bedroom
                    </button>
                    <button>
                      <i class="bx bxs-bath"></i>2-Bathroom
                    </button>
                    <button>
                      <i class="bx bxs-building-house"></i>Villa
                    </button>
                  </div>
                  <div className="bottom">
                    <span>Price</span>
                    <div className="bottom-box">
                      <h5>$550,000</h5>
                      <button>View Property Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-top">
                  <img src="imgs/third.svg" alt="" />
                </div>
                <div className="card-bottom">
                  <div className="top">
                    <h4>Rustic Retreat Cottage</h4>
                    <p>
                      An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                      community... Read More
                    </p>
                  </div>
                  <div className="center">
                    <button>
                      <i class="bx bxs-bed"></i>3-Bedroom
                    </button>
                    <button>
                      <i class="bx bxs-bath"></i>3-Bathroom
                    </button>
                    <button>
                      <i class="bx bxs-building-house"></i>Villa
                    </button>
                  </div>
                  <div className="bottom">
                    <span>Price</span>
                    <div className="bottom-box">
                      <h5>$550,000</h5>
                      <button>View Property Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-top">
                  <img src="imgs/first.svg" alt="" />
                </div>
                <div className="card-bottom">
                  <div className="top">
                    <h4>Seaside Serenity Villa</h4>
                    <p>
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood... Read More
                    </p>
                  </div>
                  <div className="center">
                    <button>
                      <i class="bx bxs-bed"></i>
                      4-Bedroom
                    </button>
                    <button>
                      <i class="bx bxs-bath"></i>3-Bathroom
                    </button>
                    <button>
                      <i class="bx bxs-building-house"></i>Villa
                    </button>
                  </div>
                  <div className="bottom">
                    <span>Price</span>
                    <div className="bottom-box">
                      <h5>$550,000</h5>
                      <button>View Property Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <div className="card-top">
                  <img src="imgs/second.svg" alt="" />
                </div>
                <div className="card-bottom">
                  <div className="top">
                    <h4>Metropolitan Haven</h4>
                    <p>
                      A chic and fully-furnished 2-bedroom apartment with
                      panoramic city views... Read More
                    </p>
                  </div>
                  <div className="center">
                    <button>
                      <i class="bx bxs-bed"></i>
                      2-Bedroom
                    </button>
                    <button>
                      <i class="bx bxs-bath"></i>2-Bathroom
                    </button>
                    <button>
                      <i class="bx bxs-building-house"></i>Villa
                    </button>
                  </div>
                  <div className="bottom">
                    <span>Price</span>
                    <div className="bottom-box">
                      <h5>$550,000</h5>
                      <button>View Property Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-top">
                  <img src="imgs/third.svg" alt="" />
                </div>
                <div className="card-bottom">
                  <div className="top">
                    <h4>Rustic Retreat Cottage</h4>
                    <p>
                      An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                      community... Read More
                    </p>
                  </div>
                  <div className="center">
                    <button>
                      <i class="bx bxs-bed"></i>3-Bedroom
                    </button>
                    <button>
                      <i class="bx bxs-bath"></i>3-Bathroom
                    </button>
                    <button>
                      <i class="bx bxs-building-house"></i>Villa
                    </button>
                  </div>
                  <div className="bottom">
                    <span>Price</span>
                    <div className="bottom-box">
                      <h5>$550,000</h5>
                      <button>View Property Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="comments container">
        <div className="comments-top">
          <h2>What Our Clients Say</h2>
          <div className="featured">
            <p>
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
            <button>View All Testimonials</button>
          </div>
        </div>
        <div className="comments-bottom">
          <Swiper
            pagination={true}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="comment">
                <img src="imgs/stars.png" alt="" />
                <h3>Exceptional Service!</h3>
                <h5>
                  Our experience with Estatein was outstanding. Their team's
                  dedication and professionalism made finding our dream home a
                  breeze. Highly recommended!
                </h5>
                <div className="comment-bottom">
                  <img src="imgs/wade.png" alt="" />
                  <div className="name">
                    <h4>Wade Warren</h4>
                    <p>USA, California</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="comment">
                <img src="imgs/stars.png" alt="" />
                <h3>Efficient and Reliable</h3>
                <h5>
                  Estatein provided us with top-notch service. They helped us
                  sell our property quickly and at a great price. We couldn't be
                  happier with the results.
                </h5>
                <div className="comment-bottom">
                  <img src="imgs/emelie.png" alt="" />
                  <div className="name">
                    {" "}
                    <h4>Emelie Thomson</h4>
                    <p>USA,Florida</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment">
                <img src="imgs/stars.png" alt="" />
                <h3>Trusted Advisors</h3>
                <h5>
                  The Estatein team guided us through the entire buying process.
                  Their knowledge and commitment to our needs were impressive.
                  Thank you for your support!
                </h5>
                <div className="comment-bottom">
                  <img src="imgs/john.png" alt="" />
                  <div className="name">
                    {" "}
                    <h4>John Mans</h4>
                    <p>USA, Nevada</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="comment">
                <img src="imgs/stars.png" alt="" />
                <h3>Exceptional Service!</h3>
                <h5>
                  Our experience with Estatein was outstanding. Their team's
                  dedication and professionalism made finding our dream home a
                  breeze. Highly recommended!
                </h5>
                <div className="comment-bottom">
                  <img src="imgs/wade.png" alt="" />
                  <div className="name">
                    <h4>Wade Warren</h4>
                    <p>USA, California</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="comment">
                <img src="imgs/stars.png" alt="" />
                <h3>Efficient and Reliable</h3>
                <h5>
                  Estatein provided us with top-notch service. They helped us
                  sell our property quickly and at a great price. We couldn't be
                  happier with the results.
                </h5>
                <div className="comment-bottom">
                  <img src="imgs/emelie.png" alt="" />
                  <div className="name">
                    {" "}
                    <h4>Emelie Thomson</h4>
                    <p>USA,Florida</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment">
                <img src="imgs/stars.png" alt="" />
                <h3>Trusted Advisors</h3>
                <h5>
                  The Estatein team guided us through the entire buying process.
                  Their knowledge and commitment to our needs were impressive.
                  Thank you for your support!
                </h5>
                <div className="comment-bottom">
                  <img src="imgs/john.png" alt="" />
                  <div className="name">
                    {" "}
                    <h4>John Mans</h4>
                    <p>USA, Nevada</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="coments container">
        <div className="comments-top">
          <h2>Frequently Asked Questions</h2>
          <div className="featured">
            <p>
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
            <button>View All FAQ’s</button>
          </div>
        </div>
        <div className="comments-bottom">
          <Swiper
            pagination={true}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="comment">
                <h3>How do I search for properties on Estatein?</h3>
                <p>
                  Learn how to use our user-friendly search tools to find
                  properties that match your criteria.
                </p>
                <button>Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="comment">
                <h3>
                  What documents do I need to sell my property through Estatein?
                </h3>
                <p>
                  Find out about the necessary documentation for listing your
                  property with us.
                </p>
                <button>Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment">
                <h3>How can I contact an Estatein agent?</h3>
                <p>
                  Discover the different ways you can get in touch with our
                  experienced agents.
                </p>
                <button>Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="comment">
                <h3>How do I search for properties on Estatein?</h3>
                <p>
                  Learn how to use our user-friendly search tools to find
                  properties that match your criteria.
                </p>
                <button>Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="comment">
                <h3>
                  What documents do I need to sell my property through Estatein?
                </h3>
                <p>
                  Find out about the necessary documentation for listing your
                  property with us.
                </p>
                <button>Read More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment">
                <h3>How can I contact an Estatein agent?</h3>
                <p>
                  Discover the different ways you can get in touch with our
                  experienced agents.
                </p>
                <button>Read More</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="start-box">
        <div className="start container">
          <h2>Start Your Real Estate Journey Today</h2>
          <div className="starter">
            <p>
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
            <button>Explore Properties</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

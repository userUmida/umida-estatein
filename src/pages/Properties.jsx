import React from "react";

function Properties() {
  return (
    <>
      <div className="property container">
        <h2>Find Your Dream Property</h2>
        <p>
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </div>
      <div className="search container">
        <div className="search-top">
          <input type="text" placeholder="Search For A Property" />
          <button>
            <i class="bx bx-search"></i> Find Property
          </button>
        </div>
        <div className="search-bottom"></div>
      </div>
    </>
  );
}

export default Properties;

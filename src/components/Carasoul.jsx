import React from 'react'

function Carasoul() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{ width: "15rem", height: "30rem", opacity: "0.7" }} src="https://source.unsplash.com/random/900×700/?pizza" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-flex">
              <input style={{ border: "none", width: "50rem", height: "1.8rem", marginLeft: "10px", padding: "4px", borderRadius: "6px" }} className='input' type='search' placeholder='Search' />
              <button style={{ border: "none", color: " rgb(64, 150, 133)", borderRadius: "10px", width: "4rem", backgroundColor: " rgb(64, 150, 133)", marginLeft: "20px", color: "white" }}>Click</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?food" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?fruit" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>

        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carasoul
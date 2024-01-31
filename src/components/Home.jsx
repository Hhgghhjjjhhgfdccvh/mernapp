import React from 'react'

function Home() {
  return (
    <div style={{ display: "flex", padding:"5px",justifyContent:"center" }}>
      <div class="card" style={{ width: "18rem", height: "16rem", margin: "10px", boxShadow: "6px 7px 4px 2px lightblue" }}>
        <div style={{ border: "none" }} class="card-body">
          <div style={{ width: "18rem", height: "10rem" }}>
            <img style={{ width: "16rem", height: "10rem", border: "none", borderRadius: "2px" }} src='https://source.unsplash.com/random/900×700/?iccream' />
          </div>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", marginTop: "30px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-roumded'>
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-rounded'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div class="card" style={{ width: "18rem", height: "16rem", margin: "10px", boxShadow: "6px 7px 4px 2px lightblue" }}>
        <div style={{ border: "none" }} class="card-body">
          <div style={{ width: "18rem", height: "10rem" }}>
            <img style={{ width: "16rem", height: "10rem", border: "none", borderRadius: "2px" }} src='https://source.unsplash.com/random/900×700/?pizza' />
          </div>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", marginTop: "30px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-roumded'>
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-rounded'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div class="card" style={{ width: "18rem", height: "16rem", margin: "10px", boxShadow: "6px 7px 4px 2px lightblue" }}>
        <div style={{ border: "none" }} class="card-body">
          <div style={{ width: "18rem", height: "10rem" }}>
            <img style={{ width: "16rem", height: "10rem", border: "none", borderRadius: "2px" }} src='https://source.unsplash.com/random/900×700/?brownies' />
          </div>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", marginTop: "30px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-roumded'>
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-rounded'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div class="card" style={{ width: "18rem", height: "16rem", margin: "10px", boxShadow: "6px 7px 4px 2px lightblue" }}>
        <div style={{ border: "none" }} class="card-body">
          <div style={{ width: "18rem", height: "10rem" }}>
            <img style={{ width: "16rem", height: "10rem", border: "none", borderRadius: "2px" }} src='https://source.unsplash.com/random/900×700/?curry' />
          </div>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", marginTop: "30px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-roumded'>
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-rounded'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Home
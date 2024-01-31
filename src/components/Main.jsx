import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import NavLogin from './NavLogin';
import Carasoul from './Carasoul';
import Home from './Home';
import Footer from './Footer';
import Card from './Card';

function Main() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Assuming response.json() returns a promise
      
      const responseData = await response.json();
      setFoodItem(responseData[0]);  // Assuming foodCat is the first item in the response array
      setFoodCat(responseData[1]); 
      // Assuming foodItem is the second item in the response array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Empty dependency array ensures that this effect runs once on mount
// ...

return (
  <div>
    <NavLogin />
    <Carasoul />
    <div className='con'>
      {foodCat && foodCat.length > 0 ? (
        foodCat.map((data) => (
          <div key={data.id}>
            <div style={{ color: "#EC8F5E", marginLeft: "20px", fontSize: "30px" }} className='catogory'>
              {data.CategoryName}
            </div>
            <hr />
            <div style={{ display: "flex", width: "100%" }}>
              {foodItem && foodItem.length > 0 ? (
                foodItem
                  .filter((item) => item.CategoryName === data.CategoryName)
                  .map((filterItems) => (
                    <div style={{ display: "flex" }} className='col-12 col-md-6 col-lg-3' key={filterItems._id}>
                      <Card foodItem={filterItems} options={filterItems.options[0]} />
                    </div>
                  ))
              ) : (
                ""
              )}
            </div>
          </div>
        ))
      ) : (
        <div>""""""""""""</div>
      )}
    </div>

    <Footer />
  </div>
);
}

export default Main;

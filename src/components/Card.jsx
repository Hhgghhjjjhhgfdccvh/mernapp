import React, { useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import swal from 'sweetalert'

function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  let dispatch = useDispatchCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("half");
  const [price, setPrice]=useState(options[size])


  let daa = useCart();
 

  const handleAddToCart = async () => {
    
    swal({
      title: "ADDED!!",
      text: "Your, item Added to Cart",
      icon: "success",
      confirmButtonText: "OK",
    });
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size
    });
  }
  let finalPrice=qty*parseInt(options[size]);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="card" style={{ width: "18rem", height: "20rem", margin: "10px", boxShadow: "6px 7px 4px 2px lightblue" }}>
          <div style={{ border: "none" }} className="card-body">
            <div style={{ width: "18rem", height: "10rem" }}>
              <img style={{ width: "16rem", height: "10rem", border: "none", borderRadius: "5px" }} src={props.foodItem.img} alt={props.foodItem.name} />
            </div>
            <div className='' style={{display:"flex"}}>
              <div style={{display:"flex",alignContent:"center",marginTop:"5px"}}>{props.foodItem.name}</div>
            
            <div> <select style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", border: "none", borderRadius: "2px" }} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
            </select></div>
            <div>
            <select id="selectelement" style={{ backgroundColor: "rgb(64, 150, 133)", color: "white", margin: "10px", border: "none", borderRadius: "2px" }} className='m-2-h-100-bg-successs-rounded' onChange={(e) => setQty(e.target.value)}>
              {
                Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })
              }
            </select>
            </div>
           
            </div>

            <hr />
            <div style={{ display: "flex" }}>
              <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                <button onClick={handleAddToCart} style={{ backgroundColor: "rgb(64, 150, 133)", color: "black", margin: "10px", border: "none", borderRadius: "5px", width: "120px", height: "30px", alignItems: "center", justifyContent: "center" }} type='button'>
                  Add To Cart
                </button>
              </div>
              <div style={{color:"#EC8F5E",marginTop:"15px",marginLeft:"10px", fontSize:"16px"}}>
              ₹{finalPrice}/-
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

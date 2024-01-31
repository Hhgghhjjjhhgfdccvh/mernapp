import React ,{useEffect} from 'react';
import { useCart, useDispatchCart } from './ContextReducer';
import { BsTrash } from 'react-icons/bs';
import swal from 'sweetalert';
import Swa from './Swa';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  useEffect(() => {
    const showAlert = async () => {
      if (data.length === 0) {  try {
        await swal({
          title: "OOPS!!",
          text: "Your Cart seems to be empty",
          icon: "warning",
          confirmButtonText: "OK",
        });

        // Additional code to run after the user clicks "OK"
      } catch (error) {
        // Handle any potential errors
        console.error("Error displaying SweetAlert:", error);
      }}
    };

    showAlert();
  }, []);

  

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div style={{ color: "whitesmoke", marginLeft: "100px", marginTop: "20px", fontSize: "15px", display: "flex", justifyContent: "center" }}>
        <table style={{ width: "80%", borderCollapse: "collapse", margin: "20px" }}>
          <thead>
            <tr>
              <th className="cmn" style={tableHeaderStyle}>S.no</th>
              <th className="cmn" style={tableHeaderStyle}>Name</th>
              <th className="cmn" style={tableHeaderStyle}>Quantity</th>
              <th className="cmn"  style={tableHeaderStyle}>Option</th>
              <th className="cmn"  style={tableHeaderStyle}>Amount</th>
              <th className="cmn"  style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index} style={index % 2 === 0 ? tableEvenRowStyle : tableOddRowStyle}>
                <td className="cmn" style={tableCellStyle}>{index + 1}</td>
                <td className="cmn"  style={tableCellStyle}>{food.name}</td>
                <td className="cmn"  style={tableCellStyle}>{food.qty}</td>
                <td className="cmn"   style={tableCellStyle}>{food.size}</td>
                <td className="cmn"  style={tableCellStyle}>{food.price}</td>
                <td className="cmn"  style={tableCellStyle}>
                  <button className="Cartbtn" type='button' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                    <BsTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "20px", marginLeft: "" }} className='ttlprice'>
          <div className='ttl '><h3>Total Price: {totalPrice}/</h3></div>
          <div>
            <button  style={checkoutButtonStyle}>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: "rgb(64, 150, 133)",
  color: "white",
  padding: "10px",
  textAlign: "center",
};

const tableEvenRowStyle = {
  backgroundColor: "lightgray",
};

const tableOddRowStyle = {
  backgroundColor: "whitesmoke",
};

const tableCellStyle = {
  padding: "10px",
  textAlign: "center",
  color:" rgb(64, 150, 133)"
};

const checkoutButtonStyle = {
  backgroundColor: "rgb(64, 150, 133)",
  color: "black",
  border: "none",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
  marginLeft:"40px"
};

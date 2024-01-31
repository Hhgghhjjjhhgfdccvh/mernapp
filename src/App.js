import "./App.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Main from "./components/Main"
import Signup from "./components/Signup";
import Login from "./components/Login";
import { CartProvider } from "./components/ContextReducer";
export default function App() {
return (
  <CartProvider>
    <BrowserRouter>
    <div className="App"> 
        <Routes> 
                <Route exact path='/' element={< Login/>}></Route> 
                <Route exact path='/Signup' element={<Signup/>}></Route> 
                <Route exact path='/Price' element={< Signup />}></Route>
                <Route exact path='/Login' element={< Main/>}></Route> 
                <Route exact path='/Logout' element={< Login/>}></Route> 
               
               
        </Routes> 
        </div> 
  </BrowserRouter>
  </CartProvider>
);
}

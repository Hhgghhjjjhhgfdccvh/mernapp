import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
  const navigate=useNavigate();
  const[credentials,setcredentials]=useState({email:"",password:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:4000/api/loginuser",{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
          },
           body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
       
            const json=await response.json();
            console.log(json);
           

            if(!json.success){
                alert("Enter Valid credentials")
            }
            else{
              alert("Successfull")
              navigate("/Login")
            }
        }
    function handleClick(){
      
    }
    
    const onChange=async(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
    <Navbar/>
    <div className='background' style={{background: {
    backgroundImage: 'url("/images/footemplate.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  },padding:"10px",paddingTop:"15px", height:"50rem",display:"flex",justifyContent:"center"}}>
    
        
         <div style={{backgroundColor:" #bd2130",marginTop:"100px", boxShadow: "6px 7px 4px 2px grey",border:"none", borderRadius:"7px",height:"350px",width:"250px",paddingTop:"30px",display:"flex",justifyContent:"center"}}>
        
        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control"   name='email' value={credentials.email} onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control"  name='password' value={credentials.password}  onChange={onChange}/>
  </div>
  <div class="mb-3 form-check">
  <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    <input type="checkbox" class="form-check-input"/>
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
    </>
  )
}

export default Login
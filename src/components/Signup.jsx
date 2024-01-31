import React, { useState } from 'react'

function Signup() {
    const[credentials,setcredentials]=useState({name:"",email:"",password:"",location:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:4000/api/creatuser",{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
          },
           body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
        });
       
            const json=await response.json();
            console.log(json);

            if(!json.success){
                alert("Enter Valid credentials")
            }
        }

    
    const onChange=async(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
     
  return (
    <div style={{backgroundImage:`url(${"./images/PizzaTemp.jpg"})`, backgroundSize: 'cover', height: '100vh',opacity:"0.9"}}>
     <div style={{ marginLeft: "15px", width: "35vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      
  <div style={{ paddingTop: "80px" }}> 
    <p style={{color: "#e2e2ee", fontSize: "25px", textAlign: "center" }} className='para'>Enjoy the fastest food delivery anytime with our efficient service that brings your favorite meals straight to your doorstep.</p>
    <p style={{color: "#e2e2ee", fontSize: "18px", textAlign: "center" }}  className='para'>  Crave  it day or night, and we'll deliver it promptly!</p>
    <div style={{display:"flex",justifyContent:"center"}} className='btnnn'><button class="button-85" role="button">20% Discount on first order</button></div>
  </div>
</div>

        <div style={{display:"flex",justifyContent:"right", position: 'fixed', top: 0, right: 0,marginRight: "50px", marginTop: "30px",width: '25vw',height:'75vh',backgroundColor: 'rgba(255, 255, 255, 0.5)',border:"none",borderRadius:"20px"}} className="sign">
        <div style={{display:"flex",justifyContent:"center",marginRight:"50px",marginTop:"30px"}}>
        <form onSubmit={handleSubmit}>
          <div style={{display:"flex",alignContent:"center",color:" rgb(13, 96, 78)"}}>
            <h3 >SignUp</h3>
          </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control"   name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" class="form-text" style={{color:" rgb(13, 96, 78)"}}>We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
    <input type="name" class="form-control" name='name' value={credentials.name}  onChange={onChange}/>
    <div id="name" class="form-text"  style={{color:" rgb(13, 96, 78)"}}>We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control"  name='password' value={credentials.password}  onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control"  name='location' value={credentials.location} onChange={onChange}/>
  </div>
  <div style={{display:"flex",justifyContent:"center"}}><button style={{backgroundColor:" rgb(13, 96, 78)", border:"none", borderRadius:"10px",width:"10vw",color:"rgba(255, 255, 255, 0.5)",height:"5vh"}} type="submit">SignUp</button></div>
</form>
        </div>
        </div>
    </div>
  )
}

export default Signup
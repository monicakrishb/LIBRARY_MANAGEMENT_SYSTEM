import React,{ useState } from 'react'

import { Link } from 'react-router-dom'
 const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[allEntry,setAllEntry]=useState([]);
  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={email,password:password};
    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry);
  }
  return (
    <>
  <form action=""onSubmit={submitForm}>
  <div class="mb-3">
      <label htmlFor='email'>Email</label>
      <input type="text" name="email"id="email" autoComplete='off'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
    </div>
  
    
    
    <div>
      <label htmlFor='password'>password</label>
      <input type="password"name="password" id="password" autoComplete='off'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      
    </div>
    <button type="submit">Login</button>
    
  </form>
  <div>
    {
      allEntry.map((curElem)=>{
return(
  <div className="showDataStyles">
    <p>{curElem.email}</p>
    <p>{curElem.password}</p>

    
  </div>
)})
 }

 

        <nav>
        <Link to="/Home">Home</Link>
        </nav>
        </div>
        </>
  )
   }

export default Login

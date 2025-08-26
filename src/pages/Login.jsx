import "../pages/Login.css"
import { useState } from "react";

function Login(){
[email,setEmail]=useState()

    return(
      <div class="container">
  <div class="heading">Sign In to your account</div>
  <form class="form" action="">
    <div class="input-field">
      <input
        required=""
        autocomplete="off"
        type="text"
        name="text"
        id="username"
      />

      <label for="email">Email</label>
    </div>
    <div class="input-field">
      <input
        required=""
        autocomplete="off"
        type="password"
        name="text"
        id="password"
      />
      <label for="username">Password</label>
    </div>

    <div class="btn-container">
      <button class="btn">Submit</button>
      <div class="acc-text">
   
       </div>
    </div>
  </form>
</div>
)
    
}
export default Login;
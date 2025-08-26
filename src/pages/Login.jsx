import "../pages/Login.css"
import { useState } from "react";

function Login(){
let [getEmail,setEmail]=useState("");
let [getPassword,setPassword]=useState("");

function iniciarSecion(){
    if (  getEmail=="correo@coreo.com" && getPassword=="12345"){
        alert("BIENVENIDO AL SISTEMA"+getEmail);
    }else{
        alert("CORREO O CONTRASEÑA INCORRECTA");

}
}
 return(
      <div class="container">
  <div class="heading">Sign In to your account</div>
  <form class="form" action="">
    <div class="input-field">

      <input
        required=""
        autocomplete="off"
        type="email"
        name="email"
        id="email"
        onChange={(e)=>console.log(e.target.value)}

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
        onChange={(e)=>SetPasswor(e.target.value)}
      />
      <label for="username">Password</label>
    </div>

    <div class="btn-container">
      <button onClick={iniciarSecion} class="btn">Submit</button>
      <div class="acc-text">
   
       </div>
    </div>
  </form>
</div>
)
    
}
export default Login;
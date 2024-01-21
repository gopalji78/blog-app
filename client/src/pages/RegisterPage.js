import { useState } from 'react';
import '../Register.css'
import { FaUser, FaLock } from "react-icons/fa";


const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
      
  const API_URL = 'http://localhost:4000';
  // prevent default refresh on submit 
  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({userName, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status==200) {
      alert("Registration Success")
    } else {
      alert("Registration Failed");
    }
  }
  return (
    <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form className="login" onSubmit={registerUser}>
				<div class="login__field">
          <FaUser className="login__icon fas fa-user"/>
					<input 
            className="login__input"
            type="text" 
            placeholder="User Handle Eg: bleedin_maroon" 
            value = {userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
				</div>
				<div class="login__field">
          <FaLock className="login__icon fas fa-lock" />
          <input 
            className="login__input"
            type="text" 
            placeholder="Password Eg.$@$@#@4324DlknldfsSAF"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
				</div>
				<button class="button login__submit">
					<span class="button__text">Register</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default RegisterPage;

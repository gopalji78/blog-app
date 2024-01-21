import { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import { UserContext } from "../User-context";
import '../Login.css'
import { FaUser, FaLock } from "react-icons/fa";

const API_URL = 'http://localhost:4000'

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
    
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({userName, password}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    
    try {
      if (response.ok) {
          response.json().then(userInfo => {
            setUserInfo(userInfo);
            setRedirect(true);
          })
      } else {
        alert("Wrong Credentials");
      }
    } catch (error) {
      alert("wrong Credentials")
    }
    }


  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form className="login" onSubmit={login}>
				<div class="login__field">
        <FaUser className="login__icon fas fa-user"/>
					<input type="text" 
          className="login__input"
          value = {userName}
          onChange={(e)=>setUserName(e.target.value)}
          placeholder="User Handle Eg: bleedin_maroon" />
				</div>
				<div class="login__field">
        <FaLock className="login__icon fas fa-lock" />
          <input 
          className="login__input"
          type="password" 
          placeholder="Password Eg: $123$knkdAFDS"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
				</div>
				<button class="button login__submit">
					<span class="button__text">Login</span>
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

export default LoginPage

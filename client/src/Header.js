import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./User-context";

const API_URL = 'http://localhost:4000/'
const Header = () => {
  
  const { setUserInfo, userInfo } = useContext(UserContext);
 
  useEffect(()=> {
    fetch(`${API_URL}profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, []);

  const logOut = () => {
    fetch(`${API_URL}logout`, {
      credentials: 'include', 
      method: 'POST'
    })
    setUserInfo(null);
  }

  const userName = userInfo?.userName; 

  return (
    <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {userName && (
            <>
              <Link to='/create'>Create new Post</Link>
              <Link>
              <a onClick={logOut} style={{pointer: "cursor"}}>Logout</a>
              </Link>
            </>
          )},
          
          {!userName && (
            <>
              <Link to='/login'> Login</Link>
              <Link to='/register'> Register</Link>
            </>
          )}
        </nav>
    </header> 
  )
}

export default Header

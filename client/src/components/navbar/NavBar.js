//import  './navbar.css'
import React from 'react'
import './navbar.css';


const NavBar = ({disabledButtons, handleClick}) => {
  return (
    <nav>
      <button onClick={()=> handleClick("display")} disabled={disabledButtons.display}>Display Movies</button>
      <button onClick={()=> handleClick("create")} disabled={disabledButtons.create} >Create New</button>
      <button onClick={()=> handleClick("edit")} disabled={disabledButtons.edit}>Edit</button>
      <button disabled>DarkTheme</button>
      <button onClick={()=> handleClick("login")} disabled={disabledButtons.login}>Login/Sign-in</button>
      
    </nav>
  )
}


export default NavBar;
import React from 'react'
import logo from '../images/sitelogo.png'
import {
    Card,
     } from "react-bootstrap" 


function Logo (){
return(

          <Card.Img src={logo} className="logo"/>

)
}

export default Logo;
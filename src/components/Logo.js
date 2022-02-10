import React from 'react'
import logo from '../images/sitelogo.png'
import {
    Card,
     } from "react-bootstrap" 


function Logo (){
return(
    <Card className="logo">
          <Card.Img src={logo} className="logo"/>
</Card>
)
}

export default Logo;
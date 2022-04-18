import React from 'react'
import logo from '../Images/sitelogo.png'
import {
    Card,
     } from "react-bootstrap" 

     import "./Warzone.css"

function Logo (){
return(
        <Card className="logocard">
          <Card.Img src={logo} className="logo"/>
          </Card>
)
}

export default Logo;
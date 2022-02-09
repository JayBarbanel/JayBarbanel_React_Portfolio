import React from 'react'
import logo from '../images/logo.png'


import {
  Card,
  Button,
   } from "react-bootstrap" 

function Logo(){
    return (
        <Card className="project" style={{ width: '150rem'}}>
  <Card.Body>
    <Card.Img src={logo} className="logo"/>
  </Card.Body>
</Card>
    )
}

export default Logo;
import React from 'react'
import logo from '../images/sitelogo.png'


function Logo (){
return(
    <Card className="logo" style={{ width: '150rem'}}>
         <Card.Body>
          <Card.Img src={logo} className="logo"/>
  </Card.Body>
</Card>
)
}

export default Logo;
import React from 'react'
import icon from '../Images/icon.jpg'
import {
    Button,
}from 'react-bootstrap'

import "./Warzone.css"


function Touch () {
    return (
<div>
<p>Please feel free to reach out to me via email below for any <br/> job oppertunities. </p>
 <Button className="button" href="mailto:jbarbanel531@gmail.com">
 <img src={icon} class="w-10" />
 </Button>
 </div>
    )
}



export default Touch;
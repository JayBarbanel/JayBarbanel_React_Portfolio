import React from 'react'

function Touch () {
    return (


        <div class ="Touch w-100">
            <element id="contact"/>
            <div class="card-body">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3">
                     <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                     <button id="sub-btn"type="button" class="btn btn-dark">Submit</button>
                </div>

            </div>
        </div>

   



    )
}



export default Touch;
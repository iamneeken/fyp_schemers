import React from 'react'
import './contactUs.css'
import firstSlide from '../../logo1.png'

function ContactUs() {
    return (
        <div>
            <div class="row">
            <div class="containers col-lg-6 col-md-6">
            
            <div class="pic">
                <img src={firstSlide} alt="" />
            </div>
            
            </div>

            <div class="content col-md-offset-6 col-lg-offset-6">
            <center><h1 class="contentHead">CONTACT US</h1></center>
            
            <h3>Hi Folks, <br/><br/>
                This is Schemers family welcoming you to shop on our website.
                Show your L<span>&hearts;</span>VE if you love our services by shopping on our website.
            </h3>
            <br />
            <h3>Do give us a call: +977 9876543210/ 9803216544 </h3>
            <br />

            </div>
        </div>   

        </div>
    )
}

export default ContactUs

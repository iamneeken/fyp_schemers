import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    return (
        <div>
           <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                            <Link to ='/products'> <li>Products</li></Link>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                            <Link to ='/contactus'> <li>Contact Us</li></Link>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>SCHEMERS</h3>
                            
                        </div>
                    </div>
                    <p class="copyright">SCHEMERS © 2021</p>
                </div>
            </footer>
    </div>
        </div>
    )
}

export default Footer

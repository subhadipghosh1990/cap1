import React from "react";

const Footer = () => {
    return(
        <>
        <footer className="text-center text-md-left">
            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="pl-0 mb-0">
                            <li><a href="#" className="d-block px-md-2 py-1">Company</a> </li>
                            <li><a href="#" className="d-block px-md-2 py-1">Career</a> </li>
                            <li><a href="#" className="d-block px-md-2 py-1">News</a> </li>
                            <li><a href="#" className="d-block px-md-2 py-1">Contact</a> </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="pl-0 mb-0">
                            <li><a href="#" className="d-block px-md-2 py-1">Discalimer</a> </li>
                            <li><a href="#" className="d-block px-md-2 py-1">Privacy Policy </a> </li>
                            <li><a href="#" className="d-block px-md-2 py-1">Terms of Service</a> </li>
                            <li><a href="#" className="d-block px-md-2 py-1">Support</a> </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="pl-0 mb-0 d-flex flex-wrap align-items-center social justify-content-center justify-content-md-start">
                            <li><a href="#" className="d-block p-2 pl-md-0"><i className="fa fa-facebook-square" aria-hidden="true" /></a> </li>
                            <li><a href="#" className="d-block p-2"><i className="fa fa-twitter-square" aria-hidden="true" /></a> </li>
                            <li><a href="#" className="d-block p-2"><i className="fa fa-linkedin-square" aria-hidden="true" /></a> </li>
                            <li><a href="#" className="d-block p-2"><i className="fa fa-youtube-play" aria-hidden="true" /></a> </li>
                            <li><a href="#" className="d-block p-2"><i className="fa fa-instagram" aria-hidden="true" /></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid border-top">
                <div className="row">
                    <div className="col-12 text-center pt-3">
                        <p className="small">(c) 2021, Capsule Labs Pvt. Ltd., All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;
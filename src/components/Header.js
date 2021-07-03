import React, {useState} from "react";
import {Link} from "react-scroll";

const Header = (props) => {

    

     return(
         <>

            <header className="sticky-top">
            <div className="container">

                <div className="row align-items-center">

                    <div className="col-md-3 d-flex flex-wrap justify-content-between d-md-block align-items-center">
                        <a href="/"><img src={require('../assets/images/logo.png').default} alt="#" className="img-fluid headerLogo" /></a>                        
                        <a href="#" onClick={(event) => props.toggleName(event)} className="toggleMenu blueTxt d-inline-block d-md-none"><i className={props.showNav ? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i></a>
                        
                    </div>

                    <div className="col-md-9">
                        {/* fullHt */}
                        <nav className={props.showNav ? "fullHt" : ""}>
                            <ul className="p-0 m-0 d-md-flex flex-wrap justify-content-md-end">

                                <li>
                                    <a href="#" onClick={props.closeNav} className="text-uppercase d-block" onClick={(event) => props.toggleNavDownModal(event)}>vision</a>
                                </li>

                                <li>
                                    {/* <a href="#" className="text-uppercase d-block">iot careers</a> */}
                                    <Link to="what" onClick={props.closeNav} className="text-uppercase d-block" smooth={true} offset={-70}>iot careers</Link>
                                </li>

                                <li>
                                    {/* <a href="#" className="text-uppercase d-block">certification</a> */}
                                    <Link to="kick" onClick={props.closeNav} className="text-uppercase d-block" smooth={true} offset={-70}>certification</Link>
                                </li>

                                <li>
                                    {/* <a href="#" className="text-uppercase d-block">services</a> */}
                                    <Link to="services" onClick={props.closeNav} className="text-uppercase d-block" smooth={true} offset={-70}>services</Link>
                                </li>
{/* 
                                <li>
                                    <a href="admin" className="text-uppercase d-block">Admin</a>                             
                                </li> */}

                                <li>
                                    <a href="/scedule" className="text-uppercase d-block">Scedule</a>                             
                                </li>

                                <li>
                                    <a href="/register" className="text-uppercase d-block">Register</a>                             
                                </li>

                            </ul>
                        </nav>

                    </div>

                </div>

            </div>
        </header>

            
        <div className={props.downModal ? "downModal modals position-fixed showModal" : "downModal modals position-fixed"}>
            <a href="#" className="closeModal position-absolute" onClick={(event) => props.toggleNavDownModal(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 p-3">

                        <h4 className="brownTxt font-weight-bold h5 mb-3">CapsuleLabs Philosophy</h4>

                        <p>Capsule Labs learning platform offers an alternative to institutional curriculum centric approaches. At Capsule Labs, we believe in experiential learning through the execution of projects with well-defined scope and timelines. We are just facilitators in the learning process, while the true teacher is the learners free will and natural curiosity. Our role is to guide latent personal insights into demonstratable projects, developed using employable skills.</p>
                        <p>Similarly, the three objectives of our certification process are also unique and it is realized through our GAPCRUD methodology. Firstly, we encourage learners to reflect upon their current constraints and identify tangible goals around their insights. The certification process lays out a path to those goals, working within the learner’s skill and time constraints. Secondly, the certification builds provenance by documenting the state of intermediate milestones and deliverables. Thirdly, the provenance information enables early-stage employers to align a candidate’s innate capabilities and aspirations with organizational needs, leading to better productivity and higher retention.  </p>
                        <p>Our project centric approach places greater emphasis on critical thinking around project goals and deliverables. At Capsule Labs the identification of project relevant knowledge bases and reusable components are baked into our processes and weighs in towards meeting project quality and timelines.  </p>
                        <p>We encourage our learners to learn from the community and give back to the community for others to build upon. This process accelerates technology development, propagation and adoption within the community, with appropriate attributions ensuring respect for intellectual property.  </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">CapsuleLabs Mission/Vision</h4>
                        <p>In keeping with our alignment with Atmanirbhar Bharat we strive to create technology leaders capable of taking ownership of complex undertakings and delivering on them. Through this process new social enterprises will get created to address hyperlocal challenges. The next generation of organization will create new employment opportunities and will set forth the cycle of spirited innovation. This is our vision of social progress through technology leaders. </p>
                        <p>To realize our vision at Capsule Labs, we strive to put together the necessary facilitating infrastructure to graduate one crore technology leaders in the next decade.  </p>

                    </div>

                </div>

            </div>
        </div>

         </>
     )
 }


 export default Header;
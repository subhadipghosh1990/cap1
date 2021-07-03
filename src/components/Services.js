import React from "react";

const Services = (props) => {
    return(
        <>

        <section className="services py-5 position-relative" id="services">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center pb-5 mb-3 order-1 order-md-1">
                        <h4 className="h3 blueTxt">Capsule Labs Services</h4>
                    </div>
                    <div className="col-md-6 text-center text-md-left order-3 order-md-2">
                        <h4 className="brownTxt font-weight-bold pb-3">Foundational Certifications</h4>
                        <ul className="pl-0 mb-0" onClick={props.togglepathRightModal1}>
                            <li>IoT Full Stack Developer Certificate</li>
                            <li>IoT Android Developer Certificate</li>
                            <li> IoT Cloud Developer Certificate </li>
                            <li>IoT Embedded Developer Certificate </li>
                            <li>IoT Blockchain Developer Certificate </li>
                            <li>IoT AI/ML Developer Certificate </li>
                        </ul>
                        <h4 className="brownTxt font-weight-bold py-3">Advanced Certifications</h4>
                        <ul className="pl-0 mb-0" onClick={props.togglepathRightModal2}>
                            <li>IoT DEVELOPER CERIFICATE</li>
                            <li>AIOT DEVELOPER CERTIFICATE</li>
                        </ul>
                        <h4 className="brownTxt font-weight-bold py-3">Advisory Services</h4>
                        <ul className="pl-0 mb-0" onClick={props.togglepathRightModal3}>
                            <li>Extended webinars and workshops </li>
                            <li>Webinars and motivational speaking services</li>
                            <li>Curriculum building services</li>
                        </ul>
                    </div>
                    <div className="col-md-6 serviceBack positon-relative order-1 order-md-3"></div>
                </div>
            </div>
        </section>



        <div className={props.pathRightModal1 ? "rightModal modals position-fixed showModal" : "rightModal modals position-fixed"}>
            <a href="#" className="closeModal position-absolute" onClick={(event) => props.togglepathRightModal1(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 p-3">

                        <h4 className="brownTxt font-weight-bold h5 mb-3">Foundational  Certifictions</h4>

                        <p>Capsule Labs’ innovative provenance aware certification services are geared towards advanced engineering students, engineering graduates in their gap year 
                            and early career professionals seeking rewarding careers in the development and deployment of IoT enabled solutions for their specialized industry verticals. 
                            The certifications are also suitable for developing niche skillsets used in the IT/electronics industries. Engineering students can also take up certifications 
                            to fulfil their academic requirements or for researching advanced topics.     
                        </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Full Stack Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a web application for managing IoT devices.</p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Android Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development or testing of a mobile application or a human machine interface on an Android device. The HMI should be used for managing an IoT device, while the mobile app may use inbuild sensors in the Android device. </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Cloud Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 100 hours has been spent towards the design, development, testing and deployment of a UI application for managing IoT devices and at least 150 hours has been spent towards SAAS integrations with third party platforms or cloud native services. </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Embedded Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of an embedded application on an IoT device.</p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Blockchain Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a blockchain as a backend system to manage data from IoT devices.</p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT AI/ML Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a computational model, working with data from an IoT device.</p>
                        <p>Foundational certifications typically place a workload of 25-30 hr/ week and can take 12-16 weeks to execute. Each certification may require 7-10 project consultations. The cost of capsules can range between INR 2000 to INR 10000 for generic hardware.    For additional information and registrations email atanurc@capsulelabs.in </p>


                    </div>

                </div>

            </div>
        </div>

        <div className={props.pathRightModal2 ? "rightModal modals position-fixed showModal" : "rightModal modals position-fixed"}>
            <a href="#" className="closeModal position-absolute" onClick={(event) => props.togglepathRightModal2(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 p-3">

                        <h4 className="brownTxt font-weight-bold h5 mb-3">Advanced  Certifictions</h4>
                        <p>Advanced certifications can take 24-32 weeks to complete and specialized imported hardware can cost INR 10k-100k.  For additional information and registrations email atanurc@capsulelabs.in </p>
                       
                        <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 500 hours has been spent towards the design, development, testing and deployment of 
                            an IoT system, comprising of IoT end devices and an IoT data and device management application. Following certifications can be upgraded to an IoT Developer 
                            certificate by fulfilling the additional scope/effort requirements. </p>
                        

                        <div className="row modalList">
                            <div className="col-sm-6">
                                <ul>
                                    <li>IoT Full Stack certificate</li>
                                    <li>IoT Cloud Developer Certificate</li>
                                    <li>IoT Embedded Developer Certificate</li>                                   
                                </ul>
                            </div>

                            <div className="col-sm-6">
                                <ul>
                                    <li>IoT Android Developer Certificate</li>   
                                    <li>IoT Blockchain Developer Certificate</li>   
                                    <li>IoT AI/ML Developer Certificate</li>                                  
                                </ul>
                            </div>
                        </div>


                        <h4 className="brownTxt font-weight-bold h5 mb-3">AIoT Developer Certificate </h4>
                        <p>This certification is based on successfully executing a project where at least 750 hours has been spent towards the design, development, testing and deployment 
                            of an AI enabled IoT system, comprising of self-learning IoT devices and an IoT data and device management application. Following certifications can be upgraded 
                            to an IoT Developer certificate by fulfilling the additional scope/effort requirements. </p>
                        

                        <div className="row modalList">
                            <div className="col-sm-6">
                                <ul>
                                    <li>IoT Full Stack certificate</li>
                                    <li>IoT Cloud Developer Certificate</li>
                                    <li>IoT Embedded Developer Certificate</li>     
                                    <li> IoT Developer Certificate</li>                              
                                </ul>
                            </div>

                            <div className="col-sm-6">
                                <ul>
                                    <li>IoT Android Developer Certificate</li>   
                                    <li>IoT Blockchain Developer Certificate</li>   
                                    <li>IoT AI/ML Developer Certificate</li>                                  
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <div className={props.pathRightModal3 ? "rightModal modals position-fixed showModal" : "rightModal modals position-fixed"}>
            <a href="#" className="closeModal position-absolute" onClick={(event) => props.togglepathRightModal3(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 p-3">

                        <h4 className="brownTxt font-weight-bold h5 mb-3">Advisory Services</h4>

                        <p>Capsule Labs advisory services are available towards institutional improvements and IoT evangelization. For appointments email atanurc@capsulelabs.in  
                        </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">Webinars and motivational speaking services </h4>
                        <p>This service is available to institutions to create awareness around emerging area among their learners. Sessions are typically 1- 2 hours in duration. 
                            Our speaking topics include, but not limited to the following area:</p>

                        <ul className="pl-0">
                            <li>a)	Intelligence in IoT </li>
                            <li>b)	IoT applications and career opportunities</li>
                            <li>c)	Blockchain and its role in IoT</li>
                            <li>d)	Managing IoT systems – a device management perspective </li>
                            <li>e)	Managing IoT systems – a data management perspective </li>
                            <li>f)	Smart Cities around the world</li>
                            <li>g)	Solving the employer’s dilemma – beyond campus placements </li>
                        </ul>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">Extended webinars and workshops </h4>
                        <p>This service is available to institutions for engaging their faculty members or onboarding new teams. The sessions are spread out over multiple days and can be delivered online, on campus 
                            or at getaway locations. The session content and duration are customized for the audience. </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">Curriculum building services </h4>
                        <p>This service is available to institutions planning to start offering courses in IoT and require advisory services for curriculum building, content creation or lab development services. This service is available on a retainership model. </p>

                    </div>

                </div>

            </div>
        </div>


        </>
    )
}

export default Services;
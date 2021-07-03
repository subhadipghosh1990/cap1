import React from "react";

const KickStart = () => {
    return(
        <>
        





        <section className="kickstart position-relative" id="kick">

        <div className="container position-relative">

            <div className="row">

                <div className="col-md-6 py-5">

                    <div className="text-center pt-5">

                        <h4 className="h3 blueTxt">Kickstart your WorkEx </h4>

                        <p className="small">Let your hiring manger know about your technology and role fitments</p>

                    </div>



                    <ul className="m-0 pl-0 py-5 d-flex flex-wrap blockList">

                        <li className="w-50">

                            <img src={require('../assets/images/lt.png').default} alt="#" className="img-fluid"/>

                        </li>

                        <li className="w-50 p-4">
                            <p className="d-flex justify-content-center align-items-center brownTxt font-weight-bold px-md-5">Role Fitment</p>
                        </li>


                        <li className="w-50 p-4">
                            <p className="d-flex justify-content-center align-items-center brownTxt font-weight-bold">Technology Fitment</p>
                        </li>

                        <li className="w-50">

                            <img src={require('../assets/images/lb.png').default} alt="#" className="img-fluid"/>

                        </li>



                    </ul>

                </div>

                <div className="col-md-6 position-relative py-5 rightOverFlow">

                    <div className="text-center pt-5 position-relative">

                        <h4 className="h3 blueTxt">Benefits of CapsuleLabs Certification</h4>

                    </div>


                    <ul className="position-relative pl-0 mb-0">

                        <li className="d-flex flex-wrap align-items-start align-items-md-center">

                            <div className="counter">
                                <p>01</p>
                            </div>

                            <div className="content">
                                <h5 className="brownTxt font-weight-bold h3 mb-1">Flexibility</h5>
                                <p>Develop personal insights into projects or align project with identified skill gap. </p>
                            </div>

                        </li>

                        <li className="d-flex flex-wrap align-items-start align-items-md-center">

                            <div className="counter">
                                <p>02</p>
                            </div>

                            <div className="content">
                                <h5 className="brownTxt font-weight-bold h3 mb-1">Scoping</h5>
                                <p>Identify knowledge bases and reusable components for achieving project goals.</p>
                            </div>

                        </li>

                        <li className="d-flex flex-wrap align-items-start align-items-md-center">

                            <div className="counter">
                                <p>03</p>
                            </div>

                            <div className="content">
                                <h5 className="brownTxt font-weight-bold h3 mb-1">Project-centric</h5>
                                <p>Develop personal insights into projects or align project with identified skill gap. </p>
                            </div>

                        </li>

                        <li className="d-flex flex-wrap align-items-start align-items-md-center">

                            <div className="counter">
                                <p>04</p>
                            </div>

                            <div className="content">
                                <h5 className="brownTxt font-weight-bold h3 mb-1">Credibility</h5>
                                <p>Through transparent provenance of project processes and outcome. </p>
                            </div>

                        </li>



                    </ul>

                    <div className="pt-3">

                        <a href="/fitment" className="btn position-relative btn-success d-block ml-4">Fitment</a>

                    </div>

                </div>

            </div>

        </div>

        </section>






        








        </>
    )
}


export default KickStart;
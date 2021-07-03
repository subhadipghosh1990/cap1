import React from "react";

const Banner = () => {
    return(
        <>
        <section className="banner">

            <div className="container">

                <div className="row align-items-center">

                    <div className="d-none d-md-block col-md-3 col-6 text-md-right text-center order-2 order-md-1">
                        <img src={require('../assets/images/bannerL.png').default} alt="#" className="img-fluid d-inline-block bannerL" />
                    </div>

                    <div className="col-md-6 text-center order-1 order-md-2">
                        <img src={require('../assets/images/bannercenter.png').default} alt="#" className="img-fluid d-inline-block bannercenter" />
                    </div>

                    <div className="d-none d-md-block col-md-3 col-6 pl-md-3 order-3 order-md-3">
                        <img src={require('../assets/images/bannerR.png').default} alt="#" className="img-fluid d-inline-block bannerR" />
                    </div>

                </div>


                <div className="row">

                    <div className="col-12 text-center">

                        <h2 className="">ioT is here</h2>

                        <a className="btn chckltBg mt-5 mb-0" href={require('../assets/pdf/CapsuleLabs-Prospectus.pdf').default} download>
                            <p className="p-0 m-0">Download Prospectus</p>
                        </a>

                        <img src={require('../assets/images/bannerbottom.png').default} alt="#" className="img-fluid" />

                    </div>

                </div>

            </div>

        </section>
        </>
    )
}


export default Banner;
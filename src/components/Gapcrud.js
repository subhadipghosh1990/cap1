import React from 'react';

const Gapcrud = () => {
    return(
        <>
        <section className="gapcrud py-5">
        <div className="container py-5 position-relative">
          <div className="row">
            <div className="col-md-12 pb-5">
              <h4 className="h3 text-center blueTxt">Capturing project provenence using GAPCRUD methodology</h4>
            </div>
            <div className="col-md-12">
              <div className="text-center pt-3 d-none d-md-block">
                <span className="d-inline-block m-auto"><img src={require('../assets/images/gpcrd.png').default} alt="#" width={100} /> </span>
              </div>
              <ul className="d-md-flex flex-wrap justify-content-between pl-0 mb-0 position-relative">
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25">
                    <img src={require('../assets/images/gc1.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold">
                    Goal Creation
                  </div>
                  <div className="alpha w-25">
                    G
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25 order-md-3 order-1">
                    <img src={require('../assets/images/gc2.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold order-md-2 order-2">
                    Architecture Selection
                  </div>
                  <div className="alpha w-25 order-md-1 order-3">
                    A
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25">
                    <img src={require('../assets/images/gc3.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold">
                    Project Planning
                  </div>
                  <div className="alpha w-25">
                    P
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25 order-md-3 order-1">
                    <img src={require('../assets/images/gc4.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold order-md-2 order-2">
                    Coding Milestones
                  </div>
                  <div className="alpha w-25 order-md-1 order-3">
                    C
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25">
                    <img src={require('../assets/images/gc5.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold">
                    Test Report
                  </div>
                  <div className="alpha w-25">
                    R
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25 order-md-3 order-1">
                    <img src={require('../assets/images/gc6.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold order-md-2 order-2">
                    User Manual
                  </div>
                  <div className="alpha w-25 order-md-1 order-3">
                    U
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25">
                    <img src={require('../assets/images/gc7.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold">
                    Demo Day
                  </div>
                  <div className="alpha w-25">
                    D
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="iconHolder w-25 order-md-3 order-1">
                    <img src={require('../assets/images/gc8.png').default} alt="#" className="img-fluid" />
                  </div>
                  <div className="brownTxt txtHolder w-50 font-weight-bold order-md-2 order-2">
                    Certification
                  </div>
                  <div className="alpha w-25 order-md-1 order-3">
                    -
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Gapcrud;
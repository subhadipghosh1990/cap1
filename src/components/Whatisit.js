import React from "react";
// import Scrollbar from 'smooth-scrollbar';
const Whatisit = (props) => {
    return(
        <>       



        <section className="whatIsIt py-5" id="what">

            <div className="container">

                <div className="row">
                    <div className="col-12 py-3">
                        <h4 className="text-center h3 blueTxt">IoT is a career path.</h4>
                    </div>
                </div>


                <div className="row">

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/c1.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Feild Engineering</p>
                        </div>

                    </div>


                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/c2.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Prototyping</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/c3.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Research</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/c4.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Product Development</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/c5.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Solution Architecting</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/c6.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Product Management</p>
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-12 pt-5 pb-3">
                        <h4 className="text-center h3 blueTxt">IoT is a technology gateway.</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/g1.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Mobile App Development</p>
                        </div>

                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/g2.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Enterprise Web Applications</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/g3.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">AI/ML Development</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/g4.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Cloud Service Integration</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/g5.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Embedded Engineering</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.togglepathDownModal(event)}>
                            <img src={require('../assets/images/g6.png').default} alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Blockchain Development</p>
                        </div>
                    </div>

                </div>


                <div className="row">

                    <div className="col-12 text-center py-5">

                        <h4 className="h3">Capsule Labs IoT certification is for you.</h4>
                        <a href="#" className="btn chckltBg mt-3 px-5" onClick={(event) => props.togglepathDownModal1(event)}>Download</a>

                    </div>

                </div>

            </div>

        </section>

        
        <div className={props.pathDownModal ? "downModal modals position-fixed showModal" : "downModal modals position-fixed"} >
            <a href="#" className="closeModal position-absolute" onClick={(event) => props.togglepathDownModal(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
            
                <div className="container-fluid">

                <div className="row">

                    <div className="col-12 p-3">
                        <h4 className="brownTxt font-weight-bold h5 mb-3">Careers in IoT</h4>

                        <p>The Internet of Things can be expected to produce an impact as diverse as the Internet itself. The impact is across disciplines and is due to (a)	
                            Improving product quality and their operational health (b)	Improving the operational efficiency of brownfield process  (c)	Delivering services based 
                            on new instrumentation and (d)	Creating product based on new operational insights</p>
                        <p>Therefore, it is not surprising that existing organizations are investing in IoT to improve their product lines and efficiencies. Additionally, a 
                            number of younger organizations are creating IoT based solutions for specialized use cases. These two factors combine to create a market for IoT 
                            professionals growing at close to 30% CAGR through 2025. This market requires several specializations as listed below.</p>


                        <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Research</h4>
                        <p>Foundational research in IoT seeks to improve the quality of instrumentation, computation and communication to support new deployment architectures. 
                            Academic institutes tend to take a lead in foundational research and support an ecosystem of graduate students, postdocs and senior faculty members. 
                            Corporate IoT research tend to focus on applied results and implementation architectures and usually involves significant prototyping.  </p>
                        <p>Therefore, demonstratable project results with Capsule Labs allows candidates to make a stronger admission case and pursue an academic or corporate 
                            career in IoT research. </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Field Engineering and Testing</h4>
                        <p>Unlike software only systems, IoT systems require inputs from multiple physical processes, which is difficult to simulate. Therefore, IoT testers are needed 
                            to test these solutions in the field or advanced multi parameter simulation tools need to be created. Moreover, IoT solutions require extensive instrumentation
                             and large workforces of field application engineers are needed during deployments. Capsule Labs projects prepare candidates for both these career paths by providing 
                             them a working understanding of the end-to-end workflow in IoT based solutions.</p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Prototyping</h4>
                        <p>Most IoT solutions undergo a phase of rapid prototyping, using different vendor combinations, before the set of vendors are finalized. Thus, IoT prototypers are 
                            expected to turnaround vendor integrations quickly and provide meaningful vendor evaluation. During project selection at Capsule Labs, candidates have the option 
                            of an ‘Explorer’ project variant which provide additional integration complexity, preparing them for prototyping career paths. </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Product/ Solution Development  </h4>
                        <p>Once the vendor ecosystem is in place, the IoT prototypes are moved to the productization phase, where the focus shift towards building out the complete feature 
                            set and optimizing the hardware and software quality. During project selection at Capsule Labs, candidates have the option of an ‘Innovator’ project variant 
                            which focusses on optimizing a single feature set, preparing them for a career path in IoT product development.   </p>
                        
                        <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Solution Architect </h4>
                        <p>IoT solution architect is a senior role responsible for translating business requirements into multiple implementation architectures. Solution architects 
                            need a strong understanding of emerging technologies and interoperability standards in order to defend their architectural choices and recommend suitable adaptations 
                            to meet new feature requirements. Architect level certifications at Capsule Labs requires implantation of multiple IoT projects, within an industry vertical, so that 
                            the candidate is suitably equipped with a diverse experience to draw from.     </p>

                        <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Product Management and Marketing  </h4>
                        <p>IoT Product managers are showrunners entrusted with the business model. They are responsible for identifying the opportunity in the market and the feature set to 
                            address that opportunity. They work in tandem with the rest of the delivery team to establish a valid business case for the solution, based on input costs and the 
                            market size. Therefore, IoT product managers are typically seasoned solution architects with a deep understanding of market dynamics. Capsule Labs offers certification 
                            programs for business graduates in order to pursue career paths in IoT product management and IoT product marketing. </p>
                    </div>

                </div>

            </div>
            
        </div>




        <div className={props.pathDownModal1 ? "downModal modals position-fixed showModal" : "downModal modals position-fixed"} >
            <a href="#" className="closeModal position-absolute" onClick={(event) => props.togglepathDownModal1(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
            
                <div className="container-fluid">

                <div className="row filesDwnld">

                    <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/3_Mobile App.pdf').default} download>
                            <img src={require('../assets/images/i1.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Mobile Application</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/4_IT & Web Developer.pdf').default} download>
                            <img src={require('../assets/images/i2.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Web Application</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/6_AI developer & Data scientist.pdf').default} download>
                            <img src={require('../assets/images/i3.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">AI and Data Science</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/2_Cloud Developer.pdf').default} download>
                            <img src={require('../assets/images/i4.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Cloud Services</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/5_Security & blockchain.pdf').default} download>
                            <img src={require('../assets/images/i5.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Security and Blockchain</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/1_Computer Scientist.pdf').default} download>
                        <img src={require('../assets/images/i6.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Computer Science</p>
                    </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/9_Robotics & Mechatronics.pdf').default} download>
                            <img src={require('../assets/images/i7.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Robitics and Mechatronics</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/14_MEMS & VLSI.pdf').default} download>
                        <img src={require('../assets/images/i8.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">MEMS and VLSI</p>
                    </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/Instrumentation.pdf').default} download>
                            <img src={require('../assets/images/i9.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Instrumentation</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/7_Electronics.pdf').default} download>
                        <img src={require('../assets/images/i10.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Electronics</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/8_Communication.pdf').default} download>
                        <img src={require('../assets/images/i11.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Communication</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/15_Business graduates.pdf').default} download>
                        <img src={require('../assets/images/i12.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Business</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/Food.pdf').default} download>
                        <img src={require('../assets/images/i13.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Food Technology</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/11_Electrical & Power.pdf').default} download>
                        <img src={require('../assets/images/i14.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Electrical and Power</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/12_Renewable energy.pdf').default} download>
                        <img src={require('../assets/images/i15.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Renewable Energy</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/13_Manufacturing&Production.pdf').default} download>
                        <img src={require('../assets/images/i16.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Production/ Manufacturing</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/22_Chemical&ceramic.pdf').default} download>
                        <img src={require('../assets/images/i17.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Chemical and Ceramic</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/19_Civil&Structural.pdf').default} download>
                        <img src={require('../assets/images/i18.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Civil and Structural</p>
                    </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/21_Architects&Urbanplanners.pdf').default} download>
                        <img src={require('../assets/images/i19.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Architecture & Urban planning</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/24_Foortwear,Textile&Apparal.pdf').default} download>
                        <img src={require('../assets/images/i20.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Footwear and Textile</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/23_Environmental.pdf').default} download>
                        <img src={require('../assets/images/i21.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Environment</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/18_Biomedical.pdf').default} download>
                        <img src={require('../assets/images/i22.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Biomedical</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/10_Automobile.pdf').default} download>
                        <img src={require('../assets/images/i23.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Automobile</p>
                        </a>
                    </div>

                    <div className="col-sm-1 p-3 text-center">
                    <a href={require('../assets/pdf/17_Mechanical.pdf').default} download>
                        <img src={require('../assets/images/i24.png').default} alt="#" className="img-fluid"/>
                        <p className="px-3">Mechanical</p>
                        </a>
                    </div>



                </div>

            </div>
            
        </div>




        </>
    )
}

export default Whatisit;
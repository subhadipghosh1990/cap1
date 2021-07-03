import React from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


class Fitment extends React.Component{

    constructor(){
        super();
        this.state={
            name:"sd",
            cert:{
                "studHash": "XAVJXT",
                "roleScore": [{"P1":1.0},{"P2":1.0},{"P3":1.0},{"P4":1.0},{"P5":1.0},{"P6":1.0}],
                "roleNote": "The candidate has demonstrated ..",
                "techScore": [{"P1":1.0},{"P2":1.0},{"P3":1.0},{"P4":1.0},{"P5":1.0},{"P6":1.0}],
                "techNote": "The candidate has demonstrated ..",
                "certificates":[
                    {	"certid" : "WWSADX", 
                        "certpath": "path",
                        "title" : "title sting",
                        "novelty": "string",
                        "maxstars": 5,
                        "complexity":3, 
                        "manualurl":"path",
                        "acceptance" : [
                            {"criteria": "criteria string",	"status": "Pass","quality": 3 },
                            {"criteria": "criteria string",	"status": "Pass","quality": 5 },
                            {"criteria": "criteria string",	"status": "Fail","quality": 2 },
                            {"criteria": "criteria string",	"status": "Pass","quality": 4 },
                            {"criteria": "criteria string",	"status": "Fail","quality": 1 }
                        ],
                        "metrics": [
                            {"scope": "timeline","units":"weeks", "estimate": 12,  "actual": 15, "rating":2	}, 
                            {"scope": "efforts","units":"manhours", "estimate": 250,  "actual": 275, "rating":3	} 
                        ],
                        "softwares":[
                            {"name": "soft1", "type":"software","competency":3,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"}, 
                            {"name": "soft2", "type":"software","competency":2,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"},
                            {"name": "soft3", "type":"software","competency":4,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"},
                            {"name": "soft4", "type":"software","competency":1,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"} 
                        ],
                        "hardware":[
                            {"name": "tool1", "type":"MCU","competency":3,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"}, 
                            {"name": "tool2", "type":"sensor","competency":2,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"} 
                        ],
                        "interfaces":[
                            {"name": "if1", "url":"link","competency":3}, 
                            {"name": "if2", "url":"link","competency":2} 
                        ],
                        "rfp":[
                            {"name": "245", "url":"link","competency":3}, 
                            {"name": "132", "url":"link","competency":2} 
                        ],
                        "demo":[
                            {"url":"link","comments":"comments" }
                        ],
                        "priorart":[
                            {"url":"link","comments":"comments" },
                            {"url":"link","comments":"comments" }
                        ] 
                    }]
            },
            data:[
                {
                  data: {
                    p1: 0.45,
                    p2: .32,
                    p3: 0.3,
                    p4: 0.1,
                    p5: 0.9,
                    p6: 0.3
                  },
                  meta: { color: 'blue' }
                }
            ],
            data2:[{
                data: {
                    p1: 0.7,
                    p2: .8,
                    p3: 0.9,
                    p4: 0.67,
                    p5: 0.67,
                    p6: 0.8
                  },
                meta: { color: 'red' }
            }],
            captions:{
                p1:"p1",
                p2:"p2",
                p3:"p3",
                p4:"p4",
                p5:"p5",
                p6:"p6"
           },
           complexity:[],
           certs:[{
            "_id": "608d52be2a4cbe7f80ba68a3",
            "roleScore": [{
                "data": {
                    "p1": .3,
                    "p2": .5,
                    "p3": .4,
                    "p4": .6,
                    "p5": .9,
                    "p6": 0
                },
                "meta": {
                    "color": "red"
                }
            }],
            "techScore": [{
                "data": {
                    "p1": .1,
                    "p2": .5,
                    "p3": .8,
                    "p4": 1,
                    "p5": .5,
                    "p6": .4
                },
                "meta": {
                    "color": "blue"
                }
            }],
            "certificates": [{
                "certid": "SatMay012021183804GMT0530aws-overview",
                "certpath": "http://localhost:8000/cert/SatMay012021183804GMT0530aws-overview.pdf",
                "title": "test",
                "novelty": "",
                "complexity": 4,
                "manualurl": "",
               "acceptance": [{
                    "criteria": "a1",
                    "status": "failed",
                    "quality": "1"
                }, {
                    "criteria": "a2",
                    "status": "passed",
                    "quality": "3"
                }, {
                    "criteria": "a3",
                    "status": "passed",
                    "quality": "4"
                }],
                "metrics": [{
                    "scope": "m1",
                    "units": "m1",
                    "estimate": "2",
                    "actual": "6",
                    "rating": "3"
                }, {
                    "scope": "m2",
                    "units": "m2",
                    "estimate": "2",
                    "actual": "8",
                    "rating": "2"
                }],
                "softwares": [{
                    "name": "photoshop",
                    "type": "graphic-design",
                    "competency": "5",
                    "url": "test-link"
                }, {
                    "name": "figma",
                    "type": "graphic-design",
                    "competency": "3",
                    "url": "test-link"
                }],
                "hardwares": [{
                    "name": "pc",
                    "type": "computer",
                    "competency": "5",
                    "url": ""
                }],
                "interfaces": [{
                    "name": "windows",
                    "competency": "5",
                    "url": "test-link"
                }],
                "rfp": [],
                "demo": [{"url":"https://www.youtube.com/embed/mlE03Fj2T9s","comments":"As of 2018 IoMT was not only being applied in the clinical laboratory industry,[38] but also in the healthcare and health insurance industries. IoMT in the healthcare industry is now permitting doctors, patients, and others, such as guardians of patients, nurses, families, and similar, to be part of a system, where patient records are saved in a database, allowing doctors and the rest of the medical staff to have access to patient information.[51] Moreover, IoT-based systems are patient-centered, which involves being flexible to the patient's medical conditions.[citation needed] IoMT in the insurance industry provides access to better and new types of dynamic information. This includes sensor-based solutions such as biosensors, wearables, connected health devices, and mobile apps to track customer behaviour. This can lead to more accurate underwriting and new pricing models.[52]" }],
                "priorart": []
            }],
            "studentName": "Subhadip Ghosh",
            "studentId": "subhadipghosh215@gmail.com",
            "studentEmail": "subhadipghosh215@gmail.com",
            "roleNote": "",
            "techNote": "",
            "__v": 0
        }, {
            "_id": "608d711b4bd1aa67443d8982",
            "roleScore": [{
                "data": {
                    "p1": ".5",
                    "p2": ".6",
                    "p3": ".5",
                    "p4": ".6",
                    "p5": ".5",
                    "p6": ".5"
                },
                "meta": {
                    "color": "red"
                }
            }],
            "techScore": [{
                "data": {
                    "p1": ".4",
                    "p2": ".7",
                    "p3": ".9",
                    "p4": ".7",
                    "p5": ".4",
                    "p6": ".3"
                },
                "meta": {
                    "color": "blue"
                }
            }],
            "certificates": [{
                "certid": "SatMay012021204330GMT0530aws-overview",
                "certpath": "http://localhost:8000/cert/SatMay012021204330GMT0530aws-overview.pdf",
                "title": "test1",
                "novelty": "test1",
                "complexity": "2",
                "manualurl": "none",
                "acceptance": [{
                    "criteria": "a1",
                    "status": "passed",
                    "quality": "3"
                }, {
                    "criteria": "a2",
                    "status": "failed",
                    "quality": "0"
                }, {
                    "criteria": "a1",
                    "status": "passed",
                    "quality": "4"
                }],
                "metrics": [{
                    "scope": "m1",
                    "units": "cm",
                    "estimate": "5",
                    "actual": "6",
                    "rating": "4"
                }, {
                    "scope": "m2",
                    "units": "meter",
                    "estimate": "2",
                    "actual": "4",
                    "rating": "2"
                }],
                "softwares": [{
                    "name": "html",
                    "type": "front-end",
                    "competency": "3",
                    "url": ""
                }, {
                    "name": "mongo",
                    "type": "db",
                    "competency": "3",
                    "url": ""
                }, {
                    "name": "node",
                    "type": "backend",
                    "competency": "5",
                    "url": ""
                }],
                "hardwares": [{
                    "name": "h1",
                    "type": "h1",
                    "competency": "2",
                    "url": ""
                }, {
                    "name": "h2",
                    "type": "h2",
                    "competency": "4",
                    "url": ""
                }],
                "interfaces": [{
                    "name": "i1",
                    "competency": "3",
                    "url": ""
                }, {
                    "name": "i2",
                    "competency": "1",
                    "url": ""
                }, {
                    "name": "i3",
                    "competency": "4",
                    "url": ""
                }, {
                    "name": "i4",
                    "competency": "4",
                    "url": ""
                }, {
                    "name": "i5",
                    "competency": "2",
                    "url": ""
                }],
                "rfp": [{
                    "name": "r1",
                    "url": "",
                    "competency": "2"
                }, {
                    "name": "r2",
                    "url": "",
                    "competency": "4"
                }, {
                    "name": "r3",
                    "url": "",
                    "competency": "4"
                }],
                "demo": [{"url":"https://www.youtube.com/embed/LlhmzVL5bm8","comments":"The universal remote controller can generate an arbitrary command signal to control electronic devices on NEC or RC5 standards. the controller is connected to the cloud over a WiFI based IP interface. The controller can be configured for a specific device using cloud application hosted on GCP and provides a NodeJS/AngularJS based user interfaces. The controller has been tested with 10 devices from various consumer electronic vendors." }],
                "priorart": [{
                    "name": "",
                    "url": ""
                }]
            }],
            "studentName": "Subhadip Ghosh",
            "studentId": "subhadipghosh215@gmail.com",
            "studentEmail": "subhadipghosh215@gmail.com",
            "roleNote": "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
            "techNote": "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
            "__v": 0
        }, {
            "_id": "608d71f14bd1aa67443d8983",
            "roleScore": [{
                "data": {
                    "p1": ".4",
                    "p2": ".6",
                    "p3": ".3",
                    "p4": ".3",
                    "p5": ".3",
                    "p6": ".4"
                },
                "meta": {
                    "color": "red"
                }
            }],
            "techScore": [{
                "data": {
                    "p1": ".2",
                    "p2": ".4",
                    "p3": ".5",
                    "p4": ".4",
                    "p5": ".7",
                    "p6": ".2"
                },
                "meta": {
                    "color": "blue"
                }
            }],
            "certificates": [{
                "certid": "SatMay012021204824GMT0530aws-overview",
                "certpath": "http://localhost:8000/cert/SatMay012021204824GMT0530aws-overview.pdf",
                "title": "test11",
                "novelty": "pure",
                "complexity": "3",
                "manualurl": "",
                "acceptance": [{
                    "criteria": "a1",
                    "status": "failed",
                    "quality": "1"
                }, {
                    "criteria": "a2",
                    "status": "passed",
                    "quality": "3"
                }, {
                    "criteria": "a3",
                    "status": "passed",
                    "quality": "4"
                }],
                "metrics": [{
                    "scope": "m1",
                    "units": "m1",
                    "estimate": "2",
                    "actual": "6",
                    "rating": "3"
                }, {
                    "scope": "m2",
                    "units": "m2",
                    "estimate": "2",
                    "actual": "8",
                    "rating": "2"
                }],
                "softwares": [{
                    "name": "photoshop",
                    "type": "graphic-design",
                    "competency": "5",
                    "url": "test-link"
                }, {
                    "name": "figma",
                    "type": "graphic-design",
                    "competency": "3",
                    "url": "test-link"
                }],
                "hardwares": [{
                    "name": "pc",
                    "type": "computer",
                    "competency": "5",
                    "url": ""
                }],
                "interfaces": [{
                    "name": "windows",
                    "competency": "5",
                    "url": "test-link"
                }],
                "rfp": [],
                "demo": [{"url":"https://www.youtube.com/embed/mBO2vqLv38","comments":"Things have evolved due to the convergence of multiple technologies, real-time analytics, machine learning, commodity sensors, and embedded systems.[1] Traditional fields of embedded systems, wireless sensor networks, control systems, automation (including home and building automation), and others all contribute to enabling the Internet of things. In the consumer market, IoT technology is most synonymous with products pertaining to the concept of the smart home, including devices and appliances (such as lighting fixtures, thermostats, home security systems and cameras, and other home appliances) that support one or more common ecosystems, and can be controlled via devices associated with that ecosystem, such as smartphones and smart speakers. IoT can also be used in healthcare systems.[5]" }],
                "priorart": []
            }],
            "studentName": "Rajib Chauhan",
            "studentId": "rjb@gmail.com",
            "studentEmail": "rjb@gmail.com",
            "roleNote": "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
            "techNote": "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
            "__v": 0
        }, {
            "_id": "608e94ebeec44d7b600a2bf4",
            "roleScore": [{
                "data": {
                    "p1": ".3",
                    "p2": ".6",
                    "p3": ".5",
                    "p4": ".3",
                    "p5": ".5",
                    "p6": ".3"
                },
                "meta": {
                    "color": "red"
                }
            }],
            "techScore": [{
                "data": {
                    "p1": ".4",
                    "p2": ".4",
                    "p3": ".5",
                    "p4": ".6",
                    "p5": ".4",
                    "p6": ".3"
                },
                "meta": {
                    "color": "blue"
                }
            }],
            "certificates": [{
                "certid": "SunMay022021172938GMT0530aws-overview",
                "certpath": "http://localhost:8000/cert/SunMay022021172938GMT0530aws-overview.pdf",
                "title": "Test Title",
                "novelty": "pretty much",
                "complexity": "4",
                "manualurl": "",
                "acceptance": [{
                    "criteria": "a1",
                    "status": "failed",
                    "quality": "0"
                }, {
                    "criteria": "a2",
                    "status": "passed",
                    "quality": "3"
                }, {
                    "criteria": "a3",
                    "status": "passed",
                    "quality": "5"
                }],
                "metrics": [{
                    "scope": "m1",
                    "units": "m1",
                    "estimate": "2",
                    "actual": "5",
                    "rating": "3"
                }, {
                    "scope": "m2",
                    "units": "m2",
                    "estimate": "3",
                    "actual": "6",
                    "rating": "5"
                }],
                "softwares": [{
                    "name": "s1",
                    "type": "design",
                    "competency": "4",
                    "url": ""
                }, {
                    "name": "s2",
                    "type": "print",
                    "competency": "2",
                    "url": ""
                }],
                "hardwares": [{
                    "name": "h1",
                    "type": "h1",
                    "competency": "3",
                    "url": ""
                }, {
                    "name": "h2",
                    "type": "h2",
                    "competency": "4",
                    "url": ""
                }, {
                    "name": "h3",
                    "type": "h3",
                    "competency": "4",
                    "url": ""
                }],
                "interfaces": [{
                    "name": "i1",
                    "competency": "3",
                    "url": ""
                }, {
                    "name": "i2",
                    "competency": "5",
                    "url": ""
                }, {
                    "name": "i3",
                    "competency": "1",
                    "url": ""
                }],
                "rfp": [],
                "demo": [{"url":"https://www.youtube.com/embed/_AlcRoqS65E","comments":"One key application of a smart home is to provide assistance for those with disabilities and elderly individuals. These home systems use assistive technology to accommodate an owner's specific disabilities.[33] Voice control can assist users with sight and mobility limitations while alert systems can be connected directly to cochlear implants worn by hearing-impaired users.[34] They can also be equipped with additional safety features. These features can include sensors that monitor for medical emergencies such as falls or seizures.[35] Smart home technology applied in this way can provide users with more freedom and a higher quality of life.[33]" }],
                "priorart": []
            }],
            "studentName": "Supriti Singh",
            "studentId": "sup95@gmail.com",
            "studentEmail": "sup95@gmail.com",
            "roleNote": "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
            "techNote": "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
            "__v": 0
        }],
           selected:0
        }
    }


   componentDidMount(){
       console.log(this.state.certs);

       var compl = this.state.cert.certificates[0].complexity;
       var finalCom = [];
       for(var i=0; i < compl; i++){
           finalCom.push(i);
       }
       //setComplexity(prev => prev = finalCom);
       this.setState({
        complexity:finalCom
       })

   }

   
   radarChart = (e) => {       
       let newRole = [{}];

       newRole[0].meta = e[0].meta;
       let newObj = {}

       for(let i in e[0].data){
            //console.log(Number(e[0].data[i]));
            newObj[i] = Number(e[0].data[i])
       }

       newRole[0].data = newObj;
       return newRole;
   } 


    acceptanceQuality = (e) => {
        let arr = [];
        for(var i = 0; i < e; i++){
            arr.push(i);
        }

        return arr.length;
    }

    changeCert = (event) => {
        console.log(event.target.value);


        this.setState({
            selected:event.target.value
        })

    }


    render() {
        return (
            <>
             <section className="fitment py-3 py-md-5">

<div className="container">

    <div className="row ">
        
        <div className="col-md-6 text-center">
            
        <h4 className="brownTxt font-weight-bold">{this.state.certs[this.state.selected].studentName}’s Technology Fitment</h4>

            <RadarChart
                captions={this.state.captions}
                data={this.radarChart(this.state.certs[this.state.selected].techScore)}
                size={300}
            />


        </div>

        <div className="col-md-6 text-center">
            
            <h4 className="brownTxt font-weight-bold">{this.state.certs[this.state.selected].studentName}’s Role Fitment</h4>

            <RadarChart
                captions={this.state.captions}
                data={this.radarChart(this.state.certs[this.state.selected].roleScore)}
                size={300}
            />

        </div>

    </div>

</div>

</section>


<section className="studentScore py-3 py-md-5">

<div className="container">

    <div className="row ">

        <div className="col-md-5">

            <div className="form-group d-md-flex justify-content-end">

                {/* {this.state.selected} */}
                <select className="form-control w-75" onChange={(event) => this.changeCert(event)}>
                    {this.state.certs.map((e,i)=>{
                        return(
                            <option key={i} value={i}>{e._id}</option>
                        )
                    })}
                </select>

            </div>

            <div className="projectImg">
                <img src={require('../assets/images/certImage.jpg').default} width="100%" alt="#"/>
            </div>

        </div>

        <div className="col-md-7">

            <p className="small">Certificate ID: <span className="d-inline-block ml-3"><i> {this.state.certs[this.state.selected].certificates[0].certid}</i></span></p>
            <h5 className="font-weight-bold">Title: <span className="d-inline-block ml-3"> {this.state.certs[this.state.selected].certificates[0].title}</span></h5>

            <div className="mt-5 d-md-flex">

                <div className="d-flex flex-wrap align-items-start justify-content-between projectActions">
                    <div className="text-center w-50">
                        <img src={require('../assets/images/p-report.png').default} width="" className="img-fluid" alt="#"/>
                        <a className="d-block" href="#">Download Project Report</a>
                    </div>

                    <div className="text-center w-50">
                        <img src={require('../assets/images/download.png').default} width="" className="img-fluid" alt="#"/>
                        <a className="d-block">Download Certificate</a>
                    </div>
                </div>

                <div className="ratings pl-md-5">
                    <ul className="d-flex flex-wrap pl-0">
                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Novelty</p>
                            <span>{this.state.certs[this.state.selected].certificates[0].novelty}</span>
                        </li>

                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Schedule</p>
                            <ul className="d-flex pl-0">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </ul>
                        </li>

                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Complexity</p>
                            <ul className="d-flex pl-0">

                                {/* {this.state.complexity.map((e,i)=>{
                                    return (
                                        <i className="fa fa-star" aria-hidden="true" key={i}></i>
                                    )
                                })} */}

                                {Array.from(Array(Number(this.state.certs[this.state.selected].certificates[0].complexity)), (e, i) => {
                                    return <i className="fa fa-star" aria-hidden="true" key={i}></i>
                                })}


                            </ul>
                        </li>

                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Efforts</p>
                            <ul className="d-flex pl-0">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </ul>
                        </li>
                    </ul>
                </div>
                                                
            </div>

            <p className="pt-3 small pl-2">{this.state.certs[this.state.selected].certificates[0].demo[0].comments}</p>
            



        </div>

    </div>

    <div className="row">
        
        <div className="col-md-6">

            <h5>Acceptance Criteria</h5>
            
            <ul className="pl-0">

                {this.state.certs[this.state.selected].certificates[0].acceptance.map((e,i)=>{
                    return (
                        <li key={i} className="d-flex justify-content-between">

                            <p className="m-0 small">{e.criteria}</p>

                            <div className="d-flex">
                                <p className="m-0"><i className={e.status === "passed" ? "fa fa-circle text-success" : "fa fa-circle text-danger"} aria-hidden="true"></i></p>
                                <ul className="accListStar pl-0">

                                    {Array.from(Array(Number(e.quality))).map((e,i)=>{
                                        return <i key={i} className="fa fa-star" aria-hidden="true"></i>
                                    })}




                                </ul>
                            </div>
                        </li>

                    )
                })}

            {/* <ul>
                {Array.from(Array(10), (e, i) => {
                    return <li key={i}>{i}</li>
                })}
            </ul> */}

            </ul>
            

            <div className="d-md-flex flex-wrap toolsIconHolder">

                <div>
                    <h5>Softwares Used</h5>

                    <ul className="d-flex pl-0">
                        {this.state.cert.certificates[0].softwares.map((e,i)=>{
                            return(
                                <li className="m-1" key={i}><img src={e.url} alt="#" width="20"/> </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <h5>Hardware Used</h5>

                    <ul className="d-flex pl-0">
                        {this.state.cert.certificates[0].hardware.map((e,i)=>{
                            return(
                                <li className="m-1" key={i}><img src={e.url} alt="#" width="20"/> </li>
                            )
                        })}
                    </ul>
                </div>
                

            </div>
            

        </div>


        <div className="col-md-6 projectDemoVdoHolder">

            <h5>Demo</h5>

            <iframe width="" height="" src={this.state.certs[this.state.selected].certificates[0].demo[0].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

    </div>


    {/* <div className="row">
        <iframe src="https://app.greminders.com/c/capsulelabs/webinar/" allowfullscreen></iframe>
    </div> */}

</div>

</section>
            </>
        );
    }



 }


 export default Fitment;
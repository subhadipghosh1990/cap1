import React from "react";
import axios from "axios";

class Admin extends React.Component{

    constructor(){
        super();

        this.state={
            certificateFIleUpload:true,
            certifile:[],
            formNo:1,
            steps:11,
            studentName:"ss",
            studentId:"",
            studentEmail:"",
            
            roleScore:[{p:0},{p:0},{p:0},{p:0},{p:0},{p:0}],
            roleNote:"",
            techScore:[{p:0},{p:0},{p:0},{p:0},{p:0},{p:0}],
            techNote:"",


            certid : "", 
            certpath: "",
            title : "",
            novelty: "",
            complexity:0, 
            manualurl:"",

            acceptance:[],
            metrics:[],
            softwares:[],
            hardwares:[],
            interfaces:[],
            rfp:[],
            demo:[],
            priorart:[]
        }
    }


    incrSteps = (event) => {
        event.preventDefault();
        var max = this.state.steps;
        var current = this.state.formNo;

        if(current < max || current === max-1){
            current ++;
            this.setState({
                formNo:current
            })
        }              
    }


    decrSteps = (event) => {
        event.preventDefault();
        var min = 1;
        var current = this.state.formNo;

        if(current > min || current === min+1){
            current --;
            this.setState({
                formNo:current
            })
        }              
    }

    //acceptance

    addAccptnce = (event) => {
        event.preventDefault();
        var acceptance = this.state.acceptance;

        var acceptanceObj = {
            criteria: "",
            status: "passed",
            quality: 0
        }

        acceptance.push(acceptanceObj);
        this.setState({
            acceptance:acceptance
        })
    }

    criteriaValue = (event, i) => {
        // console.log(i);
        // console.log(event.target.value);
        var acceptance = this.state.acceptance;

        acceptance[i].criteria = event.target.value;
        this.setState({
            acceptance:acceptance
        })
    }

    statusValue = (event, i) => {
        // console.log(i);
        // console.log(event.target.value);
        var acceptance = this.state.acceptance;

        acceptance[i].status = event.target.value;
        this.setState({
            acceptance:acceptance
        })
    }

    qualityValue = (event, i) => {
        // console.log(i);
        // console.log(event.target.value);
        var acceptance = this.state.acceptance;

        acceptance[i].quality = event.target.value;
        this.setState({
            acceptance:acceptance
        })
    }

    delAcptnc = (i) => {
        var acceptance = this.state.acceptance;
        acceptance[i] = null;
        this.setState({
            acceptance:acceptance
        })
    }

    resetAcceptance = () => {
        var acceptance = [];

        this.setState({
            acceptance:acceptance
        })
    }

    //metrics

    addMetrics = (event) => {
        event.preventDefault();
        var metrics = this.state.metrics;
        var metricseObj = {
            "scope": "",
            "units": "",
            "estimate": 0,
            "actual": 0,
            "rating": 0
        }
        metrics.push(metricseObj);
        this.setState({
            metrics:metrics
        });
    }

    metricScope = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].scope = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricUnits = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].units = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricEstimate = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].estimate = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricActual = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].actual = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricRatings = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].rating = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    delmetrics = (i) => {
        var metrics = this.state.metrics;
        // metrics.splice(i,1);

        metrics[i] = null;

        this.setState({
            metrics:metrics
        })
    }

    resetmetrics = () => {
        var metrics = [];

        this.setState({
            metrics:metrics
        })
    }



    //Softwares

    addSoftwares = (event) => {
        event.preventDefault();
        var softwares = this.state.softwares;
        var softwareseObj = {
            "name": "",
            "type": "",
            "competency": 0,
            "url":""
        }
        softwares.push(softwareseObj);
        this.setState({
            softwares:softwares
        });
    }

    SoftwaresName = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].name = event.target.value;
        this.setState({
            softwares:softwares
        })
    }

    Softwarestype = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].type = event.target.value;
        this.setState({
            softwares:softwares
        })
    }

    Softwarescompetency = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].competency = event.target.value;
        this.setState({
            softwares:softwares
        })
    }

    Softwaresurl = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].url = event.target.value;
        this.setState({
            softwares:softwares
        })
    }

    delSoftwares = (i) => {
        var softwares = this.state.softwares;
        // metrics.splice(i,1);

        softwares[i] = null;

        this.setState({
            softwares:softwares
        })
    }

    resetSoftwares = () => {
        var softwares = [];

        this.setState({
            softwares:softwares
        })
    }


    //hardwares

    addHardwares = (event) => {
        event.preventDefault();
        var hardwares = this.state.hardwares;
        var hardwareseObj = {
            "name": "",
            "type": "",
            "competency": 0,
            "url":""
        }
        hardwares.push(hardwareseObj);
        this.setState({
            hardwares:hardwares
        });
    }

    hardwaresName = (event, i) => {
        var hardwares = this.state.hardwares;

        hardwares[i].name = event.target.value;
        this.setState({
            hardwares:hardwares
        })
    }

    hardwarestype = (event, i) => {
        var hardwares = this.state.hardwares;

        hardwares[i].type = event.target.value;
        this.setState({
            hardwares:hardwares
        })
    }

    hardwarescompetency = (event, i) => {
        var hardwares = this.state.hardwares;

        hardwares[i].competency = event.target.value;
        this.setState({
            hardwares:hardwares
        })
    }

    hardwaresurl = (event, i) => {
        var hardwares = this.state.hardwares;

        hardwares[i].url = event.target.value;
        this.setState({
            hardwares:hardwares
        })
    }

    delhardwares = (i) => {
        var hardwares = this.state.hardwares;
        // metrics.splice(i,1);

        hardwares[i] = null;

        this.setState({
            hardwares:hardwares
        })
    }

    resethardwares = () => {
        var hardwares = [];

        this.setState({
            hardwares:hardwares
        })
    }

    //interfaces

    addinterfaces = (event) => {
        event.preventDefault();
        var interfaces = this.state.interfaces;
        var interfaceseObj = {
            "name": "",
            "competency": 0,
            "url":""
        }
        interfaces.push(interfaceseObj);
        this.setState({
            interfaces:interfaces
        });
    }

    interfacesName = (event, i) => {
        var interfaces = this.state.interfaces;

        interfaces[i].name = event.target.value;
        this.setState({
            interfaces:interfaces
        })
    }

    interfacescompetency = (event, i) => {
        var interfaces = this.state.interfaces;

        interfaces[i].competency = event.target.value;
        this.setState({
            interfaces:interfaces
        })
    }

    interfacesurl = (event, i) => {
        var interfaces = this.state.interfaces;

        interfaces[i].url = event.target.value;
        this.setState({
            interfaces:interfaces
        })
    }

    delinterfaces = (i) => {
        var interfaces = this.state.interfaces;
        // metrics.splice(i,1);

        interfaces[i] = null;

        this.setState({
            interfaces:interfaces
        })
    }

    resetinterfaces = () => {
        var interfaces = [];

        this.setState({
            interfaces:interfaces
        })
    }


    //rfp

    //{"name": "245", "url":"link","competency":3}

    addrfp = (event) => {
        event.preventDefault();
        var rfp = this.state.rfp;
        var rfpObj = {
            "name": "",            
            "url":"",
            "competency": 0
        }
        rfp.push(rfpObj);
        this.setState({
            rfp:rfp
        });
    }

    rfpName = (event, i) => {
        var rfp = this.state.rfp;

        rfp[i].name = event.target.value;
        this.setState({
            rfp:rfp
        })
    }

    rfpcompetency = (event, i) => {
        var rfp = this.state.rfp;

        rfp[i].competency = event.target.value;
        this.setState({
            rfp:rfp
        })
    }

    rfpurl = (event, i) => {
        var rfp = this.state.rfp;

        rfp[i].url = event.target.value;
        this.setState({
            rfp:rfp
        })
    }

    delirfp = (i) => {
        var rfp = this.state.rfp;
        // metrics.splice(i,1);

        rfp[i] = null;

        this.setState({
            rfp:rfp
        })
    }

    resetrfp = () => {
        var rfp = [];

        this.setState({
            rfp:rfp
        })
    }


    // demo:[
    //     {demourl:"demoURL/dfsvdfv", democomments:"this the demo"}
    // ]

    adddemo = (event) => {
        event.preventDefault();
        var demo = this.state.demo;
        var demoObj = {
            "demourl": "",            
            "democomments":""
        }
        demo.push(demoObj);
        this.setState({
            demo:demo
        });
    }

    demourl = (event, i) => {
        var demo = this.state.demo;

        demo[i].demourl = event.target.value;
        this.setState({
            demo:demo
        })
    }

    democomments = (event, i) => {
        var demo = this.state.demo;

        demo[i].democomments = event.target.value;
        this.setState({
            demo:demo
        })
    }

    delidemo= (i) => {
        var demo = this.state.demo;
        // metrics.splice(i,1);

        demo[i] = null;

        this.setState({
            demo:demo
        })
    }

    resetrfp = () => {
        var demo = [];

        this.setState({
            demo:demo
        })
    }

    //priorart

    //{"url":"link","comments":"comments" },


    addpriorart = (event) => {
        event.preventDefault();
        var priorart = this.state.priorart;
        var priorartObj = {
            "name": "",            
            "url":""
        }
        priorart.push(priorartObj);
        this.setState({
            priorart:priorart
        });
    }

    priorarturl = (event, i) => {
        var priorart = this.state.priorart;

        priorart[i].url = event.target.value;
        this.setState({
            priorart:priorart
        })
    }

    priorartcomments = (event, i) => {
        var priorart = this.state.priorart;

        priorart[i].comments = event.target.value;
        this.setState({
            priorart:priorart
        })
    }

    delipriorart = (i) => {
        var priorart = this.state.priorart;
        // metrics.splice(i,1);

        priorart[i] = null;

        this.setState({
            priorart:priorart
        })
    }

    resetpriorart = () => {
        var priorart = [];

        this.setState({
            priorart:priorart
        })
    }

    studentName = (event) => {
        var studentName = this.state.studentName;
        studentName = event.target.value;

        this.setState({
            studentName:studentName
        })
    }

    studentEmail = (event) => {
        var studentEmail = this.state.studentEmail;
        studentEmail = event.target.value;

        this.setState({
            studentEmail:studentEmail,
            studentId:studentEmail
        })
    }

    studentId = (event) => {
        var studentId = this.state.studentId;
        studentId = event.target.value;

        this.setState({
            studentId:studentId
        })
    }

    roleScore = (event, i) => {
        console.log(event.target.value, i);
        var roleScore = this.state.roleScore;
        roleScore[i].p = event.target.value;
        this.setState({
            roleScore:roleScore
        })
    }

    techScore = (event, i) => {
        console.log(event.target.value, i);
        var techScore = this.state.techScore;
        techScore[i].p = event.target.value;
        this.setState({
            techScore:techScore
        })
    }

    roleNote = (event) => {
        var roleNote = this.state.roleNote;
        roleNote = event.target.value;
        this.setState({
            roleNote:roleNote
        })
    }

    techNote = (event) => {
        var techNote = this.state.techNote;
        techNote = event.target.value;
        this.setState({
            techNote:techNote
        })
    }


    CertificatePath = (event) => {
        var certpath = this.state.certpath;
        certpath = event.target.value;

        this.setState({
            certpath:certpath
        })
    }

    CertificateId = (event) => {
        var certid = this.state.certid;
        certid = event.target.value;

        this.setState({
            certid:certid
        })
    }

    CertificateTitle = (event) => {
        var title = this.state.title;
        title = event.target.value;

        this.setState({
            title:title
        })
    }

    CertificateNovelty = (event) => {
        var novelty = this.state.novelty;
        novelty = event.target.value;

        this.setState({
            novelty:novelty
        })
    }

    Certificatecomplexity = (event) => {
        var complexity = this.state.complexity;
        complexity = event.target.value;

        this.setState({
            complexity:complexity
        })
    }

    ManualURL = (event) => {
        var manualurl = this.state.manualurl;
        manualurl = event.target.value;

        this.setState({
            manualurl:manualurl
        })
    }


    submitCertificate = (event) => {
        event.preventDefault();
        console.log(this.state);


        var acceptance = this.state.acceptance;
        acceptance.filter((e,i) => {
            if(e === null){
                acceptance.splice(i,1);
            }
        });

        var metrics = this.state.metrics;
        metrics.filter((e,i) => {
            if(e === null){
                metrics.splice(i,1);
            }
        });

        var softwares = this.state.softwares;
        softwares.filter((e,i) => {
            if(e === null){
                softwares.splice(i,1);
            }
        });

        var hardwares = this.state.hardwares;
        hardwares.filter((e,i) => {
            if(e === null){
                hardwares.splice(i,1);
            }
        });

        var interfaces = this.state.interfaces;
        interfaces.filter((e,i) => {
            if(e === null){
                interfaces.splice(i,1);
            }
        });

        var rfp = this.state.rfp;
        rfp.filter((e,i) => {
            if(e === null){
                rfp.splice(i,1);
            }
        });

        var demo = this.state.demo;
        demo.filter((e,i) => {
            if(e === null){
                demo.splice(i,1);
            }
        });

        var priorart = this.state.priorart;
        priorart.filter((e,i) => {
            if(e === null){
                priorart.splice(i,1);
            }
        });

       


        var cert = {
            studentName: this.state.studentName,
            studentId:this.state.studentId,
            studentEmail:this.state.studentEmail,
        
            
            


            roleScore: [{
                data: {
                    p1: this.state.roleScore[0].p,
                    p2: this.state.roleScore[1].p,
                    p3: this.state.roleScore[2].p,
                    p4: this.state.roleScore[3].p,
                    p5: this.state.roleScore[4].p,
                    p6: this.state.roleScore[5].p
                  },
                meta: { color: 'red' }
            }],
            roleNote: this.state.roleNote,
            techScore: [{
                data: {
                    p1: this.state.techScore[0].p,
                    p2: this.state.techScore[1].p,
                    p3: this.state.techScore[2].p,
                    p4: this.state.techScore[3].p,
                    p5: this.state.techScore[4].p,
                    p6: this.state.techScore[5].p
                  },
                meta: { color: 'blue' }
            }],
            techNote: this.state.techNote,        
            certificates:[                
                {
                    certid : this.state.certid, 
                    certpath: this.state.certpath,
                    title : this.state.title,
                    novelty: this.state.novelty,
                    complexity:this.state.complexity, 
                    manualurl:this.state.manualurl,
                    
                    acceptance : acceptance,
                    metrics: metrics,
                    softwares:softwares,
                    hardwares:hardwares,
                    interfaces:interfaces,
                    rfp:rfp,
                    demo:demo,
                    priorart:priorart
                }
            ]
        }


        console.log(cert);
        
        let certificateEntry = new FormData();

        certificateEntry.append("cert", JSON.stringify(cert));

        axios.post("http://localhost:8000/test", certificateEntry)
            .then(e => {
            console.log(e.data);
            if(e.data.status === "inserted"){
                alert("inserted");
            }
        })

    }

    certifile = (event) => {
        console.log(event.target.files[0]);

        var certifile = [];
        certifile.push(event.target.files[0]);

        this.setState({
            certifile:certifile
        })

    }


    certUpload = (event) => {
        event.preventDefault();
        
        var certifileToBeUploaded = new FormData();
        certifileToBeUploaded.append("file",this.state.certifile[0]);

        
        axios.post("http://localhost:8000/up", certifileToBeUploaded)
        //axios.post("https://capsule.graylb.in/up", certifileToBeUploaded)
        .then(e => {
            console.log(e.data);

            //{upload: true, filepath: "http://localhost:8000/cert/SubhadipGhosh.pdf"}

            if(e.data.upload){

                this.setState({
                    certificateFIleUpload:false,
                    certpath:e.data.filepath,
                    certid:e.data.filepath.replace(".pdf","").replace("http://localhost:8000/cert/", "")
                })

            }

        })

    }

    
    render(){
        return(

            <>

            <section  className={this.state.certificateFIleUpload ? "my-5 py-5 certificateForm" : "my-5 py-5 certificateForm d-none"}>

                <div className="container">

                    <div className="row">

                        <div className="col-12">

                            <form onSubmit={(event) => this.certUpload(event)}>
                                <input type="file" onChange={(event) => this.certifile(event)}/>
                                <button>Upload</button>
                            </form>

                        </div>

                    </div>

                </div>

            </section>

            <section className={this.state.certificateFIleUpload ? "my-5 py-5 certificateForm d-none" : "my-5 py-5 certificateForm"}>
                <div className="container">

                    <div className="row">

                        <div className="col-md-8">

                            <form className="certiUpload" onSubmit={(event) => this.submitCertificate(event)}>

                                <div className="row">

                                    <div className="clearfix col-12 text-center">
                                            {this.state.formNo == 1 ? null : <a className="d-inline-block float-left" href="#" onClick={(event) => this.decrSteps(event)}>Prev</a>}
                                            {this.state.formNo}
                                            <a href="#" className="d-inline-block float-right" onClick={(event) => this.incrSteps(event)}>Next</a>
                                    </div>

                                </div>                            
                                
                                <div className={this.state.formNo === 1 ? 'row' : 'd-none row'}>
                                        <div className="form-group col-6">
                                            <label>Student Name</label>
                                            <input className="form-control" onChange={(event) => this.studentName(event)}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Student Id</label>
                                            <input className="form-control" onChange={(event) => this.studentId(event)} disabled value={this.state.studentId}/>
                                        </div>

                                        <div className="form-group col-12">
                                            <label>Student Email</label>
                                            <input className="form-control" onChange={(event) => this.studentEmail(event)}/>
                                        </div>
                                </div>                             

                                <div className={this.state.formNo === 2 ? 'row' : 'row d-none'}>
                                    <div className="form-group col-6">
                                        <label>Role Score 1</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.roleScore(event, 0)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Role Score 2</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.roleScore(event, 1)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Role Score 3</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.roleScore(event, 2)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Role Score 4</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.roleScore(event, 3)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Role Score 5</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.roleScore(event, 4)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Role Score 6</label>
                                        <select className="form-control mb-0" onChange={(event)=> this.roleScore(event, 5)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-6">
                                        <label>Tech Score 1</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.techScore(event, 0)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Tech Score 2</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.techScore(event, 1)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Tech Score 3</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.techScore(event, 2)}>
                                            <option value="">Select a Value</option>
                                           <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Tech Score 4</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.techScore(event, 3)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Tech Score 5</label>
                                        <select className="form-control mb-2" onChange={(event)=> this.techScore(event, 4)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>

                                        <label>Tech Score 6</label>
                                        <select className="form-control mb-0" onChange={(event)=> this.techScore(event, 5)}>
                                            <option value="">Select a Value</option>
                                            <option value="0">0</option>
                                            <option value=".1">.1</option>
                                            <option value=".2">.2</option>
                                            <option value=".3">.3</option>
                                            <option value=".4">.4</option>
                                            <option value=".5">.5</option>
                                            <option value=".6">.6</option>
                                            <option value=".7">.7</option>
                                            <option value=".8">.8</option>
                                            <option value=".9">.9</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-6">
                                        <label>Role Note</label>
                                        <textarea className="form-control" onChange={(event) => this.roleNote(event)}></textarea>
                                    </div>

                                    

                                    <div className="form-group col-6">
                                        <label>Tech Note</label>
                                        <textarea className="form-control" onChange={(event)=> this.techNote(event)}></textarea>
                                    </div>
                                </div>

                                <div className={this.state.formNo === 3 ? 'row' : 'd-none row'}>
                                        <div className="form-group col-6">
                                            <label>Certificate Path</label>
                                            <input className="form-control" onChange={(event)=> this.CertificatePath(event)} disabled value={this.state.certpath}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Certificate Id</label>
                                            <input className="form-control" onChange={(event)=> this.CertificateId(event)} disabled value={this.state.certid}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Certificate Title</label>
                                            <input className="form-control" onChange={(event)=> this.CertificateTitle(event)}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Novelty</label>
                                            <input className="form-control" onChange={(event)=> this.CertificateNovelty(event)}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Certificate complexity</label>
                                            <select className="form-control mb-0" onChange={(event)=> this.Certificatecomplexity(event)}>
                                                <option value="">Select a Value</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Manual URL</label>
                                            <input className="form-control" onChange={(event)=> this.ManualURL(event)}/>
                                        </div>
                                </div>

                                <div className={this.state.formNo === 4 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>Acceptance {this.state.acceptance.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetAcceptance}>Rest Acceptance</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.acceptance.map((e,i)=>{


                                            if(e===null){

                                            }
                                            else{

                                                return(                                               

                                                    <div className="container-fluid" key={i}>
                                                        <div className="row py-3">
                                                            <div className="col-12">
                                                                <h4>Acceptance criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delAcptnc(i)}>X</span></h4>
                                                            </div>
                                                            <div className="form-group col-6">
                                                                <label>Acceptance Criteria</label>
                                                                <input className="form-control" onChange={(event) => this.criteriaValue(event, i)}/>
                                                            </div>
    
                                                            <div className="form-group col-6">
                                                                <label>Acceptance Status</label>
                                                                <select className="form-control mb-0" onChange={(event) => this.statusValue(event, i)} >
                                                                    <option value="passed">Passed</option>
                                                                    <option value="failed">Failed</option>
                                                                </select>
                                                            </div>
    
                                                            <div className="form-group col-12">
                                                                <label>Acceptance Quality</label>
                                                                <select className="form-control mb-0" onChange={(event) => this.qualityValue(event, i)}>
                                                                    <option value="">Select a Value</option>
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                
                                                )

                                            }


                                            
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addAccptnce(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 5 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>Metrics {this.state.metrics.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetmetrics}>Rest Metrics</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.metrics.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>Metrics criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delmetrics(i)}>X</span></h4>
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <label>Metrics Scope</label>
                                                            <input className="form-control" onChange={(event) => this.metricScope(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Metrics units</label>
                                                            <input className="form-control" onChange={(event) => this.metricUnits(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Metrics estimate</label>
                                                            <input className="form-control" type="number" onChange={(event) => this.metricEstimate(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Metrics Actual</label>
                                                            <input className="form-control" type="number"  onChange={(event) => this.metricActual(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-12">
                                                            <label>Metrics Ratings</label>
                                                            <select className="form-control mb-0" onChange={(event) => this.metricRatings(event, i)}>
                                                                <option value="">Select a Value</option>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addMetrics(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 6 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>softwares {this.state.softwares.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetSoftwares}>Rest softwares</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.softwares.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>Softwares criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delSoftwares(i)}>X</span></h4>
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <label>Softwares Name</label>
                                                            <input className="form-control" onChange={(event) => this.SoftwaresName(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Softwares Type</label>
                                                            <input className="form-control" onChange={(event) => this.Softwarestype(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Softwares competency</label>
                                                            <select className="form-control mb-0" onChange={(event) => this.Softwarescompetency(event, i)}>
                                                                <option value="">Select a Value</option>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Softwares URL</label>
                                                            <input className="form-control" onChange={(event) => this.Softwaresurl(event, i)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addSoftwares(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 7 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>Hardwares {this.state.hardwares.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resethardwares}>Rest hardwares</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.hardwares.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>Hardwares criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delhardwares(i)}>X</span></h4>
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <label>Hardwares Name</label>
                                                            <input className="form-control" onChange={(event) => this.hardwaresName(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Hardwares Type</label>
                                                            <input className="form-control" onChange={(event) => this.hardwarestype(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Hardwares competency</label>
                                                            <select className="form-control mb-0" onChange={(event) => this.hardwarescompetency(event, i)}>
                                                                <option value="">Select a Value</option>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Hardwares URL</label>
                                                            <input className="form-control" onChange={(event) => this.hardwaresurl(event, i)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addHardwares(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 8 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>interfaces {this.state.interfaces.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetinterfaces}>Rest interfaces</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.interfaces.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>interfaces criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delinterfaces(i)}>X</span></h4>
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <label>interfaces Name</label>
                                                            <input className="form-control" onChange={(event) => this.interfacesName(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>interfaces competency</label>
                                                            <select className="form-control mb-0" onChange={(event) => this.interfacescompetency(event, i)}>
                                                                <option value="">Select a Value</option>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>interfaces URL</label>
                                                            <input className="form-control" onChange={(event) => this.interfacesurl(event, i)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addinterfaces(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 9 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>rfp {this.state.rfp.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetrfp}>Reset rfp</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.rfp.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>rfp criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delirfp(i)}>X</span></h4>
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <label>rfp Name</label>
                                                            <input className="form-control" onChange={(event) => this.rfpName(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>rfp competency</label>
                                                            <select className="form-control mb-0" onChange={(event) => this.rfpcompetency(event, i)}>
                                                                <option value="">Select a Value</option>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>rfp URL</label>
                                                            <input className="form-control" onChange={(event) => this.rfpurl(event, i)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addrfp(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 10 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>demo {this.state.demo.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetrfp}>Reset rfp</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.demo.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>demo criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delidemo(i)}>X</span></h4>
                                                        </div>

                                                        <div className="form-group col-12">
                                                            <label>demo URL</label>
                                                            <input className="form-control" onChange={(event) => this.demourl(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-12">
                                                            <label>demo comments</label>
                                                            <textarea className="form-control" onChange={(event) => this.democomments(event, i)}></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.adddemo(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 11 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>priorart {this.state.priorart.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetpriorart}>Reset rfp</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.priorart.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>demo criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delipriorart(i)}>X</span></h4>
                                                        </div>

                                                        <div className="form-group col-12">
                                                            <label>priorarturl URL</label>
                                                            <input className="form-control" onChange={(event) => this.priorarturl(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-12">
                                                            <label>demo comments</label>
                                                            <textarea className="form-control" onChange={(event) => this.priorartcomments(event, i)}></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addpriorart(event)}>+</a>
                                        </div>

                                        <div className="col-12">
                                            <button className="w-100 btn btn-success">Submit</button>
                                        </div>
                                </div>
                                
                                

                            </form>

                        </div>

                        <div className="col-md-4">
                            <p>acceptance</p>
                            {JSON.stringify(this.state.acceptance)}

                            <p>metrics</p>
                            {JSON.stringify(this.state.metrics)}

                            <p>softwares</p>
                            {JSON.stringify(this.state.softwares)}

                            <p>hardwares</p>
                            {JSON.stringify(this.state.hardwares)}

                            <p>interfaces</p>
                            {JSON.stringify(this.state.interfaces)}

                            <p>rfp</p>
                            {JSON.stringify(this.state.rfp)}

                            <p>demo</p>
                            {JSON.stringify(this.state.demo)}

                            <p>priorart </p>
                            {JSON.stringify(this.state.priorart )}

                            
                        </div>

                    </div>

                </div>
            </section>


            </>
        )
    }


}

export default Admin;
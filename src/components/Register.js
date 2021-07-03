import React, {useEffect, useState} from 'react';
const Register = () => {

    const [step, setStep] = useState(0);

    return(
        <section className="py-5 registerForm">

            <div className="container">

                <div className="row justify-content-center">


                    <div className="col-md-7">

                    </div>


                    <div className="col-md-5">
                        <form>
                            <div className={step === 0 ? "" : "d-none"}>
                                <div className="form-group">
                                    <label>email</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <label>Whatsapp/Contact Number</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <select className="form-control"  required>
                                        <option value="">Choose</option>
                                        <option value="Degree program">Degree program</option>
                                        <option value="Bachelor of Engineering/ Technology">Bachelor of Engineering/ Technology</option>
                                        <option value="Master of Engineering / Technology">Master of Engineering / Technology</option>
                                        <option value="PhD in Engineering">PhD in Engineering</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Name of Institute *</label>
                                    <input className="form-control" placeholder="" required/>
                                </div>

                                <div className="form-group">
                                    <label>Department *</label>

                                    <div>
                                        <input id="d1" className="" type="radio" name="dept" value="Computer Science and Engineering1" />
                                        <label className="pl-2 mb-0" for="d1">Computer Science and Engineering1</label>
                                    </div>

                                    <div>
                                        <input id="d2" className="" type="radio" name="dept" value="Electronics and Communication Engineering" />
                                        <label className="pl-2 mb-0" for="d2">Electronics and Communication Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d3" className="" type="radio" name="dept" value="Information Technology" />
                                        <label className="pl-2 mb-0" for="d3">Information Technology</label>
                                    </div>
                                    <div>
                                        <input id="d4" className="" type="radio" name="dept" value="Computer Applications" />
                                        <label className="pl-2 mb-0" for="d4">Computer Applications</label>
                                    </div>
                                    <div>
                                        <input id="d5" className="" type="radio" name="dept" value="Electrical Engineering" />
                                        <label className="pl-2 mb-0" for="d5">Electrical Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d6" className="" type="radio" name="dept" value="Instrumentation Engineering" />
                                        <label className="pl-2 mb-0" for="d6">Instrumentation Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d7" className="" type="radio" name="dept" value="Other" />
                                        <label className="pl-2 mb-0" for="d7">Other</label>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label>Year *</label>
                                    <select className="form-control"  required>
                                        <option value="">Choose</option>
                                        <option value="Degree program">Degree program</option>
                                        <option value="Bachelor of Engineering/ Technology">Bachelor of Engineering/ Technology</option>
                                        <option value="Master of Engineering / Technology">Master of Engineering / Technology</option>
                                        <option value="PhD in Engineering">PhD in Engineering</option>
                                    </select>
                                </div>
                            </div>

                            
                            <div className={step === 1 ? "" : "d-none"}>
                                <div className="form-group">
                                    <label>email</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <label>Whatsapp/Contact Number</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <select className="form-control"  required>
                                        <option value="">Choose</option>
                                        <option value="Degree program">Degree program</option>
                                        <option value="Bachelor of Engineering/ Technology">Bachelor of Engineering/ Technology</option>
                                        <option value="Master of Engineering / Technology">Master of Engineering / Technology</option>
                                        <option value="PhD in Engineering">PhD in Engineering</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Name of Institute *</label>
                                    <input className="form-control" placeholder="" required/>
                                </div>

                                <div className="form-group">
                                    <label>Department *</label>

                                    <div>
                                        <input id="d1" className="" type="radio" name="dept" value="Computer Science and Engineering1" />
                                        <label className="pl-2 mb-0" for="d1">Computer Science and Engineering1</label>
                                    </div>

                                    <div>
                                        <input id="d2" className="" type="radio" name="dept" value="Electronics and Communication Engineering" />
                                        <label className="pl-2 mb-0" for="d2">Electronics and Communication Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d3" className="" type="radio" name="dept" value="Information Technology" />
                                        <label className="pl-2 mb-0" for="d3">Information Technology</label>
                                    </div>
                                    <div>
                                        <input id="d4" className="" type="radio" name="dept" value="Computer Applications" />
                                        <label className="pl-2 mb-0" for="d4">Computer Applications</label>
                                    </div>
                                    <div>
                                        <input id="d5" className="" type="radio" name="dept" value="Electrical Engineering" />
                                        <label className="pl-2 mb-0" for="d5">Electrical Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d6" className="" type="radio" name="dept" value="Instrumentation Engineering" />
                                        <label className="pl-2 mb-0" for="d6">Instrumentation Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d7" className="" type="radio" name="dept" value="Other" />
                                        <label className="pl-2 mb-0" for="d7">Other</label>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label>Year *</label>
                                    <select className="form-control"  required>
                                        <option value="">Choose</option>
                                        <option value="Degree program">Degree program</option>
                                        <option value="Bachelor of Engineering/ Technology">Bachelor of Engineering/ Technology</option>
                                        <option value="Master of Engineering / Technology">Master of Engineering / Technology</option>
                                        <option value="PhD in Engineering">PhD in Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className={step === 2 ? "" : "d-none"}>
                                <div className="form-group">
                                    <label>email</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <label>Whatsapp/Contact Number</label>
                                    <input className="form-control" placeholder=""  required/>
                                </div>

                                <div className="form-group">
                                    <select className="form-control"  required>
                                        <option value="">Choose</option>
                                        <option value="Degree program">Degree program</option>
                                        <option value="Bachelor of Engineering/ Technology">Bachelor of Engineering/ Technology</option>
                                        <option value="Master of Engineering / Technology">Master of Engineering / Technology</option>
                                        <option value="PhD in Engineering">PhD in Engineering</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Name of Institute *</label>
                                    <input className="form-control" placeholder="" required/>
                                </div>

                                <div className="form-group">
                                    <label>Department *</label>

                                    <div>
                                        <input id="d1" className="" type="radio" name="dept" value="Computer Science and Engineering1" />
                                        <label className="pl-2 mb-0" for="d1">Computer Science and Engineering1</label>
                                    </div>

                                    <div>
                                        <input id="d2" className="" type="radio" name="dept" value="Electronics and Communication Engineering" />
                                        <label className="pl-2 mb-0" for="d2">Electronics and Communication Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d3" className="" type="radio" name="dept" value="Information Technology" />
                                        <label className="pl-2 mb-0" for="d3">Information Technology</label>
                                    </div>
                                    <div>
                                        <input id="d4" className="" type="radio" name="dept" value="Computer Applications" />
                                        <label className="pl-2 mb-0" for="d4">Computer Applications</label>
                                    </div>
                                    <div>
                                        <input id="d5" className="" type="radio" name="dept" value="Electrical Engineering" />
                                        <label className="pl-2 mb-0" for="d5">Electrical Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d6" className="" type="radio" name="dept" value="Instrumentation Engineering" />
                                        <label className="pl-2 mb-0" for="d6">Instrumentation Engineering</label>
                                    </div>
                                    <div>
                                        <input id="d7" className="" type="radio" name="dept" value="Other" />
                                        <label className="pl-2 mb-0" for="d7">Other</label>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label>Year *</label>
                                    <select className="form-control"  required>
                                        <option value="">Choose</option>
                                        <option value="Degree program">Degree program</option>
                                        <option value="Bachelor of Engineering/ Technology">Bachelor of Engineering/ Technology</option>
                                        <option value="Master of Engineering / Technology">Master of Engineering / Technology</option>
                                        <option value="PhD in Engineering">PhD in Engineering</option>
                                    </select>
                                </div>
                            </div>
                            
                            <button className="btn btn-success">Save</button>

                        </form>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Register;
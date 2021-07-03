import React, {useState, useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/css/style.css';

import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//components
import Header from '../components/Header';
// import Banner from '../components/Banner';
// import Whatisit from '../components/Whatisit';
// import KickStart from '../components/KickStart';
// import Gapcrud from '../components/Gapcrud';
// import Services from '../components/Services';

import Home from './Home';
import Admin from './Admin';
import Fitment from '../components/Fitment';
import Scedule from '../components/Scedule';
import Register from '../components/Register';
import Footer from '../components/Footer';




function App() {


  const [projects, setProjects] = useState([]);

  useEffect(()=>{

    //console.log(JSON.stringify(report))

    // axios.get("http://localhost:8000/")
    // .then(e => {
    //   console.log(e.data);
    // })

    axios.get("http://localhost:8000/projects")
    .then(e => {
      console.log(e.data);

      setProjects(prev => prev = e.data);

    })

    


    var test11 = new FormData();

    // test11.append("name", "Subhadip");
    // test11.append("job", "Dev");

    // test11.append("report", JSON.stringify(report));

    // axios.post("http://localhost:8000/test")
    // .then(e => {
    //   console.log(e.data);
    // })

  }, [])


  //header modal
  const [showNav, setShowNav] = useState(false);
  const [downModal, setDownModal] = useState(false);

  const toggleName = (event) => {
      event.preventDefault();
      setShowNav(prev => prev = !prev);
  }

  const toggleNavDownModal = (event) => {
      event.preventDefault();
      setDownModal(prev => prev = !prev);
      setShowNav(false);
  }

  const closeNav = event => {
    event.preventDefault();
    setShowNav(false);
  }

  //career path modal

  const [pathDownModal, setpathDownModal] = useState(false);
  const togglepathDownModal= (event) => {
      event.preventDefault();
      setpathDownModal(prev => prev = !prev);
  }

  const [pathDownModal1, setpathDownModal1] = useState(false);
  const togglepathDownModal1= (event) => {
      event.preventDefault();
      setpathDownModal1(prev => prev = !prev);
  }

  const [pathRightModal1, setpathRightModal1] = useState(false);
  const togglepathRightModal1= (event) => {
      event.preventDefault();
      setpathRightModal1(prev => prev = !prev);
  }

  const [pathRightModal2, setpathRightModal2] = useState(false);
  const togglepathRightModal2= (event) => {
      event.preventDefault();
      setpathRightModal2(prev => prev = !prev);
  }

  const [pathRightModal3, setpathRightModal3] = useState(false);
  const togglepathRightModal3= (event) => {
      event.preventDefault();
      setpathRightModal3(prev => prev = !prev);
  }


  return (
    <>

<Header toggleName = {toggleName} toggleNavDownModal={toggleNavDownModal} showNav={showNav} downModal={downModal} closeNav = {closeNav}/>

{/* {JSON.stringify(projects)} */}



      <Router>
          {/* <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav> */}
          <Switch>
              <Route exact path='/'>
                <Home
                  toggleName = {toggleName} toggleNavDownModal={toggleNavDownModal} showNav={showNav} downModal={downModal} closeNav = {closeNav}
                  pathDownModal = {pathDownModal} togglepathDownModal={togglepathDownModal} pathDownModal1 = {pathDownModal1} togglepathDownModal1={togglepathDownModal1}
                  pathRightModal1 = {pathRightModal1} 
                  togglepathRightModal1={togglepathRightModal1}

                  pathRightModal2 = {pathRightModal2} 
                  togglepathRightModal2={togglepathRightModal2}

                  pathRightModal3 = {pathRightModal3} 
                  togglepathRightModal3={togglepathRightModal3}
                />
              </Route>
              <Route path='/fitment'>
                <Fitment/>
              </Route>
              <Route path='/admin' component={Admin} />
              <Route path='/scedule' component={Scedule} />
              <Route path='/register' component={Register} />


              {/* Register */}
              
          </Switch>

      </Router>



      <Footer/>
    </>
  );
}

export default App;

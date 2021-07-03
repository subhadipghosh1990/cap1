import React, {useState} from "react";

import Banner from '../components/Banner';
import Whatisit from '../components/Whatisit';
import KickStart from '../components/KickStart';
import Gapcrud from '../components/Gapcrud';
import Services from '../components/Services';


const Home = (props) => {

     return(
         <>

            
            <Banner/>
            <Whatisit 
                pathDownModal = {props.pathDownModal} 
                togglepathDownModal={props.togglepathDownModal} 
                pathDownModal1 = {props.pathDownModal1} 
                togglepathDownModal1={props.togglepathDownModal1}
            />
            <KickStart/>
            <Gapcrud/>
            <Services 
                pathRightModal1 = {props.pathRightModal1} 
                togglepathRightModal1={props.togglepathRightModal1}

                pathRightModal2 = {props.pathRightModal2} 
                togglepathRightModal2={props.togglepathRightModal2}

                pathRightModal3 = {props.pathRightModal3} 
                togglepathRightModal3={props.togglepathRightModal3}
            />

         </>
     )
 }


 export default Home;
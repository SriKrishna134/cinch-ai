import React from "react";
import "./Motive.css";
import  { forwardRef } from "react"
// import why from './../../assets/why.jpg'
// import clip from './../../assets/clip.png'
// import vid from '../../../public/vid.mp4'


const Motive = forwardRef(() => {
  return (
    <>
    {/*/
    // 
    //<div className="fullscreen-container" id="motive">
      //<div className="text-section">
        //<h1 className="main-heading">
          //<span>How You Can </span>
          
          //<span className="sas">cinch </span>
          //<span>It Now !</span>
           //</h1>
    //    <p className="description">
        //Cinch provides customised Ai solutions for streamlining your business  operations! With a focus on innovation, we promise to deliver efficiency with smart solutions.
      //  </p>
        
      //</div>
     // <img className="s" src={why} alt="" />
    //</div>
    
    //<img src={clip} alt="" className="clip"/>
    // /*/}
     {/* Video Section */}
     <div className="video-container" id="motive-section">
  
      <video className="motive-video" controls>
        <source src="cute.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
     {/* <div className="video-container">
     <video className="motive-video" controls>
        <source src="cute.mp4" type="video/mp4" />
         
        </video>
      </div> */}
    </>
  );
});

export default Motive;

import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const natureImages = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1443527216320-7e744084f5a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
  ];

  const [num,setNum]=useState(0);

  return (
    <>
      <div className="container">
        <h2>Image Carousel</h2>
        <div className="carousel">
          <div className="prev">
            <FontAwesomeIcon className="icon left" icon={faCaretLeft} onClick={()=>{setNum((num-1+10)%10)}} />
          </div>
          <div className="image-container">
            <img
              src={natureImages[num]}
              width="500"
              height="300"
            ></img>
          </div>
          <div className="prev">
            <FontAwesomeIcon className="icon right" icon={faCaretRight} onClick={()=>{setNum((num+1)%10)}}/>
          </div>
        </div>
        <div className="outoff">{num+1} / {natureImages.length}</div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import React1 from "./React.png";
function App() {
  return (
    <div>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

                <h1 className="title red">React JS</h1>

                <br />

                <img src="/ReactJs.jpg" style={{width: "25%"}} />

                <br />

                <img src={React1} style={{width: "25%"}} />

      </div>

                <video style={{width:"320px",height:"240px"}} controls>

                <source src="trailer.mp4" type="video/mp4" />

                </video>
       
    </div>
 
  );
}

export default App;

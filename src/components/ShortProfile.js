import React from 'react'
import Social from './Social'


    function ShortProfile(){
   
        return (
            <div style={{padding:"100px"}}>
            <img src="./me.jpg" className="App-logo" alt="logo" />
            <h1>Divyangi Singh</h1>
            <h2> Web Developer| MERN Stack </h2>
            <h3>| HTML | CSS | JS | Bootstrap | React.js | Node.js | Express | MongoDB </h3>
       
            <Social></Social>
        
        </div>
    
        );
}

export default ShortProfile;
import React from 'react'
import Social from './Social'
import BlogLinks from './BlogLinks'

    function ShortProfile(){
   
        return (
            <div style={{padding:'5%'}}>
            <img src="./ankitImage.png" className="App-logo" alt="logo" />
            <h1>Ankit Deshmukh</h1>
            <h2> Mobile Application Developer</h2>
            <h3>| Android | IOS | JAVA | Spring |</h3>
            
       
            <Social></Social>
        
        </div>
    
        );
}

export default ShortProfile;
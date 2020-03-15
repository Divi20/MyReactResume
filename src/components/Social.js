import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function Social(){
   
        return (
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
         <a href="www.github.com"><FaGithub style={{fontSize:"40px",color:"#fff"}}/></a>
         <a href="www.github.com"><FaLinkedin style={{fontSize:"40px",paddingLeft:"30px",color:"#fff"}}/></a>
         <a href="www.github.com"><FaInstagram style={{fontSize:"40px",paddingLeft:"30px",color:"#fff"}}/></a>
         </div>
        );
    
        
}

export default Social;
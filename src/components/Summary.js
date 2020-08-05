import React from 'react'
import {Card,CardText, CardFooter} from 'reactstrap'
import BlogLinks from './BlogLinks'
function Summary(){
   
        return (
            
          
            <p style={{flexDirection:'row',width:"50%" ,
            height:"50%",
            color:"#fff",justifyContent:"center",alignSelf:"center",padding:'5%',border:'1px solid #7d12ff',borderRadius:'2%'}}>

            <CardText style={{flex: 1, flexWrap: 'wrap',fontSize:"20px",padding:"5%"}}>
            "
            A hard-working, detail-oriented, methodical professional and self-motivated Mobile Application Developer with 1.5 years of experience. Worked as an Application Developer with vast experience in continuously developing, implementing, and adopting new technologies to maximise development efficiency and innovate applications.
            "
            </CardText>
            <CardFooter>
         
            </CardFooter>
            </p>
            
           
           
            
            
           
        
        );
}

export default Summary;
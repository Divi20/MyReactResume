import React from 'react'
import {Card,CardText, CardFooter} from 'reactstrap'
import BlogLinks from './BlogLinks'
function Summary(){
   
        return (
            
          
            <Card style={{flexDirection:'row',width:"50%" ,
            height:"50%",
            backgroundColor:"#fff",borderRadius:"10px",color:"#000",justifyContent:"center",alignSelf:"center"}}>

            <CardText style={{flex: 1, flexWrap: 'wrap',fontSize:"20px",padding:"5%"}}>
            "
            I am web development enthusiast with proficiency in HTML ,CSS , JavaScript , Bootstrap ,React.js ,Express and Node.js.I am also comfortable in Java and Python and ready to implement anything that can bring out efficient, optimized and user friendly softwares.
            "
            </CardText>
            <CardFooter>
            <BlogLinks></BlogLinks>
            </CardFooter>
            </Card>
            
           
           
            
            
           
        
        );
}

export default Summary;
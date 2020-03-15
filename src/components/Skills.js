import React from 'react'
import { Card,CardTitle,CardHeader, CardBody, CardText } from 'reactstrap'

function Skills(){
   
        return (
         <Card style={{color:"#000",justifyContent:"center",alignSelf:"cemter"}}>
         <CardHeader>
         <CardTitle>
         My Skills
         </CardTitle>
         </CardHeader>
         <CardBody>
         <CardText>bla bla </CardText>
         </CardBody>
         </Card>
        );      
}

export default Skills;
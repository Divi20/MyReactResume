import React from 'react'
import { Card, CardBody, CardFooter, CardTitle, Button } from 'reactstrap'

function Experience()
    {
        return (
            <div>
           
            <h1>My Experience</h1>
            <hr></hr>
         
                <div className="Ginger Mind"  style={{padding:'0% 5%'}}>
                    
                    <div style={{ display: 'flex', flexDirection: 'row'}}>

                        <div style={{width:'30%', padding:'0% 2%'}}>
                        <h1 style={{textAlign:'left',fontWeight:'300'}}>Mobile Application Developer - Gingermind Technologies Pvt Ltd, Bengaluru</h1>
                        <p  style={{textAlign:'left',fontWeight:'200'}}>September 2019 - Present</p>
                        </div>
                        <hr></hr>
                        
                        <Card style={{ padding:'2%',width: '18rem', height:'20rem', boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                            <CardBody>
                                <img src="./eyeD.jpeg"  alt="" width="100%" height="100%"/>
                            </CardBody>
                            <CardFooter>
                                <CardTitle>
                                    <h4>Eye-D </h4>
                                    <p>Descriptiont.....</p>
                                    <Button>Download App</Button>
                                </CardTitle>
                            </CardFooter>
                            </Card>

                            <Card style={{padding:'2%', width: '18rem', height:'20rem', boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                            <CardBody>
                                <img src="./eyeD.jpeg"  alt="" width="100%" height="100%"/>
                            </CardBody>
                            <CardFooter>
                                <CardTitle>
                                    <h4>Level Up </h4>
                                    <p>Descriptiont.....</p>
                                    <Button>Download App</Button>
                                </CardTitle>
                            </CardFooter>
                            </Card>

                            <Card style={{padding:'2%', width: '18rem', height:'20rem', boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                            <CardBody>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/03TLndNqe6Y" frameborder="0" allowfullscreen = {true}>
                            </iframe>
                            
                            </CardBody>
                            <CardFooter>
                                <CardTitle>
                                    <h4>Atharva </h4>
                                    <p>Descriptiont.....</p>
                                    <Button>View</Button>
                                </CardTitle>
                            </CardFooter>
                            </Card>
                          
                          
                      
                       

                    </div>
                </div>
                 
                <div className="Cotzero" style={{padding:'0% 5%'}}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div style={{width:'30%', padding:'0% 2%'}}>
                <h1 style={{textAlign:'left',fontWeight:'300'}}>Software Developer Intern - Cotzero Energy Pvt Ltd, Bengaluru</h1>
                <p  style={{textAlign:'left',fontWeight:'200'}}>January 2019 - July 2019</p>
                </div>
               
                <Card style={{ width: '18rem', height:'20rem', boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                    <CardBody>
                        <img src="./eyeD.jpeg"  alt="" width="100%" height="100%"/>
                    </CardBody>
                    <CardFooter>
                        <CardTitle>
                            <h4>Eye-D </h4>
                            <p>Descriptiont.....</p>
                            <Button>Download App</Button>
                        </CardTitle>
                    </CardFooter>
                    </Card>
            </div>
            </div>
           
                </div>
          

        );
    }



export default Experience;
import React from 'react'
import {Card,  CardBody, CardTitle, CardText,Button, CardImg,CardDeck} from 'reactstrap'

function Projects(){
   
        return (
            <div>
                <hr/>
                    <h1>My Projects</h1>
                    <hr></hr>
                        <CardDeck style={{display: 'flex', flexDirection: 'row',justifyContent:"center",paddingLeft:"10%",paddingRight:"10%"}}>
                                <Card style={{ width: '18rem',boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                                    <CardImg variant="top" src="./SD.jpg" style={{width:"15rem"}} />
                                    <CardBody>
                                        <CardTitle>Human Centred Autonomous Car</CardTitle>
                                        <CardText>
     .                                      I worked in Lane detection and Behavioural cloning using Python to simulate a self driving car on Udacity simulator.Lane detection gave me exposure to working with open CV library and behavior cloning combined all the preprocessing and deep nueral network training using Tensorflow to give result.
                                        </CardText>
                                        <Button variant="primary">Go somewhere</Button>
                                    </CardBody>
                                </Card>
                          
          <Card style={{ width: '18rem',boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
          <CardImg variant="top" src="./home.jpg" style={{width:"15rem"}} />
          <CardBody>
            <CardTitle>Curious Drives Blog Website</CardTitle>
            <CardText>
            CuriousDrives is a personal blog website where one can compose and save blogs.
            Front end: HTML ,CSS,JS
            Logic Layer: Express.js
            Backend: MongoDB native / Atlas
            </CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card style={{ width: '18rem',boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                                    <CardImg variant="top" src="./FormValidation.jpg" style={{width:"15rem"}} />
                                    <CardBody>
                                        <CardTitle>FormValidation using Vanila JS</CardTitle>
                                        <CardText>
                                         Getting used to with Vanilla JS concepts by designing frequently required basic components of a website
                                        </CardText>
                                        <Button variant="primary">Go somewhere</Button>
                                    </CardBody>
                                </Card>
                                <Card style={{ width: '18rem',boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                                    <CardImg variant="top" src="./bootweb.jpg" style={{width:"15rem"}} />
                                    <CardBody>
                                        <CardTitle>Card Title</CardTitle>
                                        <CardText>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button variant="primary">Go somewhere</Button>
                                    </CardBody>
                                </Card>
                                <Card style={{ width: '18rem',boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",marginRight:"5%",marginBottom:"5%"}}>
                                    <CardImg variant="top" src="./reactweb.jpg" style={{width:"15rem"}} />
                                    <CardBody>
                                        <CardTitle>Card Title</CardTitle>
                                        <CardText>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button variant="primary">Go somewhere</Button>
                                    </CardBody>
                                </Card>
                               
        </CardDeck>
         
          <hr/>
          </div>
        );
}

export default Projects;
import React,{Component }from "react";
import {Card,Button} from "react-bootstrap";
import logo from './logo.svg';

import "./Tech.css"
 class Tech extends Component{
     render(){
     return(

        <div className="tec">
        <div className="row">
            <div className="col-sm-3 offset-1">
            


 <Card style={{ width: '18rem' }} className="Card" >
 <Card.Img variant="top" className="App-logo" src={logo} />
 <Card.Body >
   <Card.Title>React js</Card.Title>
   <Card.Text>
    Click below to see one of my App built with react.js.
   </Card.Text>
  
   <Button variant="primary" href="https://rohith-chat-app.netlify.app/">Click Here</Button>
 </Card.Body>
 
</Card>


            
            </div>
            <div className="col-sm-3 offset-1">
            

 <Card style={{ width: '18rem' }} className="Card-2" >
 <Card.Img variant="top" className="App-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
 <Card.Body >
   <Card.Title>HTML_5</Card.Title>
   <Card.Text>
    It's one of my Skill and done so,many mini projects using that.
   </Card.Text>
  
   <Button variant="primary" href="https://github.com/Rohith889?tab=repositories">Click Here</Button>
 </Card.Body>
 
</Card>
            
            </div>
            <div className="col-sm-3 offset-1">
            <Card style={{ width: '18rem' }} className="Card-3" >
 <Card.Img variant="top" className="App-logo" src="https://coryrylan.com/assets/images/posts/types/css.svg" />
 <Card.Body >
   <Card.Title>CSS_3</Card.Title>
   <Card.Text>
    It's one of my Skill and done so,many mini projects using that.
   </Card.Text>
  
   <Button variant="primary" href="https://github.com/Rohith889?tab=repositories">Click Here</Button>
 </Card.Body>
 
</Card>
            </div>
        </div>
        <div className="row">
        <div className="col-sm-3 offset-1">
        <Card style={{ width: '18rem' }} className="Card-4" >
 <Card.Img variant="top" className="App-logo" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" />
 <Card.Body >
   <Card.Title>Java Script</Card.Title>
   <Card.Text>
    It's one of my Skill and done so,many mini projects using that.
   </Card.Text>
  
   <Button variant="primary" href="https://github.com/Rohith889?tab=repositories">Click Here</Button>
 </Card.Body>
 
</Card>
         
            </div>
            <div className="col-sm-3 offset-1">
            <Card style={{ width: '18rem' }} className="Card-5" >
 <Card.Img variant="top" className="App-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" />
 <Card.Body >
   <Card.Title>Node js & Express js</Card.Title>
   <Card.Text>
    It's one of my Skill and done so,many mini projects using that.
   </Card.Text>
  
   <Button variant="primary" href="https://github.com/Rohith889?tab=repositories">Click Here</Button>
 </Card.Body>
 
</Card>
            </div>
            <div className="col-sm-3 offset-1">
            <Card style={{ width: '18rem' }} className="Card-6" >
 <Card.Img variant="top" className="App-logo" src="https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg" />
 <Card.Body >
   <Card.Title>PostgreSQL & MongoDB </Card.Title>
   <Card.Text>
    It's one of my Skill and done so,many mini projects using that.
   </Card.Text>
  
   <Button variant="primary" href="">Click Here</Button>
 </Card.Body>
 
</Card>
         
            </div>
            
        </div>
      
         
         </div>
     )}
 }

 export default Tech;






import React,{Component }from "react";
import { Navbar,Nav,Form} from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";


 class Navba extends Component{
     render(){
     return(
      <Navbar className="Nav" bg="dark" variant="dark">
      <Navbar.Brand className="head" href="#home"><h3>ROHITH REDDY</h3></Navbar.Brand>
      <Nav className="mr-auto" >
      <h5>Mern Stack Developer</h5>
       
      </Nav>
      <Form inline>
      <Nav className="mr-auto">
      <Link  spy={true}
    smooth={true}
    
    duration= {500} to="container"><Nav.Link href="Contacts">About</Nav.Link></Link>
       <Link  spy={true}
    smooth={true}
    
    duration= {500}  to="tec"> <Nav.Link href="#features">Skills&Projects</Nav.Link> </Link>
        <Link  spy={true}
    smooth={true}
 
    duration= {600} to="about-container"><Nav.Link href="Contacts">Contact</Nav.Link></Link>
      </Nav>
      
        
      </Form>
    </Navbar>

       
     )}
 }

 export default Navba;
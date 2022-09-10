import React from 'react';
import "../../css/Header.css";
import {
Nav,
Navbar,
Container
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { GrFacebook, GrInstagram, GrTwitter} from "react-icons/gr";

class HeadBar extends React.Component{
  constructor(props) {
    super();
    this.state = {
      title: "Maya Studio",
      bgcolor:false,
        }
  }

  render(){

 
return (
<>
      <Navbar collapseOnSelect fixed='top' variant={this.props.dark ? 'dark':'light'} expand="lg" className={(this.props.dark ? 'bg-dark headbar':'bg-light headbar')}>
      <Container fluid  className='justify-content-right'>

        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={this.props.icon}
            style={{height:30}}
            className="d-inline-block align-top"
          /> {this.props.name}
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll"/>
         
          <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto">
            
                </Nav>
              <Nav className="justify-content-right">
                {
                this.props.headerLinks.map(function(Link,i){
                    return(  
                        <Nav.Link  key={i} href={Link.path}  className={({ isActive }) => (isActive ? "link-active" : "link")} activeStyle={{color:'orange'}} to={Link.path}>
                              {Link.title}
                        </Nav.Link>
                    )
                })
                }
                </Nav>


                <Nav sm={false} className='justify-content-right'>
              <Nav.Link>
              <GrFacebook as={Link} to={"https://facebook.com/" + this.props.contacts.facebook}></GrFacebook>
              </Nav.Link>

              <Nav.Link>
              <GrTwitter as={Link} to={"https://twitter.com/" + this.props.contacts.twitter}></GrTwitter>
              </Nav.Link>

              <Nav.Link>
              <GrInstagram as={Link} to={"https://facebook.com/" + this.props.contacts.GrInstagram}></GrInstagram>
              </Nav.Link>
          </Nav>


           </Navbar.Collapse>


        </Container>
      </Navbar>
    </>

);

  }

};

export default HeadBar;

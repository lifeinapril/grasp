import React from "react";
import {
Container, Stack
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../../css/Header.css";
import { GrFacebook, GrInstagram, GrTwitter,GrMail } from "react-icons/gr";


class Foot extends React.Component{
  render(){

 
  return (
    <>
      
      <div className={this.props.bg + " footer-copyright text-center py-3"}>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> {this.props.name} </a>
&nbsp;
&nbsp;
&nbsp;
<Stack direction="horizontal" className='text-center' gap={4}>
  <GrFacebook as={Link} to={"https://facebook.com/" + this.props.contacts.facebook}></GrFacebook>
  <GrTwitter as={Link} to={"https://twitter.com/" + this.props.contacts.twitter}></GrTwitter>
  <GrInstagram as={Link} to={"https://facebook.com/" + this.props.contacts.GrInstagram}></GrInstagram>
</Stack>
        </Container>
      </div>
    </>
  );
            }
}

export default Foot;
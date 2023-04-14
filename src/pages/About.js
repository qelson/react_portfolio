import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function About(){
    return(<main className="container mt-5 pt-5">
        


    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Personal Info</Accordion.Header>
        <Accordion.Body>
          I'm a Virginia native, but I love to travel and explore.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Interests</Accordion.Header>
        <Accordion.Body>
          I'm interested in music, gardening, drone flight and of course coding!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </main>
  );
}



export default About;

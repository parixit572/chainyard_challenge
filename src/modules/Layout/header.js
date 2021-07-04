import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

function Home(props) {
  return (
    <div className="home">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="link">Home</Button>
        </ButtonGroup>
        <ButtonGroup className="mr-2" aria-label="Second group">
          <Button variant="link">Block</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button variant="link">Link</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default Home;

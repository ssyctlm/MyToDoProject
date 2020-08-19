import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './components/home';
import {Container, Row, Col} from 'react-bootstrap';
function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <h1>hello world</h1>
        </Col>
        <Col>
        <h1>hello world</h1>
        </Col>
        <Col>
        <h1>hello world</h1>
        </Col>
      </Row>
      <Row>
         <Example/>

      </Row>
      <Row className="justify-content-md-center">
      <p className="text-black-50">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </Row>
    </Container>
  );
}

export default App;

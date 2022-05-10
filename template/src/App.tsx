import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            Template from <a
              href="https://github.com/fabalexsie/cra-template-ts-sass-bootstrap"
              target="_blank"
              rel="noopener noreferrer">gihub.com/fabalexsie</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

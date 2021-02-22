import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Axios from "axios";
import MyCard from './Component/Card';

const App = () => {

  const [receive, setReceive] = useState({});


  const fetchDetails = async() => {
    const {data} = await  Axios.get('https://randomuser.me/api/')

    const receive = data.results[0];
    setReceive(receive);
    console.log(receive);
  }
  // offset-md-4 mt-4 size
  useEffect(() => {
    fetchDetails();
  },[]);

  return (
      <Container fluid>
        <Row>
          <Col  md={4} className="crush" >
          <div className="simple">
              <Button className="button" onClick={() => fetchDetails()}>New User</Button>
          </div>
              <MyCard receive={receive} />
          </Col>
        </Row>
      </Container>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";
import styles from "./content.module.scss";
import axios from "axios";

const Content = () => {
  // Get Character data from API
  const url = "https://gc-dportal-caps.herokuapp.com/api/" + "server";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data));
  }, []);

  const serverValue = () => {
    return data.map((Server) => {
      return (
        <Card
          key={Server.ServerName}
          border="secondary"
          style={{ width: "18rem" }}
        >
          <Card.Header>{Server.ServerName}</Card.Header>
          <Card.Body>
            <Card.Text>
              IP: {Server.ServerIP} <br />
              Port: {Server.ServerPort} <br /> <br /> <br />
              Capacity:
            </Card.Text>
            <ProgressBar
              className={styles.customBar}
              now={Server.UserNum}
              min={0}
              max={100}
              label={`${Server.UserNum}%`}
            />
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
          <div>
            <h1 className={styles.titleText}>Server Status</h1>
          </div>
        </Col>
      </Row>
      <Row className={styles.customRowValues}>
        <div className="card-columns">{serverValue()}</div>
      </Row>
    </Container>
  );
};

export default Content;

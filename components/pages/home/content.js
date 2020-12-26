import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
          <div className={styles.title}>
            <img
              src="home/home-content-title-separator.svg"
              alt="image of line separator of left side"
            ></img>
            <h1 className={styles.titleText}>LATEST NEWS</h1>
            <img
              src="home/home-content-title-separator.svg"
              alt="image of line separator of right side"
            ></img>
          </div>
        </Col>
      </Row>
      <Row className={styles.customRow}>
        <div className="card-columns">
          <Card bg="dark" className={styles.newsCard}>
            <Card.Img
              alt="A girl with orange hair and silver sword."
              variant="top"
              src="home/news1.jpg"
            />
            <Card.Body>
              <Card.Title className={styles.newsTitle}>News Title</Card.Title>
              <Card.Subtitle className={styles.newsSubtitle}>
                News type, Date, Time
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna....
              </Card.Text>
              <Button variant="primary">Read more...</Button>
            </Card.Body>
          </Card>
          <Card bg="dark" className={styles.newsCard}>
            <Card.Img
              alt="A girl with purple dress and purple hair"
              variant="top"
              src="home/news2.jpg"
            />
            <Card.Body>
              <Card.Title className={styles.newsTitle}>News Title</Card.Title>
              <Card.Subtitle className={styles.newsSubtitle}>
                News type, Date, Time
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna....
              </Card.Text>
              <Button variant="primary">Read more...</Button>
            </Card.Body>
          </Card>
          <Card bg="dark" className={styles.newsCard}>
            <Card.Img
              alt="A girl with maroon hair and maroon dress"
              variant="top"
              src="home/news3.jpg"
            />
            <Card.Body>
              <Card.Title className={styles.newsTitle}>News Title</Card.Title>
              <Card.Subtitle className={styles.newsSubtitle}>
                News type, Date, Time
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna....
              </Card.Text>
              <Button variant="primary">Read more...</Button>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Content;

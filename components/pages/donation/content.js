import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./content.module.scss";
import ReactPayPal from "./reactpaypal";

const DonationContent = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col md={6} xs={10} className={styles.customCol}>
          <ReactPayPal total={10} />
        </Col>
      </Row>
    </Container>
  );
};

export default DonationContent;

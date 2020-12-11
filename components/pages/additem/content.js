import React from "react";
import { Container, Row } from "react-bootstrap";
import FormAddItem from "./formAddItem";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <FormAddItem />
      </Row>
    </Container>
  );
};

export default Content;

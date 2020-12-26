import React from "react";
import { Container, Row } from "react-bootstrap";
import FormEditCharacters from "./formEditCharacters";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <FormEditCharacters />
      </Row>
    </Container>
  );
};

export default Content;

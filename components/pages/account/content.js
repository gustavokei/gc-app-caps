import React from "react";
import { Container, Row } from "react-bootstrap";
import FormEditAccount from "./formEditAccount";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <FormEditAccount />
      </Row>
    </Container>
  );
};

export default Content;

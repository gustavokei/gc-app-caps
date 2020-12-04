import React from "react";
import { Container, Row } from "react-bootstrap";
import TableItems from "./tableItems";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <TableItems />
      </Row>
    </Container>
  );
};

export default Content;

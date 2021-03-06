import React from "react";
import { Container, Row } from "react-bootstrap";
import TableRankExp from "./tableRankExp";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <div className={styles.title}>
          <img
            src="home/home-content-title-separator.svg"
            alt="image of line separator of left side"
          ></img>
          <h1 className={styles.titleText}>TOP 10 EXP</h1>
          <img
            src="home/home-content-title-separator.svg"
            alt="image of line separator of right side"
          ></img>
        </div>
        <TableRankExp />
      </Row>
    </Container>
  );
};

export default Content;

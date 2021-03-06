import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import styles from "./mob-content.module.scss";
import { GlobalContext } from "../../models/global-provider";
import charData from "./char-selector-data";

const MobContent = () => {
  let { state } = useContext(GlobalContext);

  return (
    <div className={styles.wrapper}>
      <ListGroup className={styles.listgroup}>
        <ListGroup.Item active>
          <b>Jobs</b>
        </ListGroup.Item>
        <ListGroup.Item>{charData[state.char].jobs[0]}</ListGroup.Item>
        <ListGroup.Item>{charData[state.char].jobs[1]}</ListGroup.Item>
        <ListGroup.Item>{charData[state.char].jobs[2]}</ListGroup.Item>
        <ListGroup.Item>{charData[state.char].jobs[3]}</ListGroup.Item>
      </ListGroup>
      <div className={styles.desc}>
        <span>{charData[state.char].desc}</span>
      </div>
      <Container className={styles.customContainer}>
        <Row className={styles.customRow}>
          <Col className={styles.customCol}>
            <div className={styles.char}>
              <h1 className={styles.title}>{charData[state.char].name}</h1>
            </div>
            <img
              className={styles.charimg}
              src={"characters/mob-img-char-" + state.char + ".png"}
              alt="Elesis"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobContent;

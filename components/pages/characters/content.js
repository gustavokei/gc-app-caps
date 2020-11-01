import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import styles from "./content.module.scss";
import { GlobalContext } from "../../models/global-provider";

const Content = () => {
  let { state } = useContext(GlobalContext);

  let charData = [
    {
      name: "Elesis Sieghart",
      jobs: ["Knight", "Spearman", "Sword Master", "Savior"],
      desc: "First character",
    },
    {
      name: "Lire Eryuell",
      jobs: ["Archer", "Crossbowman", "Arch Ranger", "Nova"],
      desc: "Second character",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container className={styles.customContainer}>
        <Row className={styles.customRow}>
          <Col className={styles.customCol}>
            <div className={styles.char}>
              <h1 className={styles.title}>{charData[state.char].name}</h1>
              <ListGroup className={styles.listgroup}>
                <ListGroup.Item active>
                  <b>Jobs</b>
                </ListGroup.Item>
                <ListGroup.Item>{charData[state.char].jobs[0]}</ListGroup.Item>
                <ListGroup.Item>{charData[state.char].jobs[1]}</ListGroup.Item>
                <ListGroup.Item>{charData[state.char].jobs[2]}</ListGroup.Item>
                <ListGroup.Item>{charData[state.char].jobs[3]}</ListGroup.Item>
              </ListGroup>
            </div>
            <div className={styles.desc}>
              <span>{charData[state.char].desc}</span>
            </div>
            <img
              className={styles.charimg}
              src={"characters/img-char-" + state.char + ".png"}
              alt="Elesis"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;

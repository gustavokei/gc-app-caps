import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./header.module.scss";

const AboutHeader = () => {
  return (
    <>
      <div className={styles.customHeader}>
        <Container>
          <Row>
            <Col className={styles.customCharacterImg}>
              <img
                src="about/character.svg"
                alt="it is an image of Hero Character"
              ></img>
            </Col>
            <Col>
              <div>
                <img
                  className={styles.customGCLogo}
                  src="about/logo_grandchase.svg"
                  alt="it is an image of Grand Chase Logo"
                ></img>
                <h1 className={styles.customHeaderCaption}>
                  A 2D SIDE-SCROLLING ACTION MMORPG
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.bottomLine}></div>
    </>
  );
};

export default AboutHeader;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
          <div className={styles.footerLogo}>
            <img
              alt="image of white moon and yellow sun"
              src="logo.svg"
              width="183px"
              height="30px"
            />
          </div>
          <span className={styles.middleText}>
            Grand Chase &copy; is a <br className={styles.break} />
            registered trademark of KOG Co Ltd.
          </span>

          <div className={styles.social}>
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

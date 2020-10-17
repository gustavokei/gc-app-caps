import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
          <img
            className="footer-logo"
            src="logo.svg"
            width="183px"
            height="30px"
          />

          <span className={styles.middleText}>
            Grand Chase &copy; is a registered trademark of KOG Co Ltd
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

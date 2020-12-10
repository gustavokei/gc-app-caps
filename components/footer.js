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
            <img alt="" src="logo.svg" width="183px" height="30px" />
          </div>
          <span className={styles.middleText}>
            Grand Chase &copy; is a <br className={styles.break} />
            registered trademark of KOG Co Ltd.
          </span>

          <div className={styles.social}>
            <a href="www.github.com">
              <FontAwesomeIcon icon={faDiscord} title="github" alt="github" />
            </a>
            <a href="www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                title="facebook"
                alt="facebook"
              />
            </a>
            <a href="www.instagram.com">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                title="instagram"
                alt="instagram"
              />
            </a>
            <a href="www.youtube.com">
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                title="youtube"
                alt="youtube"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

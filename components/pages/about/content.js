import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "./content.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const VideoContent = () => {
  
  const [video, setVideo] = React.useState(1);

  const changeVideo = (param) => {
    setVideo(param);
  };

  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
            <div className={styles.title}>
                <img
                src="about/about-content-title-separator.svg"
                alt="Line separator left"
                ></img>
                <h1 className={styles.titleText}>VIDEOS</h1>
                <img
                src="about/about-content-title-separator.svg"
                alt="Line separator right"
                ></img>
            </div>
        </Col>
      </Row>
      <Row className={styles.customRow}>
        <Col className={styles.customCol}>
            <h4 className={styles.customMainVideoTitle}>Video Title</h4>
        </Col>
        <Col className={styles.customCol}>
            <div className={styles.customShare}>
                <a href="#">
                    <FontAwesomeIcon className={styles.customShareIcon} icon={faShare} />
                </a>
                <h4 className={styles.customShare}>share</h4>
            </div>
        </Col>
      </Row>
      <Row >
        <Col>
          <div className={styles.customMainVideoGroup}>
            <div >
              <a href="#">
                <FontAwesomeIcon className={styles.customPrevNextBtn} icon={faArrowAltCircleLeft} />
              </a>
            </div>
            <div >
                <iframe className={styles.customMainIframe} type="text/html" src={"https://www.youtube.com/embed/" + video} frameBorder="0"/>
            </div>
            <div >
              <a href="#">
                <FontAwesomeIcon className={styles.customPrevNextBtn} icon={faArrowAltCircleRight} />
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <div className={styles.customShareBottom}>
        <a href="#">
            <FontAwesomeIcon className={styles.customShareIconBottom} icon={faShare} />
        </a>
        <h4 className={styles.customShare}>share</h4>
      </div>
      <Row className={styles.customVideoContainer}>
        <Col className={styles.customVideoColumn}>
          <img src={"about/video1.jpg"} onClick={() => changeVideo('GS2i5xqfoY8')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>Video Title 1</span>
          </div>
        </Col>
        <Col className={styles.customVideoColumn}>
          <img src={"about/video2.jpg"} onClick={() => changeVideo('lTC3UEDlAZM')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>Video Title 2</span>
          </div>
        </Col>  
        <Col className={styles.customVideoColumn}>
          <img src={"about/video3.jpg"} onClick={() => changeVideo('EnInsbAa_os')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>Video Title 3</span>
          </div>
        </Col>  
        <Col className={styles.customVideoColumn}>
          <img src={"about/video4.jpg"} onClick={() => changeVideo('tiX2tf3DFPQ')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>Video Title 4</span>
          </div>
        </Col>  
      </Row>
    </Container>
  );
};

export default VideoContent;

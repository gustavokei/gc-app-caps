import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import styles from "./content.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";


const VideoContent = () => {
  
  const [video, setVideo] = React.useState(0);

  const components = [
    'GS2i5xqfoY8',
    'lTC3UEDlAZM',
    'EnInsbAa_os',
    'tiX2tf3DFPQ'
  ]

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
        <Col className={styles.videoColumn}>
          <div className={styles.customMainVideoGroup}>
            <div >
              <FontAwesomeIcon className={styles.customBackBtn} icon={faArrowAltCircleLeft} />
              {video > 0 &&
                <FontAwesomeIcon className={styles.customPrevBtn} onClick={() => setVideo(video - 1)} icon={faArrowAltCircleLeft} />
              }
            </div>
            <div >
              <iframe className={styles.customMainIframe} type="text/html" src={"https://www.youtube.com/embed/" + components[video]} frameBorder="0"/>
            </div>
            <div >
              <FontAwesomeIcon className={styles.customForwardBtn} icon={faArrowAltCircleRight} />
              {video < components.length - 1 &&  
                <FontAwesomeIcon className={styles.customNextBtn} onClick={() => setVideo(video + 1)}  icon={faArrowAltCircleRight} />
              }
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.customVideoContainer}>
        <Col className={styles.customVideoColumn}>
          <img src={"about/video1.jpg"} onClick={() => changeVideo('0')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>GC - Season 5 Trailer</span>
          </div>
        </Col>
        <Col className={styles.customVideoColumn}>
          <img src={"about/video2.jpg"} onClick={() => changeVideo('1')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>GC - Trailer PC</span>
          </div>
        </Col>  
        <Col className={styles.customVideoColumn}>
          <img src={"about/video3.jpg"} onClick={() => changeVideo('2')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>GC - Ronan Reborn Trailer</span>
          </div>
        </Col>  
        <Col className={styles.customVideoColumn}>
          <img src={"about/video4.jpg"} onClick={() => changeVideo('3')} />
          <div className={styles.bottomVideoTitleBar}>
            <span>GC - Dimensional Chaser Trailer</span>
          </div>
        </Col>  
      </Row>
    </Container>
  );

};

export default VideoContent;
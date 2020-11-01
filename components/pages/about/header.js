    import React from "react";
    import { Container, Row, Col} from "react-bootstrap";
    import styles from "./header.module.scss";
    
    const AboutHeader = () => {
      return (
        <>
        <div className={styles.customHeader}>
            <img
                className={styles.customBackgroundImg}
                src="about/background.jpg"
                alt="Background Header Image"
            />
            <Container className={styles.customBanner}>
                <Row >
                    <Col >
                        <div className={styles.customCharacterImg}>
                            <img
                            src="about/character.svg"
                            alt="Hero Character"
                            ></img>
                        </div>
                    </Col>
                    <Col >
                        <div >
                            <img className={styles.customGCLogo}
                            src="about/logo_grandchase.svg"
                            alt="Grand Chase Logo"
                            ></img>
                            <h1 className={styles.customHeaderCaption}>A 2D SIDE-SCROLLING ACTION MMORPG</h1>
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
    
import React from "react";
import { Carousel, Button } from "react-bootstrap";
import styles from "./slider.module.scss";
import Link from "../../custom-link";

const Slider = () => {
  return (
    <div className={styles.parentSlider}>
      <Carousel interval={null} className={styles.customCarousel}>
        <Carousel.Item className={styles.customItem}>
          <img
            className={styles.customImg + " d-block"}
            src="home/slider1.jpg"
            alt="girl with green hair and white dress"
          />
          <Carousel.Caption className={styles.customCaption}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.customItem}>
          <img
            className={styles.customImg + " d-block"}
            src="home/slider2.jpg"
            alt="boy with black hair and golden sword"
          />

          <Carousel.Caption className={styles.customCaption}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.customItem}>
          <img
            className={styles.customImg + " d-block"}
            src="home/slider3.jpg"
            alt="girl with white hair and golden dress"
          />

          <Carousel.Caption className={styles.customCaption}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={styles.bottomBar}>
        <span>Lorem ipsum dolor sit amet</span>
        <Button>
          <Link href="/donation">
            <a>Donation</a>
          </Link>
        </Button>
      </div>
      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default Slider;

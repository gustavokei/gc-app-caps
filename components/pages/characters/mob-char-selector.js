import React, { useContext, useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./mob-char-selector.module.scss";
import { GlobalContext } from "../../models/global-provider";

const MobCharSelector = () => {
  let { state, dispatch } = useContext(GlobalContext);
  const [scrollid, setScroll] = useState(0);

  //toggle button: https://stackoverflow.com/questions/60284247/react-toggle-class-usestate-hook-form-several-button
  const [toggledButtonId, setToggledButtonId] = useState(false);
  const defaultButtons = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
  ];

  const selectChar = (charType) => {
    dispatch({ type: "selectChar", payload: charType });
  };

  const prevChar = () => {
    console.log(scrollid);
    if (scrollid > 0) {
      setScroll(scrollid - 1);
    }
  };

  const nextChar = () => {
    console.log(scrollid);
    if (scrollid < 6) {
      setScroll(scrollid + 1);
    }
  };

  const toggleButton = useCallback((id) => setToggledButtonId((state) => id), [
    toggledButtonId,
  ]);

  // This resets char selection
  // useEffect(() => {
  //   dispatch({ type: "selectChar", payload: 0 });
  // }, []);

  useEffect(() => {
    toggleButton(state.char);
  }, [state.char]);

  return (
    <div className={styles.wrapper + " bg-primary"}>
      <Container className={styles.customContainer}>
        <Row className={styles.customRow}>
          <Col className={styles.customCol}>
            <img
              className={styles.prev}
              src={"characters/arrow-left-solid.svg"}
              onClick={() => prevChar()}
            ></img>
            <div className={styles.charList}>
              {defaultButtons.map((button) => {
                const isToggled = button.id === toggledButtonId;
                return (
                  <img
                    key={button.id}
                    className={
                      styles.charIcon + " " + (isToggled ? styles.active : "")
                    }
                    style={{
                      transform: "translateX(" + scrollid * -270 + "px)",
                    }}
                    src={"characters/ico-char-" + button.id + ".png"}
                    onClick={() => selectChar(button.id)}
                  />
                );
              })}
            </div>
            <img
              className={styles.next}
              src={"characters/arrow-right-solid.svg"}
              onClick={() => nextChar()}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobCharSelector;

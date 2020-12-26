import React from "react";
import { Button } from "react-bootstrap";

//https://www.npmjs.com/package/react-responsive

const ExampleStateChange = () => {
  const [character, setCharacter] = React.useState(1);

  const changeCharacter = (param) => {
    setCharacter(param);
  };

  return (
    <div>
      <Button onClick={() => changeCharacter(1)}>Character 1</Button>
      <Button onClick={() => changeCharacter(2)}>Character 2</Button>
      <Button onClick={() => changeCharacter(3)}>Character 3</Button>
      <img src={"home/slider" + character + ".jpg"}></img>
    </div>
  );
};

export default ExampleStateChange;

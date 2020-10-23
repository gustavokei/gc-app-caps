import React from "react";
import { Button } from "react-bootstrap";
//import styles from "./content.module.scss";
import styles from "./state.change.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";


//https://www.npmjs.com/package/react-responsive

const ExampleStateChange = () => {
  const [character, setCharacter] = React.useState(1);
  const [charName, setName] = React.useState(1);  

  const changeCharacter = (param) => {

    setCharacter(param);

    
  };

  const changeName = (param) => {


  switch(param){
    case '1':
      setName("ABC");
      break;
    case '2':
      setName("DEF");  
      break;
    case '3':
      setName("GHI"); 
      break;
  }

};

  const prevCharacter = () => {
    if(character>1){
      setCharacter(character-1);
    }
    else{
      
    }
  };

  const nextCharacter = () => {
    if(character<3){
    setCharacter(character+1);
  }
  else{

  }
  };

  return (
   
    <div className ={styles.headerdesktop}>

<div className={styles.imgcontainer}>



<img className ={styles.headerdesktop} src={"characters/KnightNEw" + character + ".png"}></img>

<div className={styles.imgtitle}><h1 className={styles.titleText}>ELESIS SIEGHART</h1></div>
         
</div>



<div className={styles.bottomBar}>
 <div>
 <Container className={styles.customContainer}>
 <div className="card-row">

 <img   src={"characters/arrow-left-solid.png"} onClick={() => prevCharacter()}></img>
   
 <img  className ={styles.btnimg} src={"characters/ch1.png"} onClick={() => changeCharacter(1) }></img>




 <img  className ={styles.btnimg} src={"characters/ch2.png"} onClick={() => changeCharacter(2) }></img>




 <img  className ={styles.btnimg} src={"characters/ch3.png"} onClick={() => changeCharacter(3)}></img>


 <img   src={"characters/arrow-right-solid.png"} onClick={() => nextCharacter()}></img>

 </div>

</Container>

 
     </div>
      </div>
      <div className={styles.bottomLine}></div>
    </div>
    
   

 
  );
};

export default ExampleStateChange;

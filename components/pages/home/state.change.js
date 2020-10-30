import React from "react";
import { Button } from "react-bootstrap";
//import styles from "./content.module.scss";
import styles from "./state.change.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";


//https://www.npmjs.com/package/react-responsive

const ExampleStateChange = () => {
  const [character, setCharacter] = React.useState(1);
  

  const changeCharacter = (param) => {

    setCharacter(param);

    
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

 <img  className ={styles.btnimg} src={"characters/ch1.png"} onClick={() => changeCharacter(1) }></img>


<img  className ={styles.btnimg} src={"characters/ch2.png"} onClick={() => changeCharacter(2) }></img>


<img  className ={styles.btnimg} src={"characters/ch3.png"} onClick={() => changeCharacter(3)}></img>

<img  className ={styles.btnimg} src={"characters/ch1.png"} onClick={() => changeCharacter(3)}></img>


 <img   src={"characters/arrow-right-solid.png"} onClick={() => nextCharacter()}></img>

 </div>

 <div id ={styles.wrapper} className ={styles.wrapper}>
 <img  id={styles.slide} className ={styles.btnimg} src={"characters/ch3.png"} onClick={() => abc()}></img>

</div>
<button className ={styles.jsclick} >Click me!</button>


</Container>



 
     </div>
     

      </div>
    
    </div>

    
    
   

 
  );
};

export default ExampleStateChange;

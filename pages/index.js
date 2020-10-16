import Head from "../components/head";
import ExampleForm from "../components/example-form";
import CardLayout from "../components/home/content-card";
import ModalRegister from "../components/home/modal-register";
import ModalDownload from "../components/home/modal-download";
import ModalLogin from "../components/home/modal-login";
import FooterLayout from "../components/home/footer";
import styles from '../styles.module.css'
//import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  return (
    <div >
      <Head title="Project Soluna" />
      <ExampleForm />
      {/* <ModalLogin /> */}
      {/* <div>
        <button onClick={downloadButton}>DOWNLOAD</button>
      </div> */}
      <button>DOWNLOAD</button>
      {/* <div className={styles.modalDL}>        
        <ModalDownload />
      </div> */}

      {/* <ModalRegister /> */}
      <div className={styles.cardItem}> 
        <CardLayout />
      </div>     
      <div className={styles.footer}>
        <FooterLayout />
      </div>
    </div>
  );
};

//const downloadButton = () => {
//  <ModalDownload />
// alert("You clicked");
 // return(
    
 //   <div className={styles.modalDL}>
 //     <ModalDownload />
 //   </div>
 // );
//}

export default Home;



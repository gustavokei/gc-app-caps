import React from "react";
import Head from "../components/head";
import Content from "../components/pages/home/content";
import ModalRegister from "../components/pages/home/modal-register";
import ModalDownload from "../components/pages/home/modal-download";
import ModalLogin from "../components/pages/home/modal-login";
import Footer from "../components/footer";
import styles from "../styles.module.css";
//import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [ModalDownloadShow, SetModalDownloadShow] = React.useState(false);
  const [ModalLoginShow, SetModalLoginShow] = React.useState(false);
  const [ModalRegisterShow, SetModalRegisterShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => SetModalDownloadShow(true)}>Download</button>
      <button onClick={() => SetModalLoginShow(true)}>Login</button>
      <button onClick={() => SetModalRegisterShow(true)}>Register</button>

      <Head title="Project Soluna" />
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>

      <ModalDownload
        centered
        show={ModalDownloadShow}
        onHide={() => SetModalDownloadShow(false)}
      />
      <ModalRegister
        centered
        show={ModalRegisterShow}
        onHide={() => SetModalRegisterShow(false)}
      />
      <ModalLogin
        centered
        show={ModalLoginShow}
        onHide={() => SetModalLoginShow(false)}
      />
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

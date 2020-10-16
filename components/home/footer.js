import React from 'react';
import { Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';


const FooterLayout = () => {
  return (
    <>
      <div>
        <img className="footer-logo" src="logo.png" width="183px" height="30px"/>
      </div>

      <div className="footer-text" style={{opacity:"50%", padding:"2rem"}}>
        <span>Grand Chase &copy; is a registered trademark of KOG Co Ltd</span>
      </div>

      <div style={{padding:"1rem"}}>
       <FontAwesomeIcon width="30px" height="32.49px" icon={faDiscord} />
      </div>

      <div style={{padding:"1rem"}}>
      <FontAwesomeIcon width="30px" height="34.29px" icon={faFacebookSquare} />
      </div>

      <div style={{padding:"1rem"}}>
        <FontAwesomeIcon width="30px" height="34.29px" icon={faInstagramSquare} />
      </div>

      <div style={{padding:"1rem"}}>
        <FontAwesomeIcon width="30px" height="34.29px" icon={faYoutubeSquare} />
      </div>
    </>
  );
}

export default FooterLayout;


// const FooterLayout = () => {
//   return (
//     <>
//     <div class="d-flex flex-column">
//       <footer class="footer">
//         <div>
//           <img className="footer-logo" src="logo.png" width="183px" height="30px"/>
//           {/* <div className='footer-link-items'> */}
//           <span>Grand Chase &copy; is a registered trademark of KOG Co Ltd</span>
//           <ul className='socialmedia'>
//             <li>
//               <FontAwesomeIcon width="30px" height="32.49px" icon={faDiscord} />
//             </li>
//             <li>
//               <FontAwesomeIcon width="30px" height="34.29px" icon={faFacebookSquare} />
//             </li>
//             <li>
//               <FontAwesomeIcon width="30px" height="34.29px" icon={faInstagramSquare} />
//             </li>
//             <li>
//               <FontAwesomeIcon width="30px" height="34.29px" icon={faYoutubeSquare} />
//             </li>   
//           </ul>
//               {/* </div> */}
//         </div>
//       </footer>
//     </div>
//     <div className="d-flex flex-column">
//       <footer className="footer">
//         <img className="footer-logo" src="logo.png" width="183px" height="30px"/>
//         <div className="footer-text" style={{opacity:"50%"}}>
//           <span>Grand Chase &copy; is a registered trademark of KOG Co Ltd</span>
//         </div>
//         <div className='footer-container'>
//           <div className='footer-links'>
//             <div className='footer-link-wrapper'>
//               <div className='footer-link-items'>
//                 <ul className='socialmedia'>
//                   <li>
//                     <FontAwesomeIcon width="30px" height="32.49px" icon={faDiscord} />
//                   </li>
//                   <li>
//                     <FontAwesomeIcon width="30px" height="34.29px" icon={faFacebookSquare} />
//                   </li>
//                   <li>
//                     <FontAwesomeIcon width="30px" height="34.29px" icon={faInstagramSquare} />
//                   </li>
//                   <li>
//                     <FontAwesomeIcon width="30px" height="34.29px" icon={faYoutubeSquare} />
//                   </li>   
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>

//     </>
//   );
// }

// export default FooterLayout;
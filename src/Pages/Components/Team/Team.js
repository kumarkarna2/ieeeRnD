// import "./Team.css";
// import { useState } from "react";
// import Slider from "react-slick";
// import Abhinandan from "./Images/AbhinandanPic.png";
// import Akshat from "./Images/AkshatPic.png";
// import Malay from "./Images/Malay.png";
// import Maitreyi from "./Images/Maitreyi.png";
// import Sahil from "./Images/SahilThakur.png";
// import Shivansh from "./Images/ShivanshPic.png";
// import Ishita from "./Images/IshitaPic.png";
// import Mayank from "./Images/MayankPic.png";
// import Isha from "./Images/IshaPic.png";
// import Shashwat from "./Images/ShashwatPic.png";
// import Manas from "./Images/ManasPic.png";
// import Prachi from "./Images/PrachiPic.png";
// import Anshul from "./Images/AnshulPic.png";



// import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


// const images = [Mayank, Akshat, Manas, Isha];

// function Team() {
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <FaAngleRight />
//       </div>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <FaAngleLeft />
//       </div>
//     );
//   };

//   const [imageIndex, setImageIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     autoplay:true,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setImageIndex(next),
//     responsive:[
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
    
//   };

//   return (
//     <>
//       <div className='container-teams' id="team-murious">
//         <div className="TTT">
//           <div className='TitleTeam1'>
//             <b>Team</b>
//           </div>
//           <div className='TitleTechClub'>
//             Technical, Movies and Photography
//             <div className="teams-heading-underline"/>
//           </div>
//         </div>
//         <div className="SlideshowTeam">
//           <Slider {...settings}>
//             {images.map((img, idx) => (
//               <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
//                 <img src={img} alt={img} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Team;
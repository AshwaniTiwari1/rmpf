// // src/components/Slider.js

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const slides = [
//   {
//     image: 'https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png',
//     title: 'Slide 1',
//     videoUrl: 'https://www.example.com/video1',
//   },
//   {
//     image: 'https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png',
//     title: 'Slide 2',
//     videoUrl: 'https://www.example.com/video2',
//   },
//   // Add more slides as needed
// ];

// const Youtubedetails = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };

//   const openVideo = (videoUrl) => {
//     window.open(videoUrl, '_blank');
//   };

//   return (
//     <Slider {...settings}>
//       {slides.map((slide, index) => (
//         <div key={index} className="slide-card" onClick={() => openVideo(slide.videoUrl)}>
//           <img src={slide.image} alt={slide.title} />
//           <h3>{slide.title}</h3>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default Youtubedetails;


// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4, // You can increase this value
//   slidesToScroll: 1,
// };
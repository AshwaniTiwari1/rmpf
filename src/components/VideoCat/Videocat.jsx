// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Container = styled.div`
//   width: 80%;
//   max-width: 1280px;
//   margin-top: -20px;
//   margin: 0 auto;
//   @media (max-width: 840px) {
//     width: 90%;
//   }

//   h1 {
//     padding-top: 0rem;
//   }
// `;

// const ButtonContainer = styled.div`
//   text-align: center;
//   margin: 0px;
// `;

// const StyledButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   margin: 5px;
//   cursor: pointer;
//   border-radius: 5px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const VideoSlider = styled(Slider)`
//   width: 100%;
//   .slick-prev,
//   .slick-next {
//     font-size: 0rem; /* Increase the symbol size */
//     line-height: 1;
//     color: #007bff;
//   }
//   .slick-prev {
//     left: -40px; /* Adjust the position */
//   }
//   .slick-next {
//     right: -40px; /* Adjust the position */
//   }
// `;

// const VideoSlide = styled.div`
//   padding: 0 10px; /* Increase spacing between videos */
// `;

// const Videocat = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };

//   return (
//     <Container id="Videocat">
//       <ButtonContainer>
//         <StyledButton onClick={toggleShowMore}>
//           {showMore ? 'Hide' : 'Show More'}
//         </StyledButton>
//         {showMore && (
//           <div>
//             <StyledButton>Gaming Videos</StyledButton>
//             <StyledButton>Talking Head Videos</StyledButton>
//             <StyledButton>Documentary Style Videos</StyledButton>
//             <StyledButton>Shorts</StyledButton>
//             <VideoSlider {...sliderSettings}>
//               <VideoSlide>
//                 <iframe
//                   width="250"
//                   height="300"
//                   margin= "20"
//                   src="https://www.youtube.com/embed/VIDEO_ID_1"
//                   title="Video 2"
//                   allowFullScreen
//                 ></iframe>
//               </VideoSlide>
//               <VideoSlide>
//                 <iframe
//                   width="250"
//                   height="300"
//                   margin= "20"
//                   src="https://www.youtube.com/embed/VIDEO_ID_1"
//                   title="Video 3"
//                   allowFullScreen
//                 ></iframe>
//               </VideoSlide>
//               <VideoSlide>
//                 <iframe
//                   width="250"
//                   height="300"
//                   margin= "20"
//                   src="https://www.youtube.com/embed/VIDEO_ID_1"
//                   title="Video 4"
//                   allowFullScreen
//                 ></iframe>
//               </VideoSlide>
//               <VideoSlide>
//                 <iframe
//                   width="250"
//                   height="300"
//                   margin= "20"
//                   src="https://www.youtube.com/embed/VIDEO_ID_1"
//                   title="Video 5"
//                   allowFullScreen
//                 ></iframe>
//               </VideoSlide>
//               <VideoSlide>
//                 <iframe
//                   width="250"
//                   height="300"
//                   margin= "20"
//                   src="https://www.youtube.com/embed/VIDEO_ID_1"
//                   title="Video 1"
//                   allowFullScreen
//                 ></iframe>
//               </VideoSlide>
//               {/* Add more VideoSlide components for additional videos */}
//             </VideoSlider>
//           </div>
//         )}
//       </ButtonContainer>
//     </Container>
//   );
// };

// export default Videocat;




// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Container = styled.div`
//   width: 80%;
//   max-width: 1280px;
//   margin-top: -20px;
//   margin: 0 auto;
//   @media (max-width: 840px) {
//     width: 90%;
//   }

//   h1 {
//     padding-top: 0rem;
//   }
// `;

// const ButtonContainer = styled.div`
//   text-align: center;
//   margin: 0px;
// `;

// const StyledButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   margin: 5px;
//   cursor: pointer;
//   border-radius: 5px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const VideoSlider = styled(Slider)`
//   width: 100%;
//   .slick-prev,
//   .slick-next {
//     font-size: 2rem;
//     line-height: 1;
//     color: #007bff;
//   }
//   .slick-prev {
//     left: -40px;
//   }
//   .slick-next {
//     right: -40px;
//   }
// `;

// const VideoSlide = styled.div`
//   padding: 0 10px;
// `;

// const Videocat = () => {
//   const [showMore, setShowMore] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const categories = [
//     'All Videos',
//     'Gaming Videos',
//     'Talking Head Videos',
//     'Documentary Style Videos',
//     'Shorts',
//   ];

//   const videos = [
//     {
//       category: 'Gaming Videos',
//       title: 'Video 1',
//       id: 'VIDEO_ID_1',
//     },
//     {
//       category: 'Talking Head Videos',
//       title: 'Video 2',
//       id: 'VIDEO_ID_2',
//     },
//     {
//       category: 'Documentary Style Videos',
//       title: 'Video 3',
//       id: 'VIDEO_ID_3',
//     },
//     {
//       category: 'Shorts',
//       title: 'Video 4',
//       id: 'VIDEO_ID_4',
//     },
//     // Add more videos and categories as needed
//   ];

//   // Filter videos based on selected category
//   const filteredVideos = selectedCategory
//     ? videos.filter((video) => video.category === selectedCategory)
//     : videos;

//   // Sort the filtered videos based on their titles
//   filteredVideos.sort((a, b) => a.title.localeCompare(b.title));

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: selectedCategory === 'Shorts' ? 1 : 4, // Show 1 video for 'Shorts'
//     slidesToScroll: 1,
//   };

//   return (
//     <Container id="Videocat">
//       <ButtonContainer>
//         <StyledButton onClick={toggleShowMore}>
//           {showMore ? 'Hide' : 'Show More'}
//         </StyledButton>
//         {showMore && (
//           <div>
//             {categories.map((category, index) => (
//               <StyledButton
//                 key={index}
//                 onClick={() => setSelectedCategory(category === 'All Videos' ? null : category)}
//               >
//                 {category}
//               </StyledButton>
//             ))}
//             <VideoSlider {...sliderSettings}>
//               {filteredVideos.map((video, index) => (
//                 <VideoSlide key={index}>
//                   <iframe
//                     width="250"
//                     height="300"
//                     src={`https://www.youtube.com/embed/${video.id}`}
//                     title={video.title}
//                     allowFullScreen
//                   ></iframe>
//                 </VideoSlide>
//               ))}
//             </VideoSlider>
//           </div>
//         )}
//       </ButtonContainer>
//     </Container>
//   );
// };

// export default Videocat;


import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin: 0;
`;

const StyledButton = styled.button`
  background-color: #01be96;
  border-radius:30px;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
`;

const VideoSlider = styled(Slider)`
  width: 100%;

  .slick-prev,
  .slick-next {
    font-size: 0rem;
    line-height: 1;
    color: #007bff;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }

  @media (max-width: 840px) {
    iframe{
      width:80%;
    }
    .slick-prev {
    left: -10px;
  },
  .slick-next {
    right: 0px;
  }
  }
`;


const VideoSlide = styled.div`
  padding: 0 10px;
`;

const Videocat = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setSelectedCategory(null);
    }
  };

  const categories = [
    'All Videos',
    'Gaming Videos',
    'Talking Head Videos',
    'Documentary Style Videos',
    'Shorts',
  ];

  const videos = [
    {
      category: 'Gaming Videos',
      title: 'Welcome to FreelanceX',
      id: '4N876O8jFC8',
    },
    {
      category: 'Talking Head Videos',
      title: 'College Girl Must Haves: Ultimate Essentials For College Students!',
      id: 'mZTs4olBdf4',
    },
    {
      category: 'Documentary Style Videos',
      title: 'Valorising Victimhood Hurts Us All',
      id: 'bMvhCELh4Yk',
    },
    {
      category: 'Shorts',
      title: 'The Brittany Higgins Scandal + the truth about assault',
      id: 'V58Eewl9f-H5NxGg',
    },
    {
      category: 'Shorts',
      title: 'Trans activists have no right to pervert the English language',
      id: 'eZ6kcNDWT90',
    },
  ];

  // Define media queries for different screen sizes
  const mobileMediaQuery = '(max-width: 840px)';
  const largeScreenMediaQuery = '(min-width: 841px)';

  // Use media queries to adjust the number of slides to show
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 50,
    slidesToScroll: 1,
  };

  // Define the filteredVideos variable based on the selected category
  const filteredVideos =
    selectedCategory && selectedCategory !== 'All Videos'
      ? videos.filter((video) => video.category === selectedCategory)
      : videos;

  if (window.matchMedia(mobileMediaQuery).matches) {
    sliderSettings.slidesToShow = 1; // Show one video on mobile
  } else if (window.matchMedia(largeScreenMediaQuery).matches) {
    sliderSettings.slidesToShow = 4; // Show 4 videos on larger screens
  }

  return (
    <Container id="Videocat">
      <ButtonContainer>
        <StyledButton onClick={toggleShowMore}>
          {showMore ? 'Hide' : 'Show More'}
        </StyledButton>
        {showMore && (
          <div>
            {categories.map((category, index) => (
              <StyledButton
                key={index}
                onClick={() => setSelectedCategory(category === 'All Videos' ? null : category)}
              >
                {category}
              </StyledButton>
            ))}
            {filteredVideos.length > 0 && (
              <VideoSlider {...sliderSettings}>
                {filteredVideos.map((video, index) => (
                  <VideoSlide key={index}>
                    <iframe
                      // width="100%"
                      width={selectedCategory === 'Shorts' ? '90%' : '100%'}
                      height={selectedCategory === 'Shorts' ? '350' : '200'}
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allowFullScreen
                    ></iframe>
                  </VideoSlide>
                ))}
              </VideoSlider>
            )}
          </div>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Videocat;


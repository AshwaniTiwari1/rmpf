import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img: "https://i.ytimg.com/vi/4N876O8jFC8/sddefault.jpg",
    disc: "Welcome to FreelanceX",
    Url: "https://www.youtube.com/watch?v=4N876O8jFC8"
  },
  {
    img: "https://i.ytimg.com/vi/mZTs4olBdf4/maxresdefault.jpg",
    disc: "College Girl Must Haves: Ultimate Essentials For College Students!",
    Url: "https://youtu.be/mZTs4olBdf4"
  },
  {
    img: "https://i.ytimg.com/vi/bMvhCELh4Yk/maxresdefault.jpg",
    disc: "Valorising Victimhood Hurts Us All",
    Url: "https://www.youtube.com/watch?v=bs5w_ckXd3Q"
  },
  {
    img: "https://i.ytimg.com/vi/bs5w_ckXd3Q/maxresdefault.jpg",
    disc: "Valorising Victimhood Hurts Us All",
    Url: "https://www.youtube.com/watch?v=bs5w_ckXd3Q"
  },
  {
    img: "https://i.ytimg.com/vi/uZhPP-S29fk/maxresdefault.jpg",
    disc: "You'll FORGET CHATGPT EXISTS After You've Seen These AI Tools!",
    Url: "https://youtu.be/uZhPP-S29fk?si=CymQkvYDO2Nq1U8I"
  },
  {
    img: "https://i.ytimg.com/vi/-aTelPHLiqw/maxresdefault.jpg",
    disc: "Outdated Instagram Tips You Need to STOP in 2023 - These can kill growth",
    Url: "https://www.youtube.com/watch?v=-aTelPHLiqw"
  },
  {
    img: "https://i.ytimg.com/vi/by-AI1pSB3E/maxresdefault.jpg",
    disc: "Y10 AI Tools That Will Make You A Trading GOD",
    Url: "https://www.youtube.com/watch?v=by-AI1pSB3E"
  }, 

  {
    img: "https://i.ytimg.com/vi/oLY5pl1uric/maxresdefault.jpg",
    disc: "10 AI Tools That Will Make You A Trading GOD",
    Url: "https://www.youtube.com/watch?v=oLY5pl1uric"
  },

  {
    img: "https://i.ytimg.com/vi/D_u8zfMr36c/maxresdefault.jpg",
    disc: "Is Quantum Teleportation Possible? Here's the Science Behind It",
    Url: "https://www.youtube.com/watch?v=D_u8zfMr36c"
  }




];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
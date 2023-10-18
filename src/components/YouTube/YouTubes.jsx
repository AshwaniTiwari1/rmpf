import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import YouTubeSlider from './YouTubeSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let youtube = [
    {
        name: "AI Scholar",
        position: "16.1K+ subscribers",
        img_url: "https://yt3.ggpht.com/6ziMIroFCAXo1u9OF4cDNtJeNDA2jW3XaoEz-Un83Sptwtcvqdiqc3PwruoHUThXxAzHeWS_sQ=s800-c-k-c0x00ffffff-no-rj",
        stars: 1,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },
    {
        name: "howtoai",
        position: "11.5K subscribers",
        img_url: "https://yt3.ggpht.com/1mfx-QpoLK1QpQ-z3zEiU4H_mvziupmQSWLXkBwE3v6NGeYbZndmnnN6Erl_qM5IH_qpr3cllAQ=s800-c-k-c0x00ffffff-no-rj",
        stars: 2,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },
    {
        name: "Discover AZ Lifestyles",
        position: "41+ subscribers",
        img_url: "https://yt3.ggpht.com/wXdA6nV1OraeCYf4X4FovB1g3de9yDI42BsTRMafNX8iHc2ZWGpVl6wTBY6AXfi4_8bGmR9kAw=s800-c-k-c0x00ffffff-no-rj",
        stars: 3,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },
    {
        name: "The induce",
        position: "3.26K+ subscribers",
        img_url: "https://yt3.ggpht.com/Yx9xEJCf-vb9p2k5pGTxUPByPBzeUHzfHPkMXNlOj43YIQDoa362jCojy5-Pc8iMNmB6huFb=s800-c-k-c0x00ffffff-no-rj",
        stars: 4,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },
    {
        name: "Quillette",
        position: "12.1K+ subscribers",
        img_url: "https://yt3.ggpht.com/nSlsUBSZG9O-nL8vzRwOrUAAqU5PyW79aEibGaCdz-lpSyLRGFNBcoV17dIn6JLV3Di2YDvxKw=s800-c-k-c0x00ffffff-no-rj",
        stars: 5,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },
    {
        name: "Ravi Parihar",
        position: "702+ subscribers",
        img_url: "https://yt3.ggpht.com/s8TvMAbtWodXcghZx_gDtSIKT7hkr-JFpPJAULgqxZJ8g0KosPkShHz_VToO6WxtT9DHJ8Zm=s800-c-k-c0x00ffffff-no-rj",
        stars: 6,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },


    {
        name: "Docu-Sodes",
        position: "2.86K1+ subscribers",
        img_url: "https://yt3.ggpht.com/qpU8uIHvbvAAs3j7JuSRgQOsg00vGS5X1Ip3Pl4eKmVl4C6HTdvcO7A1kLMtC7UsmL_rwC_X=s800-c-k-c0x00ffffff-no-rj",
        stars: 7,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },

    {
        name: "Renee Tucker, DVM",
        position: "181+ subscribers",
        img_url: "https://yt3.ggpht.com/ytc/APkrFKY6jrTWkobJY0ybntc3WN9Y6PmxqjCEvEyxwcoUOQ=s800-c-k-c0x00ffffff-no-rj",
        stars: 8,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },


    
    {
        name: "The Mystica Land",
        position: "8.39M+ subscribers",
        img_url: "https://yt3.ggpht.com/27kg5LkYgct9za7XWxWqhcXFi2dh_PMZMZxX4xLEYyvdZ07TngNpEhhmXXcOFo6yS_pOhxiUcQ=s800-c-k-c0x00ffffff-no-rj",
        stars: 9,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },

    
    {
        name: "Recro",
        position: "2.28K+ subscribers",
        img_url: "https://yt3.ggpht.com/UAxAhXD80-dncUCcJt1UmvtvByhZv7245wc2W8me-V5vjs6Itbmlbo30IfXf6KLZvlQ4G5gZ4A=s800-c-k-c0x00ffffff-no-rj",
        stars: 10,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
        videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    },


    
    // {
    //     name: "Renee Tucker, DVM",
    //     position: "181+ subscribers",
    //     img_url: "https://yt3.ggpht.com/ytc/APkrFKY6jrTWkobJY0ybntc3WN9Y6PmxqjCEvEyxwcoUOQ=s800-c-k-c0x00ffffff-no-rj",
    //     stars: 11,
    //     disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    //     Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
    //     videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    // },

    
]
var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const YouTube = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = youtube.map((item, i) => (
        <YouTubeSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">testimonials</span>
            <h1>My clients </h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default YouTube

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`
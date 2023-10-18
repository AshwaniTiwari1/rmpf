import React from 'react';
import styled from 'styled-components';
import { FaYoutube } from "react-icons/fa";

const YouTubeSlider = (props) => {
    const { name, position, img_url, videoUrl } = props.item;

    const openVideoInNewTab = () => {
        window.open(videoUrl, '_blank');
    };

    return (
        <Container onClick={openVideoInNewTab}>
            <ImageContainer>
                <Image src={img_url} alt={name} />
            </ImageContainer>
            <InfoContainer>
                <Row>{name}</Row>
                <Row>
                    <YoutubeSign /> {position}
                </Row>
            </InfoContainer>
        </Container>
    );
}

export default YouTubeSlider;

const Container = styled.div`
    ${'' /* background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%); */}
    padding: 1.5rem 1rem;
    margin: 0 1rem;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: background 0.2s;

    &:hover {
        background: linear-gradient(159deg, rgb(43, 43, 53) 0%, rgb(45, 45, 58) 100%);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add a slight box-shadow */
    }
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.2s; /* Add a slight image transform effect */

    ${Container}:hover & {
        transform: scale(1.05); /* Increase image size slightly on hover */
    }
`

const InfoContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Row = styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
    color: white;
    display: flex;
    align-items: center;
`

const YoutubeSign = styled(FaYoutube)`
    color: #ff0000;
    margin-right: 0.3rem;
`


// import React from 'react';
// import styled from 'styled-components';

// const YouTubeSlider = (props) => {
//     const { name, position, img_url, videoUrl } = props.item;

//     const openVideoInNewTab = () => {
//         window.open(videoUrl, '_blank');
//     };

//     return (
//         <Container onClick={openVideoInNewTab}>
//             <Image src={img_url} alt={name} />
//             <Row>{name}</Row>
//             <Row>{position}</Row>
//             {/* <Row>{disc}</Row> */}
//         </Container>
//     );
// }

// export default YouTubeSlider;

// const Container = styled.div`
//     background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
//     padding: 1.5rem 1rem;
//     margin: 0 1rem;
//     border-radius: 12px;
//     cursor: pointer;
//     transition: background 0.2s;

//     &:hover {
//         background: linear-gradient(159deg, rgb(43, 43, 53) 0%, rgb(45, 45, 58) 100%);
//     }
// `

// const Image = styled.img`
//     width: 4rem;
//     height: 4rem;
//     border-radius: 50px;
//     object-fit: cover;
//     align:center;
// `

// const Row = styled.div`
//     font-size: 0.8rem;
//     margin-bottom: 0.5rem;
//     color: white;
// `



// import React from 'react';
// import styled from 'styled-components';
// // import { IoIosQuote } from "react-icons/io";
// // import { AiOutlineStar } from "react-icons/ai";

// const YouTubeSlider = (props) => {
//     const { name, position, img_url, disc, videoUrl } = props.item;

//     const openVideoInNewTab = () => {
//         window.open(videoUrl, '_blank');
//     };

//     return (
//         <Container onClick={openVideoInNewTab}>
//             <Image src={img_url} alt={name} />
//             <Row>{name}</Row>
//             <Row>{position}</Row>
//             <Row>{disc}</Row>
//         </Container>
//     );
// }

// export default YouTubeSlider;

// const Container = styled.div`
//     background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
//     padding: 1.5rem 1rem;
//     margin: 0 1rem;
//     border-radius: 12px;
//     cursor: pointer;
//     transition: background 0.2s;

//     &:hover {
//         background: linear-gradient(159deg, rgb(43, 43, 53) 0%, rgb(45, 45, 58) 100%);
//     }
// `

// const Image = styled.img`
//     width: 4rem;
//     height: 4rem;
//     border-radius: 50px;
//     object-fit: cover;
// `

// const Row = styled.div`
//     font-size: 0.8rem;
//     margin-bottom: 0.5rem;
//     color: white;
// `



// import React from 'react';
// import styled from 'styled-components';
// // import { IoIosQuote } from "react-icons/io";
// // import { AiOutlineStar } from "react-icons/ai";

// const YouTubeSlider = (props) => {
//     const { name, position, img_url, disc, videoUrl } = props.item;

//     const openVideoInNewTab = () => {
//         window.open(videoUrl, '_blank');
//     };

//     return (
//         <Container>
//             <Header>
//                 {/* <span className='quote'><IoIosQuote /></span> */}
//                 {/* <div>
//                     {Array(stars).fill().map((_, i) => (
//                         <span className='star' key={i}>
//                             <AiOutlineStar />
//                         </span>
//                     ))}
//                 </div> */}
//             </Header>
//             <Content>
//                 <img src={img_url} alt={name} />
//                 <div className="details">
//                     <h1>{name}</h1>
//                     <p>{position}</p>
//                 </div>
//             </Content>
//             <Description>{disc}</Description>
//             <ButtonContainer>
//                 <Button onClick={openVideoInNewTab}>Watch Video</Button>
//             </ButtonContainer>
//         </Container>
//     );
// }

// export default YouTubeSlider;

// const Container = styled.div`
//     background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
//     padding: 1.5rem 1rem;
//     margin: 0 1rem;
//     border-radius: 12px;
//     overflow: hidden;
// `

// const Header = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .quote {
//         font-size: 3rem;
//         color: #01be96;
//         opacity: 0.7;
//     }

//     .star {
//         color: #ffcd3c;
//         font-size: 1.3rem;
//     }
// `

// const Content = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     margin-bottom: 1rem;
//     img {
//         width: 4rem;
//         height: 4rem;
//         border-radius: 50px;
//         object-fit: cover;
//     }

//     h1 {
//         font-size: 1.2rem;
//         font-weight: 700;
//         @media (max-width: 580px) {
//             font-size: 1rem;
//         }
//         @media (max-width: 538px) {
//             font-size: 0.9rem;
//         }
//     }

//     p {
//         font-size: 0.8rem;
//         color: rgba(255, 255, 255, 0.500);
//         @media (max-width: 538px) {
//             font-size: 0.6rem;
//         }
//     }
// `

// const Description = styled.p`
//     font-size: 0.8rem;
//     margin-bottom: 1rem;
// `

// const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: flex-end;
// `

// const Button = styled.button`
//     background-color: transparent;
//     border: none;
//     color: #01be96;
//     cursor: pointer;
//     font-size: 0.8rem;
//     text-decoration: underline;

//     &:hover {
//         text-decoration: none;
//     }
// `


// import React from 'react';
// import styled from 'styled-components';
// import { IoIosQuote } from "react-icons/io";
// import { AiOutlineStar } from "react-icons/ai";

// const YouTubeSlider = (props) => {
//     const { name, position, img_url, stars, disc, videoUrl } = props.item;

//     const openVideoInNewTab = () => {
//         window.open(videoUrl, '_blank');
//     };

//     return (
//         <Container>
//             <Header>
//                 <span className='quote'><IoIosQuote /></span>
//                 <div>
//                     {Array(stars).fill().map((_, i) => (
//                         <span className='star' key={i}>
//                             <AiOutlineStar />
//                         </span>
//                     ))}
//                 </div>
//             </Header>
//             <Body>
//                 {disc}
//             </Body>
//             <Footer>
//                 <img src={img_url} alt={name} />
//                 <div className="details">
//                     <h1>{name}</h1>
//                     <p>{position}</p>
//                     <Button onClick={openVideoInNewTab}>Watch Video</Button>
//                 </div>
//             </Footer>
//         </Container>
//     );
// }

// export default YouTubeSlider;

// const Container = styled.div`
//     background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
//     padding: 1.5rem 1rem;
//     margin: 0 1rem;
// `

// const Header = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .quote {
//         font-size: 3rem;
//         color: #01be96;
//         opacity: 0.7;
//     }

//     .star {
//         color: #ffcd3c;
//         font-size: 1.3rem;
//     }
// `

// const Body = styled.p`
//     font-size: 0.8rem;
//     margin-bottom: 1.5rem;
// `

// const Footer = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     img {
//         width: 4rem;
//         height: 4rem;
//         border-radius: 50px;
//         object-fit: cover;
//     }

//     h1 {
//         font-size: 1.2rem;
//         font-weight: 700;
//         @media (max-width: 580px) {
//             font-size: 1rem;
//         }
//         @media (max-width: 538px) {
//             font-size: 0.9rem;
//         }
//     }

//     p {
//         font-size: 0.8rem;
//         color: rgba(255, 255, 255, 0.500);
//         @media (max-width: 538px) {
//             font-size: 0.6rem;
//         }
//     }
// `

// const Button = styled.button`
//     background-color: transparent;
//     border: none;
//     color: #01be96;
//     cursor: pointer;
//     font-size: 0.8rem;
//     text-decoration: underline;

//     &:hover {
//         text-decoration: none;
//     }
// `

// import React from 'react'
// import styled from 'styled-components'
// import {IoIosQuote} from "react-icons/io";
// import {AiOutlineStar} from "react-icons/ai";

// const YouTubeSlider = (props) => {
//     const {name, position, img_url, stars, disc,videoUrl} = props.item;
//   return (
//     <Container>
//         <Header>
//             <span className='quote'><IoIosQuote/></span>
//             <div>
//                 {Array(stars).fill().map((_, i) => (
//                     <span className='star' key={i}>
//                         <AiOutlineStar/>
//                     </span>
//                 ))}
//             </div>
//         </Header>
//         <Body>
//             {disc}
//         </Body>
//         <Footer>
//             <img src={img_url} alt={name} />
//             <div className="details">
//                 <h1>{name}</h1>
//                 <p>{position}</p>
//                 <p>{videoUrl}</p>
//                 {/* <Button onClick={videoUrl}>Watch Video</Button> */}
//             </div>
            
//         </Footer>
//     </Container>
//   )
// }

// export default YouTubeSlider

// const Container = styled.div`
//     background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
//     padding: 1.5rem 1rem;
//     margin: 0 1rem;
// `

// const Header = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .quote{
//         font-size: 3rem;
//         color: #01be96;
//         opacity: 0.7;
//     }

//     .star{
//         color: #ffcd3c;
//         font-size: 1.3rem;
//     }
// `
// const Body = styled.p`
//     font-size: 0.8rem;
//     margin-bottom: 1.5rem;
// `
// const Footer = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     img{
//         width: 4rem;
//         height: 4rem;
//         border-radius: 50px;
//         object-fit: cover;
//     }

//     h1{
//         font-size: 1.2rem;
//         font-weight: 700;
//         @media(max-width: 580px){
//             font-size: 1rem;
//         }
//         @media(max-width: 538px){
//             font-size: 0.9rem;
//         }
//     }

//     p{
//         font-size: 0.8rem;
//         color: rgba(255,255,255,0.500);
//         @media(max-width: 538px){
//             font-size: 0.6rem;
//         }
//     }
// `
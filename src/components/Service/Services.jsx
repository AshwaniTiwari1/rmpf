import React from "react";
import { PiVideo } from "react-icons/pi";
// import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
  
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <div className="Car">
      <Cards>
        <Slide direction="left">
          <Card
            Icon={PiVideo}
            title={"Video Editing"}
            disc={`Turn your videos into works of art with My editing skills. From  special effects, we bring your vision to life.`}
          />
        </Slide>
        {/* <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"graphic designer"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide> */}
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Thumbnail Design"}
            disc={`Captivate your audience from the first glance. creates eye-catching thumbnails that boost content visibility and engagement`}
          />
        </Slide>
      </Cards>
      </div>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

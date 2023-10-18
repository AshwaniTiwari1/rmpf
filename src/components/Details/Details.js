import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';

const Details = () => {
  return (
    <Container id="Detail">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>About Us</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>🌟 My Expertise:</h1>
          </Slide>
          <Slide direction="left">
            From dynamic YouTube talking head videos to compelling Cashcow content, polished corporate visuals to engaging podcast and real estate videos, I've polished my skills while editing thousands of projects.
          </Slide>
        </div>
        <div className="address">
          <Slide direction="left">
            <h1>🤝 Collaborative Success:</h1>
          </Slide>
          <Slide direction="left">
            I take pride in my collaborations with prominent YouTube channels, playing a pivotal role in enhancing their success through my editing prowess.
          </Slide>
        </div>
        <div className="address">
          <Slide direction="left">
            <h1>🔍 Explore My Portfolio:</h1>
          </Slide>
          <Slide direction="left">
            Step into my portfolio and witness firsthand how I breathe life into stories through the magic of video editing.
          </Slide>
          <Slide direction="left">
            Let's bring your vision to life through the power of visual storytelling. Get in touch and let's craft something amazing together.
          </Slide>
        </div>
      </Profile>
      {/* Right side video frame placeholder */}
      <VideoFramePlaceholder>
        {/* Replace with your video component or embed code */}
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/4N876O8jFC8?si=csOeCxlTkBqkua3C"
          title="Video Frame"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </VideoFramePlaceholder>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    text-align: center;
  }
`;

const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 100%;
      padding-top: 0.5rem;
    }
  }
`;

const VideoFramePlaceholder = styled.div`
  /* Add styling for the video frame placeholder here */
  flex: 1;
`;

// Add your styling for the video frame as needed

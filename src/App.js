import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
// import Services from "./components/Service/Services";
import Details from "./components/Details/Details";
import YouTubes from "./components/YouTube/YouTubes";
import Videocat from "./components/VideoCat/Videocat";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
    
      <YouTubes />
    
      <LightColor>
      {/* <Services /> */}
     
      {/* <MidColor> */}
        <Projects />
        <Videocat />
      </LightColor>
        {/* </MidColor> */}
      <Clients />   
      <MidColor>
      <Details />
       </MidColor>

      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background:linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

const MidColor = styled.div`
${'' /* background: linear-gradient(159deg, rgb(40, 40, 50) 0%, rgb(38, 38, 48) 100%); */}

background: linear-gradient(159deg, rgb(35, 35, 45) 0%, rgb(33, 33, 43) 100%);



`;


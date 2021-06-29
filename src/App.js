import styled, { createGlobalStyle } from "styled-components";
import Content from "./components/Main";
import hero from "./images/hero-desktop.jpg";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 5.5fr 4.5fr;
  height: 100vh;
`;

const Image = styled.div`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <Main>
      <GlobalStyle />
      <Content />
      <Image></Image>
    </Main>
  );
}

export default App;

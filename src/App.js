import { styled } from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Row from "./components/Row";
import request from "./api/request";

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" id="TR" fetchUrl = {request.fetchTopRated}/>
      <Row title="Action Moives" id="AM" fetchUrl= {request.fetchActionMovies}/>
      <Row title="Comedy Movies" id="CM" fetchUrl = {request.fetchComedyMovies}/>
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;

  /* Nav height이 70이라 그거보다 아래로 */
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

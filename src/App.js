import './App.css';
import Row from './Row';
import requests from './Request';
import Banner from './Banner'
import Nav from './Nav';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Top rated" fetchUrl={requests.fetchTopRated} /> */}
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Popular movies" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App

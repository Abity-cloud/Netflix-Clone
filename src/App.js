// import logo from './logo.svg';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Row 
    title="NETFLIX ORIGINALS"
    fetchUrl={requests.fetchNetflixOrginals} 
    isLargeRow 
    />
    <Row title="Trending Now"fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated"fetchUrl={requests.fetchTopRatedMovies} />
    <Row title="Action Movies"fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies} />
    <Row
     title="Documentaries Movies"
     fetchUrl={requests.fetchDocumentaries} 
     />
<Row title="Mystery"fetchUrl={requests.fetchMystery} />
      <Row title="SciFi"fetchUrl={requests.fetchSciFi} />
      <Row title="Western"fetchUrl={requests.fetchWestern} />
      <Row title="Animation"fetchUrl={requests.fetchAnimation} />
      <Row title="Netflix TV"fetchUrl={requests.fetchTV} />
  </div>

  );
}

export default App;



// https://api.themoviedb.org/3/movie/550?api_key=6c4f27946e4212543397e092bb297700
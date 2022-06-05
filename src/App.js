import './App.scss';
import Requests from './datas/Requests';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={Requests.fetchNetflixOriginals}
        isPoster={true}
      />
      <Row title='Trend' fetchUrl={Requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={Requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={Requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={Requests.fetchComedyMovies} />
      <Row title='Romance Movies' fetchUrl={Requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={Requests.fetchDocumentaries} />
      {/*video*/}
      {/* quick view */}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;

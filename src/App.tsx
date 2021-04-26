import './App.css';
import React from 'react';
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from './request';

function App() {
    return (
        <div className="App">
            <Banner></Banner>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.feachNetflixOriginals}
                isLargeRow
            />
            <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
            <Row title="Action Movies" fetchUrl={requests.feactComedyMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.feactComedyMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.feactRomanceMovies}
            />
            <Row
                title="DOcumentaries"
                fetchUrl={requests.feactDocumentMovies}
            />
        </div>
    );
}

export default App;

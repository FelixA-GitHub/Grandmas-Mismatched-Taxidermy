
import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';
// import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [pages] = useState([
    {
      name: 'home'
    },
    { name: 'listing' },
    { name: 'login'},
    { name: 'signup'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <ApolloProvider client={client}>
      {/* <Router>
        <Routes>
          <Route path="/"
            element={<Home />} />
        </Routes>
      </Router> */}
      <Header>

        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>

      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;






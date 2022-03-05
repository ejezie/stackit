import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Feed from './containers/Feed';
import Question from './containers/Question';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    background: #161616;
    color: white;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Feed/>}/>
              <Route path="/questions" element={<Feed/>}/>
              <Route path="/questions/:id" element={<Question/>}/>
            </Routes>
          </BrowserRouter>
        </AppWrapper>
      </>
    );
  }
}

export default App;
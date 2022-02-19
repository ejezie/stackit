import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
// import Feed from './Feed';

const GlobalStyle = createGlobalStyle`

  *{
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Raleway', sans-serif;
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
          {/* <Feed /> */}
           <h1>hello marry madlin</h1>
        </AppWrapper>
      </>
    );
  }
}

export default App;
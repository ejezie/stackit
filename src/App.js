import styled,{createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  background-color: red;
}`;


function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>Hello</h1>
    </>
  );
}

export default App;

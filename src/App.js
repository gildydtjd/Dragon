import "./App.css";
import styled from "styled-components";
const Divpage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.color};
`;

function App() {
  return (
    <div className="App">
      <Divpage color="#bdc3c7"></Divpage>
      <Divpage color="green"></Divpage>
      <Divpage color="red"></Divpage>
    </div>
  );
}

export default App;

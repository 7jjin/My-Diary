import "./App.css";
import MyHeader from "./MyHeader";
import Myfooter from "./Myfooter";
import React from "react";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    C: 3,
    d: 4,
  };
  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;

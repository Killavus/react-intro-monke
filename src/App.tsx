import React, { PropsWithChildren, useState } from "react";
import "./monke.css";
import Container from "./Container";
import { MONKE_FACES } from "./MonkeApp/contants";
import MonkeApp from "./MonkeApp/MonkeApp";
import TimerApp from "./TimerApp/TimerApp";

function App() {
  return (
    <Container>
      {/* <MonkeApp monkeCollection={MONKE_FACES} /> */}
      <TimerApp />
    </Container>
  );
}

export default App;

import { useState } from "react";
import { LearnComponent } from "./components/LearnComponent";
import LearnJsx from "./components/LearnJsx";
import LearnProps from "./components/LearnProps";
import LearnEvent from "./components/LearnEvent";
import LearnLiftingState from "./components/LearnLiftingState";
import LearnState from "./components/LearnState";
import CounterApp from "./components/CounterApp";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";
import LearnUseCallback from "./components/LearnUseCallback";
import LearnCustomHook from "./LearnCustomHook";
import LearnConditionalRendering from "./components/LearnConditionalRendering";
import LearnMap from "./components/LearnMap";
import LearnInlineCss from "./components/LearnInlineCss";
import LearnExternalCSS1 from "./components/LearnExternalCSS1";
import LearnExternalCSS2 from "./components/LearnExternalCSS2";
import LearnForm from "./components/LearnForm";

function App() {
  // const details = {
  //   name: "lobsang",
  //   age: "24",
  //   gender: "male",
  //   city: "bangalore",
  // };
  const getData = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* <h1>Hello React</h1> */}
      {/* <LearnComponent /> */}
      {/* <LearnJsx /> */}
      {/* <LearnProps {...details} /> */}
      {/* <LearnEvent /> */}
      {/* <LearnLiftingState myClick={getData} /> */}
      {/* <LearnState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <LearnUseCallback /> */}
      {/* <LearnCustomHook /> */}
      {/* <LearnConditionalRendering /> */}
      {/* <LearnMap /> */}
      {/* <LearnInlineCss /> */}
      {/* <LearnExternalCSS1 /> */}
      {/* <LearnExternalCSS2 /> */}
      <LearnForm />
    </>
  );
}

export default App;

import { useState, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const VueService = lazy(() => import("./web-components/vue-service"));
const ReactService = lazy(() => import("./web-components/react-service"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div id="vue-service" className="vue-service">
          <VueService></VueService>
        </div>
        <div id="react-service" className="react-service">
          <ReactService></ReactService>
        </div>
      </div>
    </>
  );
}

export default App;

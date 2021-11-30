import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  let [data, setdata] = useState();
  fetch("https://git.heroku.com/gentle-hamlet-63750.git")
    .then((op) => op.json())
    .then((op) => setdata(op))
    .catch((err) => console.log(err));
  return (
    <div className="App">
      <h1>Mak- {data}</h1>
    </div>
  );
}

export default App;

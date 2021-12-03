import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import editt from "./edit";
function App() {
  let navigate = useNavigate();
  let [data, setdata] = useState([]);
  let [chng, onchn] = useState();
  useEffect(async () => {
    console.log("l");
    let dt = await fetch("https://gentle-hamlet-63750.herokuapp.com/");
    let st = await dt.json();
    setdata(st);
  }, [chng]);
  const dlt = (e) => {
    fetch(`https://gentle-hamlet-63750.herokuapp.com/${e}`, {
      method: "DELETE",
    })
      .then((op) => {
        console.log("Deleted");
        onchn(op);
        console.log("changed");
      })
      .catch((err) => console.log("Deleting error " + err));
  };
  return (
    <div className="App">
      <div className="table_div">
        <h1>Mak</h1>
        <button onClick={() => navigate("/add")}>Add</button>
        <table className="table">
          <thead id="thead">
            <tr id="tr">
              <th>sr no.</th>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {data.map((op, index) => {
              return (
                <tr key={index} id="tr">
                  <td>{index + 1}</td>
                  <td>{op.task}</td>
                  <td>
                    <button
                      onClick={() => navigate({ pathname: `/edit/${op._id}` })}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dlt(op._id)}>DLT</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="update_div"></div>
    </div>
  );
}

export default App;

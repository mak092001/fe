import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Add = () => {
  let id = useParams();
  let [data, setdata] = useState();
  let history = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    fetch(`https://gentle-hamlet-63750.herokuapp.com/${id.id}`, {
      method: "PUT",
      body: JSON.stringify({ saveastask: data }),
      headers: { "Content-type": "application/json" },
    })
      .then((op) => history("/", { replace: true }))
      .catch((err) => console.log(err + "aya"));
  };
  const onchng = (e) => {
    setdata(e.target.value);
  };
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input type="text" name="saveastask" onChange={onchng}></input>
        <button>Click</button>
      </form>
    </div>
  );
};
export default Add;

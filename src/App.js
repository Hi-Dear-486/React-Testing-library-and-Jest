import { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState("");
  const [data, setData] = useState("");
  return (
    <>
      <div className="App">
        <h3>First React test Case</h3>
        <label htmlFor="userId"> user Name</label>
        <input
          type="text"
          placeholder="Enter userName"
          name="username"
          id="userId"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <label htmlFor="input1">age</label>
        <input type="text" id="input1" />
      </div>
      <button onClick={() => setData("update data")}>update</button>
      <h2>{data}</h2>
      <h2>snap shot testing</h2>

      <button>click 1</button>
      <button>click 2</button>

      <span role="dummy">this is non semantic tag</span>
    </>
  );
};

export default App;

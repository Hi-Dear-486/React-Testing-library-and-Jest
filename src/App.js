import { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState("");
  const [data, setData] = useState("");
  return (
    <>
      <div className="App">
        <h3>First React test Case</h3>
        <input
          type="text"
          placeholder="Enter userName"
          name="username"
          id="userId"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
      </div>
      <button onClick={() => setData("update data")}>update</button>
      <h2>{data}</h2>
      <h2>snap shot testing</h2>
    </>
  );
};

export default App;

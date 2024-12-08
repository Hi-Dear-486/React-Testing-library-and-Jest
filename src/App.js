import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState("");
  return (
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
  );
}

export default App;

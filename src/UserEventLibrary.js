import React, { useState } from "react";

const UserEventLibrary = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <button onClick={() => setData("Click Event with User Event Library")}>
        click me
      </button>

      <h2>{data}</h2>
    </div>
  );
};

export default UserEventLibrary;

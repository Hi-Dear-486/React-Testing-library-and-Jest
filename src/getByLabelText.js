import React from "react";

const Inputandcheckbox = () => {
  return (
    <div>
      <label htmlFor="username">user Name</label>
      <input type="text" id="username" />

      <label htmlFor="gender">gender</label>
      <input type="checkbox" id="gender" defaultChecked={true} />
    </div>
  );
};

export default Inputandcheckbox;

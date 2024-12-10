import React from "react";
import TestCompProps from "./TestCompProps";

const TestcomponentProps = () => {
  const name = "hello";
  const age = 23;
  return (
    <div>
      <TestCompProps name={name} age={age} />
    </div>
  );
};

export default TestcomponentProps;

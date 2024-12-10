import { render, screen } from "@testing-library/react";
import TestcomponentProps from "../TestcomponentProps";

test("TestCompProps", () => {
  render(<TestcomponentProps />);

  const prop = screen.getByText("hello");
  const age = screen.getByText(23);
  expect(prop).toBeInTheDocument();
  expect(age).toBeInTheDocument();
});

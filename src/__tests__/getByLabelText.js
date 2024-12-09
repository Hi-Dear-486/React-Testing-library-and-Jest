import { render, screen } from "@testing-library/react";
import Inputandcheckbox from "../getByLabelText";

test("getByLabelText", () => {
  render(<Inputandcheckbox />);
  const input = screen.getByLabelText("user Name");
  const checkbox = screen.getByLabelText("gender");
  expect(input).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});

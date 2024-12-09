import { render, screen } from "@testing-library/react";
import GetByDisplayValue from "../GetByDisplayValue";

test("getByDisplayValue", () => {
  render(<GetByDisplayValue />);

  const inputdefaultvalue = screen.getByDisplayValue("user name");
  expect(inputdefaultvalue).toBeInTheDocument();
});

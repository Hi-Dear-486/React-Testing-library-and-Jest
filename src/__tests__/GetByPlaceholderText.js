import { render, screen } from "@testing-library/react";
import GetByPlaceholderText from "../GetByPlaceholderText";

test("GetByPlaceholderText", () => {
  render(<GetByPlaceholderText />);
  const input = screen.getByPlaceholderText("user name");
  expect(input).toBeInTheDocument();
});

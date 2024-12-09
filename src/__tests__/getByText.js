import { render, screen } from "@testing-library/react";
import GetByText from "../getByText";

test("getByText", () => {
  render(<GetByText />);
  const btn = screen.getByText("login");
  expect(btn).toBeInTheDocument();
});

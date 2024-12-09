import { render, screen } from "@testing-library/react";
import Multipleelements from "../getAllByRole";
test("getAllByRole", () => {
  render(<Multipleelements />);
  const btn = screen.getAllByRole("button");
  const options = screen.getAllByRole("option");
  btn.map((item) => expect(item).toBeInTheDocument());
  options.map((item) => expect(item).toBeInTheDocument());
});

import { render, screen } from "@testing-library/react";
import GetAllByLabelText from "../getAllByLabelText";

test("getAllByLabelText", () => {
  render(<GetAllByLabelText />);
  const input = screen.getAllByLabelText("user name");
  input.map((item) => expect(item).toBeInTheDocument());
});

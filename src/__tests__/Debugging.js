import { render, screen } from "@testing-library/react";
import Debugging from "../Debugging";

test("Debugging", () => {
  const { debug } = render(<Debugging />);
  const heading = screen.getByText("Heading 2");
  expect(heading).toBeInTheDocument();
  // debug();
});

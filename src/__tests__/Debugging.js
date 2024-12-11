import { logRoles, render, screen } from "@testing-library/react";
import Debugging from "../Debugging";

test("Debugging", () => {
  const { debug, container } = render(<Debugging />);
  const heading = screen.getByText("Heading 2");
  expect(heading).toBeInTheDocument();

  //   debug();
  //   logRoles(container);
});

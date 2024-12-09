import { render, screen } from "@testing-library/react";
import GetByTestId from "../getByTestId";

test("getByTestId", () => {
  render(<GetByTestId />);
  const divId = screen.getByTestId("testid");
  expect(divId).toBeInTheDocument();
});

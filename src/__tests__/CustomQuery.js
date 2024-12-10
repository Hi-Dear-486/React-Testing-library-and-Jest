import { render } from "@testing-library/react";
import CustomQuery from "../CustomQuery";

test("CustomQuery", () => {
  render(<CustomQuery />);
  const element = document.querySelector("#testelem");
  expect(element).toBeInTheDocument();
});

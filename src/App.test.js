import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/First React test case/i);
  const title = screen.getByTitle(/nature/i);
  expect(linkElement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

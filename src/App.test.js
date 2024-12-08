import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/First React test case/i);
  const checkInput = screen.getByRole("textbox");
  expect(linkElement).toBeInTheDocument();
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("placeholder", "Enter userName");
  expect(checkInput).toHaveAttribute("type", "text");
});

describe("Test for UI Elements", () => {
  test("test case 1", () => {
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("test case 2", () => {
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("test case 3", () => {
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe.skip("Test for API", () => {
  test("test case 1", () => {
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("test case 2", () => {
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("test case 3", () => {
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
});

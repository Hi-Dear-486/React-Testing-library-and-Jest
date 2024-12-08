import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// beforeAll(()=>{
//   console.log("**********beforeall hooks ************")
// })

// beforeEach(() => {
//   console.log("**********beforeEach hooks ************");
// });

afterAll(() => {
  console.log("**********Afterall hooks ************");
});

afterAll(() => {
  console.log("**********afterEach hooks ************");
});
test("renders learn react link", () => {
  console.log("1");
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
    console.log("2");
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("test case 2", () => {
    console.log("3");
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("test case 3", () => {
    console.log("4");
    render(<App />);
    const linkElement = screen.getByText(/First React test case/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("change event fire", () => {
    render(<App />);
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
  });

  test("click event fire", () => {
    render(<App />);
    let btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("update data")).toBeInTheDocument();
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

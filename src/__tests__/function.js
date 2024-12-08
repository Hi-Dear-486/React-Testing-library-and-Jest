import { render } from "@testing-library/react";
import Sum from "../utils/functions";
test("test for sum function ", () => {
  expect(Sum(10, 20)).toBe(30);
});

test("snap shot for functions", () => {
  const container = render(<Sum />);
  expect(container).toMatchSnapshot();
});

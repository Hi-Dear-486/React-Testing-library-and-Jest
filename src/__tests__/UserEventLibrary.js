import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserEventLibrary from "../UserEventLibrary";

test("UserEventLibrary", async () => {
  userEvent.setup();
  render(<UserEventLibrary />);
  const btn = screen.getByRole("button");
  await act(async () => {
    await userEvent.click(btn);
  });
  expect(
    screen.getByText("Click Event with User Event Library")
  ).toBeInTheDocument();
});

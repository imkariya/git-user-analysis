import React from "react";
import {
  screen,
  render,
  fireEvent,
  act,
  waitForElementToBeRemoved,
} from "../test-utils";
import "@testing-library/jest-dom";
import GitRepoComponent from "../component/gitRepoComponent";

describe("Take GitRepo Component snapshot", () => {
  it("Git Repo List", async () => {
    render(<GitRepoComponent />);
    const inputField = screen.getByRole("textbox");

    const submitBtn = screen.getByTestId("submit-test-id");

    fireEvent.change(inputField, { target: { value: "apache" } });
    await act(async () => {
      fireEvent.click(submitBtn);
    });
    await waitForElementToBeRemoved(() =>
      screen.queryAllByTestId("loading-test-id")
    );
    expect(screen.getByTestId("repo-wrapper-test-id")).toMatchSnapshot();
  });
});

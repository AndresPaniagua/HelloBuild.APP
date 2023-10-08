import React from "react";
import { mockReactRedux } from "mock-react-redux";
import { create, act } from "react-test-renderer";

import GitTable from "../../src/components/__shared/GitTable";

import "regenerator-runtime/runtime";
import "core-js/stable";
import "react-redux";

jest.mock("sweetalert2", () => {
  fire: jest.fn().mockResolvedValue({ isConfirmed: true });
});

describe("Unit Test for Components (renderer)", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("GitTable Success", () => {
    // Arrange
    const list = [
      {
        name: "Repo 1",
        description: "Description 1",
        svnUrl: "https://example.com/repo1",
      },
      {
        name: "Repo 2",
        description: "Description 2",
        svnUrl: "https://example.com/repo2",
      },
    ];

    const tag = <GitTable list={list} title={"Repositories"} />;
    let root;
    let rootInstance;

    mockReactRedux().state({});

    // Act
    act(() => {
      root = create(tag);
    });

    rootInstance = root.root;

    // Assert
    expect(root.toJSON()).toMatchSnapshot();
    expect(
      rootInstance.findByProps({ className: "card-datatable" })
    ).toBeTruthy();
    expect(rootInstance.findByType("h1").props.children).toBe("Repositories");
    expect(
      rootInstance.findByProps({
        className: "p-datatable p-component p-datatable-responsive-scroll",
      })
    ).toBeTruthy();
    const buttons = rootInstance.findAllByType("a");
    expect(buttons).toHaveLength(2);
  });

  it("GitTable handles error correctly", () => {
    // Arrange
    const tag = <GitTable list={[]} title={"Repositories"} />;
    let root;
    let rootInstance;

    mockReactRedux().state({});

    // Act
    act(() => {
      root = create(tag);
    });

    rootInstance = root.root;

    // Assert
    expect(root.toJSON()).toMatchSnapshot();
    expect(
      rootInstance.findByProps({ className: "p-datatable-emptymessage" })
    ).toBeTruthy();
  });
});

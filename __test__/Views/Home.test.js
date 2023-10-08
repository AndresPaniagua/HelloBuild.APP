import React from "react";
import { mockReactRedux } from "mock-react-redux";
import { create, act } from "react-test-renderer";

import Home from "../../src/views/Home";

import "regenerator-runtime/runtime";
import "core-js/stable";
import "react-redux";

jest.mock("sweetalert2", () => {
  fire: jest.fn().mockResolvedValue({ isConfirmed: true });
});

describe("Unit Test for Views (renderer)", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("Home when isLogged is false", () => {
    // Arrange
    const tag = <Home />;
    let root;
    let rootInstance;

    mockReactRedux().state({
      user: null,
      isLogged: false,
    });

    // Act
    act(() => {
      root = create(tag);
    });

    rootInstance = root.root;

    // Assert
    expect(rootInstance.findByProps({ className: "signIn-Container" })).toBeTruthy();
    expect(rootInstance.findByProps({ className: "form-title" })).toBeTruthy();
  });

  it("Home Success", () => {
    // Arrange
    const user = {
      email: "valid@email.com",
      password: "validPassword",
    };
    const tag = <Home />;
    let root;
    let rootInstance;

    mockReactRedux().state({
      user: user,
      isLogged: true,
    });

    // Act
    act(() => {
      root = create(tag);
    });

    rootInstance = root.root;

    // Assert
    expect(rootInstance.findByProps({ className: "signIn-Container" })).toBeTruthy();
    expect(rootInstance.findByProps({ className: "git-form" })).toBeTruthy();
  });
});

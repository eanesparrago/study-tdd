import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

import { shallow } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter></Counter>);
  });

  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toBe("This is counter app");
  });

  test("render a button with text of 'Increment'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of decrement button and decrement counter value when the value is 0", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});

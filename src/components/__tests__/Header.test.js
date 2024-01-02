import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("should rander header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginBtn = screen.getByText('Login');
  const loginBtn = screen.getByRole("button");
  expect(loginBtn).toBeInTheDocument();
});

it("should rander header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); // We can also pass regex
  expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" }); // secon parameter for
  fireEvent.click(loginBtn);
  const logOutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logOutBtn).toBeInTheDocument();
});

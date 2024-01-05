// Integration tests

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_DATA from "../mocks/mockRestraurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search res list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByTestId("searchBtn");
  const searchInput = screen.getByTestId("searchTextInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  // screen should load 3 cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});

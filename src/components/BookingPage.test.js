import { fetchAPI } from "../api/api";
import { initializeTimes, updateTimes } from "./BookingPage";

test("initializeTimes function returns correct times array", () => {
  const initialState = fetchAPI(new Date());
  const action = {};
  const newState = initializeTimes(initialState, action);
  expect(newState).toEqual(fetchAPI(new Date()));
});

test("updateTimes function returns same state", () => {
  const initialState = fetchAPI(new Date());
  const action = { type: "UPDATE_TIMES", payload: new Date() };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});

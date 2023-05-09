import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api/api";
import BookingForm from "./BookingForm";

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
}

export const initializeTimes = () => fetchAPI(new Date());

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const result = submitAPI(formData);
    if (result) {
      navigate("/booking-confirmed");
    }
  };

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
      />
    </div>
  );
}

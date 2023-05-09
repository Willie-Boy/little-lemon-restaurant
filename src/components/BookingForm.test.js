import { render, screen, act, fireEvent } from "@testing-library/react";
import { fetchAPI } from "../api/api";
import BookingForm from "./BookingForm";

test("renders form", () => {
  const availableTimes = fetchAPI(new Date());
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={() => {}}
      onSubmit={() => {}}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toBeInTheDocument();
  expect(dateInput.type).toBe("date");

  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toBeInTheDocument();
  expect(timeSelect).toHaveAttribute("name", "time");

  const guestInput = screen.getByLabelText(/Number of guests/i);
  expect(guestInput).toBeInTheDocument();
  expect(guestInput.type).toBe("number");
  expect(guestInput).toHaveAttribute("min", "1");

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toBeInTheDocument();
  expect(occasionSelect).toHaveAttribute("name", "occasion");
});

test("validates form fields correctly", async () => {
  const availableTimes = fetchAPI(new Date());
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={() => {}}
      onSubmit={() => {}}
    />
  );

  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: /Reserve/i }));
  });
  expect((await screen.findAllByText(/Required/i)).length).toBe(4);

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2023-12-31" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Reserve/i }));
  });
  expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
});

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Required"),
  time: Yup.string().required("Required"),
  guests: Yup.number()
    .min(1, "You must have at least one guest")
    .required("Required"),
  occasion: Yup.string().required("Required"),
});

export default function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const initialValues = {
    date: "",
    time: "",
    guests: "",
    occasion: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
          <label htmlFor="date">Choose date</label>
          <Field
            type="date"
            id="date"
            name="date"
            onChange={(event) => {
              setFieldValue("date", event.target.value);
              dispatch({
                type: "UPDATE_TIMES",
                payload: event.target.value,
              });
            }}
          />
          <ErrorMessage name="date" component="div" />

          <label htmlFor="time">Choose time</label>
          <Field as="select" id="time" name="time">
            <option value="">Select...</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" />

          <label htmlFor="guests">Number of guests</label>
          <Field type="number" id="guests" name="guests" min="1" />
          <ErrorMessage name="guests" component="div" />

          <label htmlFor="occasion">Occasion</label>
          <Field as="select" id="occasion" name="occasion">
            <option value="">Select...</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage name="occasion" component="div" />

          <Button type="submit" disabled={isSubmitting}>
            Reserve
          </Button>
        </Form>
      )}
    </Formik>
  );
}

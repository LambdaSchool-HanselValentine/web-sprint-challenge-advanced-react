import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	render(<App />);
	const header = screen.getByText(/React Plants/);
	expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
	render(<CheckoutForm />);

	const firstName = screen.getByLabelText(/First Name/);
	const lastName = screen.getByLabelText(/Last Name/);
	const address = screen.getByLabelText(/Address/);
	const city = screen.getByLabelText(/City/);
	const state = screen.getByLabelText(/State/);
	const zip = screen.getByLabelText(/Zip/);
	const submit = screen.getByTestId("submit");

	userEvent.type(firstName, "Dwight");
	userEvent.type(lastName, "Schrute");
	userEvent.type(address, "Schrutes Farm House");
	userEvent.type(city, "Scranton");
	userEvent.type(state, "PA");
	userEvent.type(zip, "1725");

	userEvent.click(submit);
	// successMessage only shows after user clicks submit
	const successMessage = screen.getByTestId("successMessage");

	expect(successMessage).toBeInTheDocument();
});

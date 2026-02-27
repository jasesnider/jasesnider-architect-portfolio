import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import ContactPage from "../app/contact/page";

test("ContactPage matches snapshot", () => {
	const { asFragment } = render(<ContactPage />);
	expect(asFragment()).toMatchSnapshot();
});

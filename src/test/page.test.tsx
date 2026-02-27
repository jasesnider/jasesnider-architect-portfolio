import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "../app/page";

test("Home page matches snapshot", () => {
	const { asFragment } = render(<Home />);
	expect(asFragment()).toMatchSnapshot();
});

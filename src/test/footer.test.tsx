import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Footer from "@components/footer/Footer";

test("Footer matches snapshot", () => {
	const { asFragment } = render(<Footer />);
	expect(asFragment()).toMatchSnapshot();
});

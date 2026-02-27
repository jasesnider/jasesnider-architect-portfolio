import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Header from "@components/header/Header";

test("Header matches snapshot", () => {
	const { asFragment } = render(<Header />);
	expect(asFragment()).toMatchSnapshot();
});

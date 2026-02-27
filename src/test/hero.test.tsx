import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Hero from "@components/hero/Hero";

test("Hero matches snapshot", () => {
	const { asFragment } = render(<Hero />);
	expect(asFragment()).toMatchSnapshot();
});

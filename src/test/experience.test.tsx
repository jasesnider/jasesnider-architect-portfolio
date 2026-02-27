import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Experience from "@components/experience/Experience";

test("Experience matches snapshot", () => {
	const { asFragment } = render(<Experience />);
	expect(asFragment()).toMatchSnapshot();
});

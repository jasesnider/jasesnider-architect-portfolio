import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Capabilities from "@components/capabilities/Capabilities";

test("Capabilities matches snapshot", () => {
	const { asFragment } = render(<Capabilities />);
	expect(asFragment()).toMatchSnapshot();
});

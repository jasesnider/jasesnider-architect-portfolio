import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CustomCursor from "@components/cursor/CustomCursor";

test("CustomCursor matches snapshot", () => {
	const { asFragment } = render(<CustomCursor />);
	expect(asFragment()).toMatchSnapshot();
});

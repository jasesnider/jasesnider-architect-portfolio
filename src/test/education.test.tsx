import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Education from "@components/education/Education";

test("Education matches snapshot", () => {
	const { asFragment } = render(<Education />);
	expect(asFragment()).toMatchSnapshot();
});

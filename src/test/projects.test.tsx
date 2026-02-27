import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import ProjectGrid from "@components/projects/ProjectGrid";

test("ProjectGrid matches snapshot", () => {
	const { asFragment } = render(<ProjectGrid />);
	expect(asFragment()).toMatchSnapshot();
});

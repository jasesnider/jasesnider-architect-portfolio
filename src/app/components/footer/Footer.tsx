"use client";

import SocialLinks from "@components/social/SocialLinks";
import { name } from "@constants";
import { useEffect, useState } from "react";

const Footer = () => {
	const [year, setYear] = useState<number | null>(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="flex w-full flex-col items-center justify-center gap-8 border-t border-zinc-200 px-8 py-16 dark:border-zinc-800">
			<SocialLinks />
			<p className="text-sm text-zinc-600 dark:text-zinc-400">
				© {year || ""} {name}. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;

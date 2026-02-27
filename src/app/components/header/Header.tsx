import SocialLinks from "@components/social/SocialLinks";
import { name } from "@constants";

const Header = () => {
	return (
		<header className="relative top-0 z-50 flex w-full items-center justify-between border-b border-zinc-200 bg-zinc-950/80 px-8 py-4 backdrop-blur-md dark:border-zinc-800 sm:sticky">
			<div className="flex items-center gap-12">
				<div className="text-xl font-bold">{name}</div>
				<nav>
					<ul className="flex gap-6">
						<li>
							<a href="/" className="hover:underline">
								Home
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="hidden sm:block">
				<SocialLinks />
			</div>
		</header>
	);
};

export default Header;

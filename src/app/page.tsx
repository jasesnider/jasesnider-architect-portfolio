import Capabilities from "@components/capabilities/Capabilities";
import Education from "@components/education/Education";
import Experience from "@components/experience/Experience";
import Hero from "@components/hero/Hero";
import ProjectGrid from "@components/projects/ProjectGrid";

export default function Home() {
	return (
		<div className="min-h-screen bg-zinc-950 font-sans text-zinc-50">
			<main className="mx-auto max-w-7xl px-8 py-20">
				<Hero />
				<Capabilities />
				<ProjectGrid />
				<Education />
				<Experience />
			</main>
		</div>
	);
}

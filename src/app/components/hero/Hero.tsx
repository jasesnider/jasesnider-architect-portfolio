import { heroContent } from "@constants";

const Hero = () => {
	return (
		<section className="mb-24 max-w-4xl">
			<h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1]">
				{heroContent.headline.start}
				{heroContent.headline.highlights.map((highlight, index) => (
					<span key={highlight.text}>
						<span className={highlight.color}>{highlight.text}</span>
						{index < heroContent.headline.highlights.length - 1 ? ", " : "."}
					</span>
				))}
			</h1>
			<p className="mt-6 text-xl leading-8 text-zinc-400 max-w-2xl">
				{heroContent.description}
			</p>
			<div className="mt-10 flex flex-wrap gap-4">
				{heroContent.capabilities.map((cap) => (
					<div 
						key={cap.label}
						className="flex items-center gap-2 text-sm font-medium text-zinc-500 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800"
					>
						<span className={`w-2 h-2 rounded-full ${cap.color} animate-pulse`} />
						{cap.label}
					</div>
				))}
			</div>
		</section>
	);
};

export default Hero;

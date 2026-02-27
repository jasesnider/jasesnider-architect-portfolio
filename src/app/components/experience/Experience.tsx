"use client";

import { motion } from "framer-motion";
import { experience } from "@constants";

const Experience = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
		show: { opacity: 1, x: 0, filter: "blur(0px)" },
	};

	return (
		<section className="mb-32">
			<h2 className="text-2xl font-semibold mb-12 text-white border-l-4 border-emerald-600 pl-4">
				Professional Experience
			</h2>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
				className="space-y-12"
			>
				{experience.map((exp) => (
					<motion.div
						variants={item}
						key={`${exp.company}-${exp.role}`}
						className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-zinc-800"
					>
						<div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className="text-xl font-bold text-white">{exp.role}</h3>
							<span className="text-sm font-medium text-emerald-500 uppercase tracking-wider">
								{exp.period}
							</span>
						</div>
						<div className="text-lg font-medium text-zinc-300 mb-4">
							{exp.company}
						</div>
						<p className="text-zinc-400 leading-relaxed max-w-3xl">
							{exp.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Experience;

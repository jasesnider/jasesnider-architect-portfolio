"use client";

import { motion } from "framer-motion";
import { capabilityGroups, additionalProficiencies } from "@constants";

const Capabilities = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.15 }
		}
	};

	const item = {
		hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
		show: { opacity: 1, scale: 1, filter: "blur(0px)" }
	};

	return (
		<section className="mb-32">
			<h2 className="text-2xl font-semibold mb-12 text-white border-l-4 border-zinc-500 pl-4">
				Core Capabilities
			</h2>
			<motion.div 
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 gap-6"
			>
				{capabilityGroups.map((group) => (
					<motion.div
						variants={item}
						key={group.title}
						className={`p-8 rounded-3xl border ${group.border} ${group.bg} hover:bg-zinc-900/40 transition-colors duration-300`}
					>
						<h3 className={`text-xl font-bold ${group.color} mb-3`}>
							{group.title}
						</h3>
						<p className="text-zinc-400 mb-8 leading-relaxed">
							{group.description}
						</p>
						<div className="flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<span 
									key={skill}
									className="px-3 py-1 rounded-full bg-zinc-950/50 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>
			<div className="mt-12 text-center">
				<p className="text-zinc-500 text-sm italic">
					{additionalProficiencies}
				</p>
			</div>
		</section>
	);
};

export default Capabilities;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@constants";

const ProjectGrid = () => {
	const [selectedProject, setSelectedProject] = useState<
		(typeof projects)[0] | null
	>(null);

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
		hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
		show: { opacity: 1, y: 0, filter: "blur(0px)" },
	};

	return (
		<section className="mb-32">
			<h2 className="text-2xl font-semibold mb-12 text-white border-l-4 border-blue-600 pl-4">
				Selected Projects
			</h2>
			<motion.div 
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
			>
				{projects.map((project) => (
					<motion.button
						variants={item}
						key={project.id}
						type="button"
						onClick={() => setSelectedProject(project)}
						className={`group relative flex flex-col items-start overflow-hidden rounded-2xl bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-br ${project.gradient} hover:animate-gradient-xy text-left border border-zinc-800 hover:border-transparent cursor-pointer`}
					>
						<div className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white/70">
							Project
						</div>
														<h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
															{project.title}
														</h3>
														<p className="mt-4 text-zinc-400 group-hover:text-white/90 transition-colors duration-300">
															{project.description}
														</p>
														<div className="mt-auto pt-8 font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
															View Details →
														</div>
						
					</motion.button>
				))}
			</motion.div>

			{/* Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 20 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="w-full max-w-2xl overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-2xl border border-zinc-800 sm:p-12"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex justify-between items-start">
								<div>
									<div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
										Case Study
									</div>
									<h2 className="text-4xl font-bold text-white">
										{selectedProject.title}
									</h2>
								</div>
								<button
									type="button"
									onClick={() => setSelectedProject(null)}
									className="rounded-full p-2 text-zinc-500 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors duration-200"
								>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div className="mt-8">
								<p className="text-lg leading-relaxed text-zinc-300">
									{selectedProject.longDescription}
								</p>
							</div>
							<div className="mt-12 flex gap-4">
								<button
									type="button"
									className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 cursor-pointer"
								>
									Launch Project
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ProjectGrid;

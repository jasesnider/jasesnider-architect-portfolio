"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { education } from "@constants";

const Education = () => {
	const [selectedEdu, setSelectedEdu] = useState<(typeof education)[0] | null>(
		null,
	);

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
			<h2 className="text-2xl font-semibold mb-12 text-white border-l-4 border-purple-600 pl-4">
				Education
			</h2>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
				className="grid grid-cols-1 gap-8 sm:grid-cols-2"
			>
				{education.map((edu) => (
					<motion.button
						variants={item}
						key={edu.school}
						onClick={() => setSelectedEdu(edu)}
						className="flex items-center gap-6 rounded-2xl bg-zinc-900/50 p-6 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-purple-500/50 cursor-pointer text-left w-full"
					>
						<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2">
							<img
								src={edu.logo}
								alt={`${edu.school} logo`}
								className="h-full w-full object-contain"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold text-white">{edu.school}</h3>
							<p className="text-zinc-400">{edu.degree}</p>
						</div>
					</motion.button>
				))}
			</motion.div>

			{/* Modal */}
			<AnimatePresence>
				{selectedEdu && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
						onClick={() => setSelectedEdu(null)}
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
								<div className="flex items-center gap-6">
									<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2">
										<img
											src={selectedEdu.logo}
											alt={`${selectedEdu.school} logo`}
											className="h-full w-full object-contain"
										/>
									</div>
									<div>
										<div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
											Academic Profile
										</div>
										<h2 className="text-2xl font-bold text-white">
											{selectedEdu.school}
										</h2>
									</div>
								</div>
								<button
									type="button"
									onClick={() => setSelectedEdu(null)}
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
								<h3 className="text-xl font-semibold text-purple-400 mb-4">
									{selectedEdu.degree}
								</h3>
								<p className="text-lg leading-relaxed text-zinc-300">
									{selectedEdu.description}
								</p>
							</div>
							<div className="mt-12 flex gap-4">
								<button
									type="button"
									className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 cursor-pointer"
								>
									View Alumni Network
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Education;

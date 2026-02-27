"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type ContactFormData = {
	name: string;
	email: string;
	message: string;
};

export default function ContactPage() {
	const [mounted, setMounted] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormData>();

	const onSubmit = async (data: ContactFormData) => {
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log("Form Data:", data);
		setIsSubmitted(true);
		reset();
	};

	if (!mounted) return null;

	return (
		<div className="min-h-[80vh] bg-zinc-950 font-sans text-zinc-50 flex items-center justify-center p-8">
			<div className="w-full max-w-xl">
				<div className="mb-12">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
						Get in touch
					</h1>
					<p className="text-zinc-400 text-lg">
						Have a project in mind or just want to say hi? Feel free to reach out.
					</p>
				</div>

				{isSubmitted ? (
					<div className="rounded-2xl bg-emerald-950/30 border border-emerald-800 p-8 text-center">
						<h2 className="text-2xl font-bold text-emerald-400 mb-2">
							Message sent!
						</h2>
						<p className="text-zinc-400">
							Thanks for reaching out. I'll get back to you soon.
						</p>
						<button
							onClick={() => setIsSubmitted(false)}
							className="mt-6 text-sm font-semibold text-emerald-400 hover:underline cursor-pointer"
						>
							Send another message
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-zinc-400 mb-2"
							>
								Name
							</label>
							<input
								id="name"
								type="text"
								{...register("name", { required: "Name is required" })}
								className={`w-full rounded-xl bg-zinc-900 border ${
									errors.name ? "border-red-500" : "border-zinc-800"
								} px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
								placeholder="Your name"
							/>
							{errors.name && (
								<span className="text-red-500 text-xs mt-1">
									{errors.name.message}
								</span>
							)}
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-zinc-400 mb-2"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Invalid email address",
									},
								})}
								className={`w-full rounded-xl bg-zinc-900 border ${
									errors.email ? "border-red-500" : "border-zinc-800"
								} px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
								placeholder="your@email.com"
							/>
							{errors.email && (
								<span className="text-red-500 text-xs mt-1">
									{errors.email.message}
								</span>
							)}
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-zinc-400 mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								rows={5}
								{...register("message", { required: "Message is required" })}
								className={`w-full rounded-xl bg-zinc-900 border ${
									errors.message ? "border-red-500" : "border-zinc-800"
								} px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none`}
								placeholder="Tell me about your project..."
							/>
							{errors.message && (
								<span className="text-red-500 text-xs mt-1">
									{errors.message.message}
								</span>
							)}
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full rounded-xl bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
	const [mounted, setMounted] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
	const cursorX = useSpring(mouseX, springConfig);
	const cursorY = useSpring(mouseY, springConfig);

	useEffect(() => {
		setMounted(true);

		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		
		const moveMouse = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
			if (!isVisible) setIsVisible(true);
		};

		const handleHoverStart = () => setIsHovered(true);
		const handleHoverEnd = () => setIsHovered(false);

		window.addEventListener("mousemove", moveMouse);

		const setupHoverListeners = () => {
			const interactiveElements = document.querySelectorAll(
				'button, a, input, textarea, [role="button"]'
			);

			interactiveElements.forEach((el) => {
				el.addEventListener("mouseenter", handleHoverStart);
				el.addEventListener("mouseleave", handleHoverEnd);
			});
		};

		setupHoverListeners();

		const observer = new MutationObserver(setupHoverListeners);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			window.removeEventListener("resize", checkMobile);
			window.removeEventListener("mousemove", moveMouse);
			observer.disconnect();
		};
	}, [mouseX, mouseY, isVisible]);

	if (!mounted || isMobile) return null;

	return (
		<>
			{/* Main Follower Circle */}
			<motion.div
				className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference"
				style={{
					x: cursorX,
					y: cursorY,
					translateX: "-50%",
					translateY: "-50%",
					backgroundColor: isHovered ? "white" : "transparent",
					scale: isHovered ? 2.5 : 1,
					opacity: isVisible ? 1 : 0,
				}}
				transition={{
					scale: { type: "spring", stiffness: 300, damping: 25 },
					backgroundColor: { duration: 0.2 },
					opacity: { duration: 0.2 },
				}}
			/>
			{/* Center Dot */}
			<motion.div
				className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
				style={{
					x: mouseX,
					y: mouseY,
					translateX: "-50%",
					translateY: "-50%",
					opacity: isVisible && !isHovered ? 1 : 0,
				}}
			/>
		</>
	);
};

export default CustomCursor;

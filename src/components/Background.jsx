import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import meImage from "../assets/me.jpg";

const Stars = (props) => {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 1.2 })
	);

	useFrame((state, delta) => {
		if (ref.current.position.z > 1.0) {
			ref.current.position.z = -0.4;
		}
		ref.current.position.z += delta / 3;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.004}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const Background = () => {
	const [cursorPos, setCursorPos] = useState({ x: 0.5, y: 0.5 });
	const [smoothPos, setSmoothPos] = useState({ x: 0.5, y: 0.5 });
	const [isWaving, setIsWaving] = useState(false);

	// Track mouse movement and start waving when it stops
	useEffect(() => {
		let timeoutId;

		const handleMove = (e) => {
			const x = e.clientX / window.innerWidth;
			const y = e.clientY / window.innerHeight;
			setCursorPos({ x, y });

			// Reset waving when moving
			setIsWaving(false);
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setIsWaving(true);
			}, 600); // wave if mouse stops for 600ms
		};

		window.addEventListener("mousemove", handleMove);
		return () => {
			window.removeEventListener("mousemove", handleMove);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, []);

	// Smoothly follow the cursor
	useEffect(() => {
		let frameId;
		const lerp = (a, b, t) => a + (b - a) * t;

		const animate = () => {
			setSmoothPos((prev) => ({
				x: lerp(prev.x, cursorPos.x, 0.15),
				y: lerp(prev.y, cursorPos.y, 0.15),
			}));
			frameId = requestAnimationFrame(animate);
		};

		frameId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(frameId);
	}, [cursorPos]);

	const avatarSize = 120;
	const left = smoothPos.x * window.innerWidth - avatarSize / 2;
	const top = smoothPos.y * window.innerHeight - avatarSize / 2;

	return (
		<>
			{/* Starfield background */}
			<div className="w-full h-auto absolute blur-[0.5px] inset-0 z-[-1]">
				<Canvas camera={{ position: [0, 0, 1] }}>
					<Suspense fallback={null}>
						<Stars />
					</Suspense>
					<Preload all />
				</Canvas>
			</div>

			{/* Floating avatar that follows the cursor */}
			<div
				style={{
					position: "fixed",
					left,
					top,
					width: avatarSize,
					height: avatarSize,
					pointerEvents: "none",
					zIndex: 50,
				}}
				className={isWaving ? "avatar-wave" : ""}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
						borderRadius: "9999px",
						overflow: "hidden",
						border: "2px solid rgba(255, 255, 255, 0.25)",
						boxShadow:
							"0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(242,114,200,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
						background:
							"linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(147,51,234,0.2) 50%, rgba(242,114,182,0.15) 100%)",
						backdropFilter: "blur(12px)",
						WebkitBackdropFilter: "blur(12px)",
					}}
				>
					<img
						src={meImage}
						alt="Me"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</div>
			</div>

			{/* Wave animation styles */}
			<style>{`
        @keyframes avatarWave {
          0% { transform: rotate(0deg) translate3d(0, 0, 0); }
          25% { transform: rotate(8deg) translate3d(0, -4px, 0); }
          50% { transform: rotate(-6deg) translate3d(0, 2px, 0); }
          75% { transform: rotate(6deg) translate3d(0, -3px, 0); }
          100% { transform: rotate(0deg) translate3d(0, 0, 0); }
        }
        .avatar-wave {
          animation: avatarWave 0.8s ease-in-out infinite;
          transform-origin: bottom center;
        }
      `}</style>
		</>
	);
};

export default Background;

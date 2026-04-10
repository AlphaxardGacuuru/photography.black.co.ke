"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Btn from "@/components/ui/button"
import LoadingImage from "@/components/ui/loading-image"

const qualities = [
	{
		label: "Patience",
		value: 90,
		description:
			"Calm direction throughout the day so every moment stays natural and relaxed.",
	},
	{
		label: "Creativity",
		value: 95,
		description:
			"Fresh framing, thoughtful light, and visual storytelling tailored to each couple.",
	},
	{
		label: "Commitment",
		value: 100,
		description:
			"Reliable preparation and delivery from first consultation to final gallery.",
	},
]

const specialties = [
	{
		label: "Photography",
		value: 100,
		description:
			"Editorial and documentary coverage designed for timeless wedding memories.",
	},
	{
		label: "Video",
		value: 100,
		description:
			"Cinematic films that preserve movement, sound, and atmosphere.",
	},
]

const About = () => {
	const [animateQualities, setAnimateQualities] = useState(false)
	const [animateSpecialties, setAnimateSpecialties] = useState(false)

	useEffect(() => {
		const qualityTimer = window.setTimeout(() => {
			setAnimateQualities(true)
		}, 120)
		const specialtyTimer = window.setTimeout(() => {
			setAnimateSpecialties(true)
		}, 320)

		return () => {
			window.clearTimeout(qualityTimer)
			window.clearTimeout(specialtyTimer)
		}
	}, [])

	return (
		<main className="bg-[linear-gradient(180deg,#faf6ef_0%,#f7f1e6_48%,#f8f3ea_100%)] text-[#2f2a24]">
			<section className="border-b border-[#d4b06a] bg-[#d2ad63]/20">
				<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
					<div className="relative min-h-[500px]">
						<LoadingImage
							src="/img/bg-img/Me-3.jpg"
							alt="Portrait of Al"
							fill
							priority
							wrapperClassName="h-full w-full"
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
					<div className="relative flex items-center overflow-hidden border-l border-white/40 bg-[#d2ad63]/22 px-6 py-16 backdrop-blur-2xl sm:px-10 lg:px-14">
						<div className="pointer-events-none absolute inset-0 bg-white/18" />
						<div className="relative z-10 max-w-xl space-y-6">
							<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
								About me
							</p>
							<h1 className="text-4xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
								Hi, I&apos;m Al
							</h1>
							<p className="text-lg leading-8 text-[#5a4f42]">
								I&apos;m an experienced photographer and videographer focused on
								making wedding ceremonies memorable. Black Photography offers
								customized coverage to preserve your day with warmth, style, and
								honest storytelling.
							</p>
							<Btn
								asChild
								variant="glass"
								size="lg"
								className="border-[#d2ad63]/80 bg-[#d2ad63]/24 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/34">
								<Link href="/contact">Contact me</Link>
							</Btn>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
				<div className="mb-10 space-y-4">
					<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
						Dream
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
						Look at my qualities
					</h2>
					<p className="max-w-3xl text-lg leading-8 text-[#5a4f42]">
						I understand that patience is a virtue and how valuable you are as a
						client, so I combine creativity and commitment to deliver coverage
						you can trust.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{qualities.map((quality, index) => (
						<article
							key={quality.label}
							tabIndex={0}
							className="rounded-[1.75rem] border border-[#d5b26d] bg-[linear-gradient(160deg,rgba(255,200,98,0.24),rgba(255,247,235,0.92))] p-6 shadow-[0_16px_40px_rgba(160,120,54,0.16)] transition hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(160,120,54,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d5b26d]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f1e6]">
							<div className="flex items-center justify-between gap-3">
								<h3 className="text-xl font-semibold text-[#2d261f]">
									{quality.label}
								</h3>
								<span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c9973e]">
									{quality.value}%
								</span>
							</div>
							<div className="mt-4 h-2 overflow-hidden rounded-full bg-[#f4e7d1]">
								<div
									className="h-full rounded-full bg-[#d2ad63]"
									style={{
										width: animateQualities ? `${quality.value}%` : "0%",
										transitionProperty: "width",
										transitionDuration: "1800ms",
										transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
										transitionDelay: `${index * 220}ms`,
									}}
								/>
							</div>
							<p className="mt-4 text-sm leading-7 text-[#5a4f42]">
								{quality.description}
							</p>
						</article>
					))}
				</div>
			</section>

			<section className="border-y border-[#d4b06a] bg-[#f3eadf]">
				<div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
					<div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#d5b26d]">
						<LoadingImage
							src="/img/bg-img/about3.jpg"
							alt="Wedding couple"
							fill
							wrapperClassName="h-full w-full"
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 55vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#2f2518]/35 via-transparent to-[#f6e7cd]/20" />
					</div>
					<div
						tabIndex={0}
						className="space-y-6 rounded-[2rem] border border-[#d5b26d] bg-[linear-gradient(160deg,rgba(255,200,98,0.2),rgba(255,247,235,0.96))] p-8 shadow-[0_24px_46px_rgba(160,120,54,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_56px_rgba(160,120,54,0.24)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d5b26d]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3eadf]">
						<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
							Really
						</p>
						<h2 className="text-3xl font-semibold tracking-tight text-[#2d261f] sm:text-4xl">
							I am diverse
						</h2>
						<div className="space-y-6">
							{specialties.map((specialty, index) => (
								<div key={specialty.label}>
									<div className="mb-2 flex items-center justify-between gap-3">
										<h3 className="text-xl font-semibold text-[#2d261f]">
											{specialty.label}
										</h3>
										<span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c9973e]">
											{specialty.value}%
										</span>
									</div>
									<div className="h-2 overflow-hidden rounded-full bg-[#f4e7d1]">
										<div
											className="h-full rounded-full bg-[#d2ad63]"
											style={{
												width: animateSpecialties
													? `${specialty.value}%`
													: "0%",
												transitionProperty: "width",
												transitionDuration: "1800ms",
												transitionTimingFunction:
													"cubic-bezier(0.22, 1, 0.36, 1)",
												transitionDelay: `${index * 260}ms`,
											}}
										/>
									</div>
									<p className="mt-3 text-sm leading-7 text-[#5a4f42]">
										{specialty.description}
									</p>
								</div>
							))}
						</div>
						<Btn
							asChild
							variant="outline"
							size="lg"
							className="w-fit border-[#d2ad63]/80 bg-[#d2ad63]/18 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/28">
							<Link href="/portfolio">View portfolio</Link>
						</Btn>
					</div>
				</div>
			</section>
		</main>
	)
}

export default About

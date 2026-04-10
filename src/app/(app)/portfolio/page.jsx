"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import Btn from "@/components/ui/button"
import LoadingImage from "@/components/ui/loading-image"

const categories = ["All", "Wedding", "Portrait", "Kid"]

const portfolioItems = [
	"Wedding-05",
	"Portrait-01",
	"Kid-01",
	"Wedding-12",
	"Portrait-02",
	"Kid-02",
	"Wedding-13",
	"Portrait-03",
	"Kid-03",
	"Wedding-16",
	"Portrait-04",
	"Kid-04",
	"Wedding-17",
	"Portrait-05",
	"Kid-05",
	"Wedding-18",
	"Portrait-06",
	"Kid-06",
	"Wedding-22",
	"Portrait-07",
	"Kid-07",
	"Wedding-23",
	"Portrait-08",
	"Kid-08",
	"Wedding-26",
	"Portrait-09",
	"Kid-09",
	"Wedding-28",
	"Portrait-10",
	"Kid-10",
	"Wedding-31",
	"Wedding-35",
	"Wedding-36",
	"Wedding-37",
	"Wedding-38",
	"Wedding-39",
	"Wedding-41",
	"Wedding-43",
].map((slug) => ({
	slug,
	category: slug.split("-")[0],
	src: `/img/portfolio-img/${slug}.jpg`,
}))

const Portfolio = () => {
	const [activeCategory, setActiveCategory] = useState("All")

	const visibleItems = useMemo(() => {
		if (activeCategory === "All") {
			return [...portfolioItems].reverse()
		}

		return portfolioItems
			.filter((item) => item.category === activeCategory)
			.reverse()
	}, [activeCategory])

	return (
		<main className="bg-[linear-gradient(180deg,#faf6ef_0%,#f7f1e6_48%,#f8f3ea_100%)] text-[#2f2a24]">
			<section className="border-b border-[#d4b06a] bg-[#d2ad63]/20">
				<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
					<div className="relative min-h-[500px]">
						<LoadingImage
							src="/img/bg-img/portfolio.jpg"
							alt="Portfolio collage"
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
								Portfolio
							</p>
							<h1 className="text-4xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
								Take a look at my portfolio
							</h1>
							<p className="text-lg leading-8 text-[#5a4f42]">
								I strive to deliver timeless images that make your day
								memorable, from intimate portraits to high-energy celebrations.
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
				<div className="mb-8 flex flex-wrap items-center gap-3">
					{categories.map((category) => {
						const active = activeCategory === category

						return (
							<button
								key={category}
								type="button"
								onClick={() => setActiveCategory(category)}
								className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
									active
										? "border-[#d2ad63] bg-[#d2ad63]/30 text-[#8f6628]"
										: "border-[#d5b26d]/70 bg-[#fff8eb] text-[#5a4f42] hover:bg-[#f5e9d3]"
								}`}>
								{category}
							</button>
						)
					})}
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{visibleItems.map((item, index) => (
						<a
							key={item.slug}
							href={item.src}
							target="_blank"
							rel="noreferrer noopener"
							className="group relative block overflow-hidden rounded-[1.5rem] border border-[#d5b26d] bg-[#fff9f2]">
							<div className="relative aspect-[4/5]">
								<LoadingImage
									src={item.src}
									alt={`${item.category} portfolio ${index + 1}`}
									fill
									wrapperClassName="h-full w-full"
									className="object-cover transition duration-700 group-hover:scale-105"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#2f2518]/30 via-transparent to-[#f6e7cd]/24 opacity-60 transition group-hover:opacity-80" />
							</div>
							<div className="absolute bottom-3 left-3 rounded-full border border-[#f0d39d]/70 bg-[#fff5e1]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6628]">
								{item.category}
							</div>
						</a>
					))}
				</div>
			</section>
		</main>
	)
}

export default Portfolio

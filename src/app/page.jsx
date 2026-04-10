"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Camera, Clapperboard, Pause, Play, Sparkles } from "lucide-react"

import Btn from "@/components/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

const heroSlides = [
	{
		title: "Gachie",
		description:
			"Wedding stories framed with calm direction and honest emotion.",
		image: "/img/portfolio-img/Wedding-05.jpg",
	},
	{
		title: "Arboretum",
		description: "Natural light portraits and intimate ceremony coverage.",
		image: "/img/portfolio-img/Wedding-31.jpg",
	},
	{
		title: "Kasarani",
		description:
			"Large celebrations captured with precision, movement, and detail.",
		image: "/img/portfolio-img/Wedding-22.jpg",
	},
]

const services = [
	{
		title: "Wedding Photography Budget",
		price: "Ksh 50,000",
		icon: Camera,
		accent:
			"bg-[linear-gradient(160deg,rgba(34,30,25,0.62),rgba(212,176,106,0.2))] text-[#fffdf8]",
		items: [
			"2 photographers",
			"250 edited photos",
			"10 retouched photos",
			"1 A3 mount",
			"1 photo magazine",
			"Flash disk",
			"Free engagement shoot",
		],
		quote:
			"A story should have a beginning, a middle and an end, but not necessarily in that order.",
	},
	{
		title: "Wedding Photography Standard",
		price: "Ksh 70,000",
		icon: Clapperboard,
		accent:
			"bg-[linear-gradient(160deg,rgba(16,35,54,0.6),rgba(212,176,106,0.22))] text-[#fffdf8]",
		items: [
			"Everything in budget",
			"10 extra retouched photos",
			"2 cinematographers",
			"1 A2 mount",
			"1 extra A3 mount",
			"Video film: 40 mins to 1.5 hrs",
			"Trailer: 6 to 12 mins",
		],
		quote: "If your pictures are not good enough, you are not close enough.",
	},
	{
		title: "Wedding Photography Plus",
		price: "Ksh 100,000",
		icon: Sparkles,
		accent:
			"bg-[linear-gradient(160deg,rgba(255,200,98,0.42),rgba(255,244,224,0.28))] text-[#221b12]",
		items: [
			"Everything in standard",
			"10 more retouched photos",
			"1 A1 mount",
			"1 extra A2 mount",
			"1 extra A3 mount",
			"Drone coverage",
		],
		quote:
			"Photographs capture a moment that is gone forever and impossible to reproduce.",
	},
]

const portfolioImages = [
	"/img/portfolio-img/Wedding-05.jpg",
	"/img/portfolio-img/Wedding-40.jpg",
	"/img/portfolio-img/Wedding-31.jpg",
	"/img/portfolio-img/Wedding-13.jpg",
]

const HomePage = () => {
	const [heroApi, setHeroApi] = useState(null)
	const [isHeroHovered, setIsHeroHovered] = useState(false)
	const [isHeroRotationStopped, setIsHeroRotationStopped] = useState(false)
	const [isTabHidden, setIsTabHidden] = useState(false)

	const isHeroAutoplayPaused =
		isHeroHovered || isHeroRotationStopped || isTabHidden

	useEffect(() => {
		const handleVisibilityChange = () => {
			setIsTabHidden(document.visibilityState !== "visible")
		}

		handleVisibilityChange()
		document.addEventListener("visibilitychange", handleVisibilityChange)

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange)
		}
	}, [])

	useEffect(() => {
		if (!heroApi || isHeroAutoplayPaused) {
			return
		}

		const autoSlideTimer = window.setInterval(() => {
			heroApi.scrollNext()
		}, 6000)

		return () => {
			window.clearInterval(autoSlideTimer)
		}
	}, [heroApi, isHeroAutoplayPaused])

	return (
		<main className="bg-[linear-gradient(180deg,#faf6ef_0%,#f7f1e6_48%,#f8f3ea_100%)] text-[#2f2a24]">
			<section className="relative overflow-hidden border-b border-[#d4b06a] bg-[#f5ede0]">
				<Carousel
					setApi={setHeroApi}
					onMouseEnter={() => setIsHeroHovered(true)}
					onMouseLeave={() => setIsHeroHovered(false)}
					className="w-full"
					opts={{ loop: true, align: "start" }}>
					<CarouselContent className="ml-0">
						{heroSlides.map((slide) => (
							<CarouselItem
								key={slide.image}
								className="pl-0">
								<div className="relative h-[70svh] min-h-[560px] w-full">
									<Image
										src={slide.image}
										alt={slide.title}
										fill
										priority={slide.image === heroSlides[0].image}
										className="z-0 object-cover object-center"
										sizes="100vw"
									/>
									<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f8efe0]/48 via-[#f8efe0]/20 to-transparent" />
									<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#faf5ec]/26 via-transparent to-transparent" />
									<div className="absolute inset-x-0 bottom-0 top-0 z-20 mx-auto flex w-full max-w-7xl items-end px-6 pb-14 pt-24 sm:px-8 lg:items-center">
										<div className="max-w-2xl space-y-6">
											<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
												Black Photography
											</p>
											<h1 className="text-4xl font-semibold tracking-tight text-[#2a241d] sm:text-5xl lg:text-7xl">
												{slide.title}
											</h1>
											<p className="max-w-xl text-base leading-7 text-[#4f463c] sm:text-lg">
												{slide.description}
											</p>
											<div className="flex flex-wrap gap-3">
												<Btn
													asChild
													variant="glass"
													size="lg"
													className="border-[#d2ad63]/80 bg-[#d2ad63]/24 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/34">
													<Link href="/portfolio">Explore portfolio</Link>
												</Btn>
												<Btn
													asChild
													variant="ghost"
													size="lg"
													className="border border-[#d4b06a] text-[#c9973e] hover:bg-[#f4e6cf]">
													<Link href="/contact">Book a session</Link>
												</Btn>
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<button
						type="button"
						onClick={() => setIsHeroRotationStopped((prev) => !prev)}
						aria-pressed={isHeroRotationStopped}
						aria-label={
							isHeroRotationStopped
								? "Resume carousel rotation"
								: "Pause carousel rotation"
						}
						className="absolute bottom-4 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#d3ad66] bg-[#fff7e9]/95 px-4 py-2 text-sm font-medium text-[#c9973e] shadow-[0_10px_24px_rgba(140,103,43,0.2)] transition hover:bg-[#f8ecd7]">
						{isHeroRotationStopped ? (
							<Play className="h-4 w-4" />
						) : (
							<Pause className="h-4 w-4" />
						)}
						<span>
							{isHeroRotationStopped ? "Resume slideshow" : "Pause slideshow"}
						</span>
					</button>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>

			<section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
				<div className="space-y-6">
					<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
						Real moments
					</p>
					<h2
						tabIndex={0}
						className="text-3xl font-semibold tracking-tight text-[#2b241d] transition-colors duration-300 hover:text-[#c9973e] focus-visible:text-[#c9973e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d5b26d]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f1e6] sm:text-5xl">
						“In photography there is a reality so subtle that it becomes more
						real than reality.”
					</h2>
					<p className="max-w-2xl text-lg leading-8 text-[#4f463c]">
						Black Photography documents weddings with restraint, style, and a
						strong sense of atmosphere. The work stays focused on people first,
						then all the details that make the day feel lived-in.
					</p>
				</div>
				<div
					tabIndex={0}
					className="what-i-do-card relative overflow-hidden rounded-[2rem] border border-white/45 bg-[#d2ad63]/20 p-8 backdrop-blur-2xl ring-1 ring-inset ring-[#d5b26d]/55 shadow-[0_24px_50px_rgba(168,125,58,0.22)]">
					<div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-white/20" />
					<div className="relative z-10">
						<p className="text-sm uppercase tracking-[0.35em] text-[#7b6c59]">
							What I do
						</p>
						<div className="mt-6 space-y-6">
							<div className="space-y-2 border-b border-[#dfc189] pb-6">
								<h3 className="what-i-do-title text-2xl font-medium">
									Wedding Photography
								</h3>
								<p className="text-[#605547]">
									Coverage built around the pace of your day, from quiet
									preparation to the energy of the last dance.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="what-i-do-title what-i-do-title-delay text-2xl font-medium">
									Wedding Videography
								</h3>
								<p className="text-[#605547]">
									A cinematic retelling handled by an experienced crew, with
									moments, reactions, and movement preserved frame by frame.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-y border-[#d4b06a]">
				<div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
					<div className="relative min-h-[420px]">
						<Image
							src="/img/bg-img/Me-3.jpg"
							alt="Portrait of Al"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
					<div className="relative flex items-center overflow-hidden border-l border-white/40 bg-[#d2ad63]/20 px-6 py-16 backdrop-blur-2xl ring-1 ring-inset ring-[#d5b26d]/50 shadow-[0_24px_50px_rgba(168,125,58,0.2)] sm:px-10 lg:px-14">
						<div className="pointer-events-none absolute inset-0 bg-white/18" />
						<div className="relative z-10 max-w-xl space-y-6">
							<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
								About me
							</p>
							<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
								Hi, I&apos;m Al
							</h2>
							<p className="text-lg leading-8 text-[#5a4f42]">
								I&apos;m an experienced photographer and videographer focused on
								making wedding ceremonies memorable without forcing them. The
								coverage is tailored so your day feels elegant, emotional, and
								fully yours.
							</p>
							<Btn
								asChild
								variant="glass"
								size="lg"
								className="border-[#d2ad63]/80 bg-[#d2ad63]/24 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/34">
								<Link href="/about">See more</Link>
							</Btn>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
				<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="space-y-3">
						<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
							Services
						</p>
						<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
							Coverage options built for different kinds of celebrations
						</h2>
					</div>
					<Btn
						asChild
						variant="outline"
						size="lg"
						className="w-fit border-[#d2ad63]/80 bg-[#d2ad63]/18 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/28">
						<Link href="/services">See more</Link>
					</Btn>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{services.map((service) => {
						const Icon = service.icon

						return (
							<article
								tabIndex={0}
								key={service.title}
								className={`service-card rounded-[2rem] border border-[#d5b26d] p-8 backdrop-blur-xl shadow-[0_24px_46px_rgba(160,120,54,0.18)] ${service.accent}`}>
								<Icon className="service-card-icon mb-6 h-10 w-10" />
								<h3 className="service-card-title text-2xl font-semibold leading-tight">
									{service.title}
								</h3>
								<ul className="mt-6 space-y-3 text-sm uppercase tracking-[0.18em] opacity-80">
									{service.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
								<div className="mt-8 border-t border-[#ddc08d] pt-6">
									<p className="text-2xl font-semibold">{service.price}</p>
									<p className="mt-3 text-sm leading-7 opacity-80">
										{service.quote}
									</p>
								</div>
							</article>
						)
					})}
				</div>
			</section>

			<section className="border-y border-[#d4b06a] bg-[#f3eadf]">
				<div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
					<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div className="space-y-3">
							<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
								Portfolio
							</p>
							<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
								Selected frames from recent celebrations
							</h2>
						</div>
						<Btn
							asChild
							variant="outline"
							size="lg"
							className="w-fit border-[#d2ad63]/80 bg-[#d2ad63]/18 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/28">
							<Link href="/portfolio">See more</Link>
						</Btn>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{portfolioImages.map((image, index) => (
							<Link
								key={image}
								href="/portfolio"
								className="group relative block overflow-hidden rounded-[1.75rem] border border-[#d5b26d] bg-[#fff9f2]">
								<div className="relative aspect-[4/5]">
									<Image
										src={image}
										alt={`Portfolio preview ${index + 1}`}
										fill
										className="object-cover transition duration-700 group-hover:scale-105"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#2f2518]/28 via-transparent to-[#f6e7cd]/30 opacity-55 transition group-hover:opacity-75" />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8">
				<div className="rounded-[2rem] border border-[#d4b06a] bg-[linear-gradient(135deg,rgba(255,200,98,0.38),rgba(255,247,235,0.97))] px-6 py-12 shadow-[0_20px_60px_rgba(163,120,50,0.2)] sm:px-10">
					<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
						Dream
					</p>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
						Experienced photography and videography for days that deserve to
						last
					</h2>
					<p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5a4f42]">
						If you want warm direction, polished visuals, and coverage that
						still feels natural, let&apos;s talk about your wedding.
					</p>
					<div className="mt-8 flex justify-center">
						<Btn
							asChild
							variant="glass"
							size="lg"
							className="border-[#d2ad63]/80 bg-[#d2ad63]/24 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/34">
							<Link href="/contact">Contact me</Link>
						</Btn>
					</div>
				</div>
			</section>
		</main>
	)
}

export default HomePage

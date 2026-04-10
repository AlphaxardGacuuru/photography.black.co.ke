import Link from "next/link"
import {
	Camera,
	Clapperboard,
	Gem,
	Gift,
	Sparkles,
	Users,
	Video,
} from "lucide-react"

import Btn from "@/components/ui/button"
import LoadingImage from "@/components/ui/loading-image"

const servicePackages = [
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

const addOnServices = [
	{
		title: "Ruracio Shoot",
		price: "Ksh 10,000 off",
		icon: Gift,
		accent:
			"bg-[linear-gradient(160deg,rgba(120,20,40,0.68),rgba(180,60,80,0.32))] text-[#fffdf8]",
		items: [
			"Ksh 10,000 off any wedding package",
			"Complimentary session",
			"Coordinated with your wedding coverage",
		],
		quote: "The best thing to hold onto in life is each other.",
	},
	{
		title: "Engagement Shoot",
		price: "Ksh 10,000",
		icon: Gem,
		accent:
			"bg-[linear-gradient(160deg,rgba(200,30,100,0.58),rgba(240,100,150,0.28))] text-[#fffdf8]",
		items: ["1 A3 mount", "30 edited photos", "30 retouched photos"],
		quote: "Every great love story deserves to be told with care.",
	},
	{
		title: "Family and Baby Bump Shoot",
		price: "Ksh 10,000",
		icon: Users,
		accent:
			"bg-[linear-gradient(160deg,rgba(20,100,180,0.58),rgba(100,180,230,0.28))] text-[#fffdf8]",
		items: ["1 A3 mount", "30 edited photos", "30 retouched photos"],
		quote: "Family is not an important thing — it is everything.",
	},
	{
		title: "Wedding Add-ons",
		price: "From Ksh 20,000",
		icon: Video,
		accent:
			"bg-[linear-gradient(160deg,rgba(34,30,25,0.62),rgba(212,176,106,0.2))] text-[#fffdf8]",
		items: ["Drone coverage — Ksh 30,000", "Live streaming — Ksh 20,000"],
		quote: "Every detail captured, every moment preserved.",
	},
]

const terms = [
	"Early booking of 2 weeks is recommended to secure the day.",
	"Booking is confirmed with a 50% deposit and remaining 50% on D-day.",
	"Get a KES 5,000 discount when you pay 80% deposit.",
	"Content is delivered via a flash disk provided by me.",
	"Wedding package add-ons attract an extra cost.",
	"Delivery timelines: photos in 48 hours, videos in 2 weeks.",
]

const Services = () => {
	return (
		<main className="bg-[linear-gradient(180deg,#faf6ef_0%,#f7f1e6_48%,#f8f3ea_100%)] text-[#2f2a24]">
			<section className="border-b border-[#d4b06a] bg-[#d2ad63]/20">
				<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
					<div className="relative min-h-[500px]">
						<LoadingImage
							src="/img/bg-img/blog.jpg"
							alt="Wedding service session"
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
								Services
							</p>
							<h1 className="text-4xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
								Top-quality photography and videography services
							</h1>
							<p className="text-lg leading-8 text-[#5a4f42]">
								I use proven photography and cinematography principles, then add
								a personal touch to deliver an experience you will remember.
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
				<div className="mb-10 space-y-3">
					<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
						Packages
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
						Coverage options for different celebrations
					</h2>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{[...servicePackages, ...addOnServices].map((service) => {
						const Icon = service.icon

						return (
							<article
								key={service.title}
								tabIndex={0}
								className={`service-card rounded-[2rem] border border-[#d5b26d] p-8 backdrop-blur-xl shadow-[0_24px_46px_rgba(160,120,54,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d5b26d]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f1e6] ${service.accent}`}>
								<Icon className="service-card-icon mb-6 h-10 w-10" />
								<h3 className="service-card-title text-2xl font-semibold leading-tight">
									{service.title}
								</h3>
								<ul className="mt-6 space-y-3 text-sm uppercase tracking-[0.16em] opacity-90">
									{service.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
								<div className="mt-8 border-t border-[#ddc08d] pt-6">
									<p className="text-2xl font-semibold">{service.price}</p>
									<p className="mt-3 text-sm leading-7 opacity-85">
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
					<div className="rounded-[2rem] border border-[#d5b26d] bg-[#fff9ef] p-8 shadow-[0_16px_40px_rgba(160,120,54,0.12)]">
						<h3 className="text-2xl font-semibold text-[#2d261f]">
							Terms and details
						</h3>
						<ul className="mt-5 space-y-3 text-sm leading-7 text-[#5a4f42]">
							{terms.map((term) => (
								<li key={term}>• {term}</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Services

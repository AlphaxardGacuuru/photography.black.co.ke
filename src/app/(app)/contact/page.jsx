import Link from "next/link"
import { Facebook, Instagram, Mail, MessageCircle, Phone } from "lucide-react"

import Btn from "@/components/ui/button"
import LoadingImage from "@/components/ui/loading-image"

const contactMethods = [
	{
		label: "Phone",
		href: "tel:0700364446",
		description: "Call directly for fast booking support.",
		icon: Phone,
	},
	{
		label: "SMS",
		href: "sms:0700364446",
		description: "Send a quick message with your event date.",
		icon: MessageCircle,
	},
	{
		label: "Email",
		href: "mailto:alphaxardgacuuru47@gmail.com?subject=Photography&body=Enquiry",
		description: "Share your plans and receive package guidance.",
		icon: Mail,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/alphaxard_gacuuru",
		description: "See latest work and reach out via DM.",
		icon: Instagram,
		external: true,
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/alphaxard.gacuuru",
		description: "Connect and get updates from recent events.",
		icon: Facebook,
		external: true,
	},
	{
		label: "WhatsApp",
		href: "https://wa.me/254700364446",
		description: "Chat instantly and discuss your timeline.",
		icon: MessageCircle,
		external: true,
	},
]

const Contact = () => {
	return (
		<main className="bg-[linear-gradient(180deg,#faf6ef_0%,#f7f1e6_48%,#f8f3ea_100%)] text-[#2f2a24]">
			<section className="border-b border-[#d4b06a] bg-[#d2ad63]/20">
				<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
					<div className="relative min-h-[500px]">
						<LoadingImage
							src="/img/bg-img/contact.jpg"
							alt="Wedding couple"
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
								Contact
							</p>
							<h1 className="text-4xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
								Begin the process of making your day memorable
							</h1>
							<p className="text-lg leading-8 text-[#5a4f42]">
								I am an experienced photographer and videographer. Let&apos;s
								talk about your wedding vision, timeline, and coverage
								preferences.
							</p>
							<Btn
								asChild
								variant="glass"
								size="lg"
								className="border-[#d2ad63]/80 bg-[#d2ad63]/24 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/34">
								<Link href="tel:0700364446">Call now</Link>
							</Btn>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
				<div className="mb-10 space-y-3">
					<p className="text-sm uppercase tracking-[0.35em] text-[#ffc862]">
						Let&apos;s talk
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-[#2d261f] sm:text-5xl">
						Choose your preferred contact channel
					</h2>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{contactMethods.map((method) => {
						const Icon = method.icon

						return (
							<a
								key={method.label}
								href={method.href}
								target={method.external ? "_blank" : undefined}
								rel={method.external ? "noreferrer noopener" : undefined}
								className="group rounded-[1.75rem] border border-[#d5b26d] bg-[linear-gradient(160deg,rgba(255,200,98,0.24),rgba(255,247,235,0.92))] p-6 shadow-[0_16px_40px_rgba(160,120,54,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(160,120,54,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d5b26d]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f1e6]">
								<div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d2ad63]/70 bg-[#fff8eb] text-[#c9973e] transition group-hover:scale-105">
									<Icon className="h-5 w-5" />
								</div>
								<h3 className="mt-4 text-xl font-semibold text-[#2d261f]">
									{method.label}
								</h3>
								<p className="mt-2 text-sm leading-7 text-[#5a4f42]">
									{method.description}
								</p>
							</a>
						)
					})}
				</div>
			</section>
		</main>
	)
}

export default Contact

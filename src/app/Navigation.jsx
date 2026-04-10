"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import {
	Facebook,
	Instagram,
	Mail,
	Menu,
	MessageCircle,
	Phone,
	X,
} from "lucide-react"
import ApplicationLogo from "@/components/ApplicationLogo"

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Me" },
	{ href: "/services", label: "Services" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/contact", label: "Contact" },
	{ href: "/contract", label: "Contract" },
]

const socialItems = [
	{ href: "tel:0700364446", label: "Phone", icon: Phone },
	{ href: "sms:0700364446", label: "SMS", icon: MessageCircle },
	{
		href: "mailto:alphaxardgacuuru47@gmail.com?subject=Photography&body=Enquiry",
		label: "Email",
		icon: Mail,
	},
	{
		href: "https://www.instagram.com/alphaxard_gacuuru",
		label: "Instagram",
		icon: Instagram,
		external: true,
	},
	{
		href: "https://www.facebook.com/alphaxard.gacuuru",
		label: "Facebook",
		icon: Facebook,
		external: true,
	},
]

const Navigation = () => {
	const pathname = usePathname()
	const [menuOpen, setMenuOpen] = useState(false)
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setIsSticky(window.scrollY > 0)
		}

		onScroll()
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	useEffect(() => {
		setMenuOpen(false)
	}, [pathname])

	useEffect(() => {
		if (!menuOpen) return

		const onEscape = (event) => {
			if (event.key === "Escape") {
				setMenuOpen(false)
			}
		}

		document.addEventListener("keydown", onEscape)
		return () => document.removeEventListener("keydown", onEscape)
	}, [menuOpen])

	const currentYear = useMemo(() => new Date().getFullYear(), [])

	return (
		<>
			<header className={`site-header ${isSticky ? "is-sticky" : ""}`}>
				<div className="site-header-inner">
					<Link
						href="/"
						className="brand-link">
						<ApplicationLogo width="12em" />
					</Link>

					<div className="header-right">
						<div className="social-links">
							{socialItems.map(({ href, label, icon: Icon, external }) => (
								<a
									key={label}
									href={href}
									className="icon-link"
									title={label}
									aria-label={label}
									target={external ? "_blank" : undefined}
									rel={external ? "noreferrer noopener" : undefined}>
									<Icon
										size={18}
										strokeWidth={2}
									/>
								</a>
							))}
						</div>

						<button
							type="button"
							className="menu-toggle"
							onClick={() => setMenuOpen(true)}
							aria-label="Open navigation"
							aria-expanded={menuOpen}
							aria-controls="sliding-nav">
							<Menu
								size={20}
								strokeWidth={2.2}
							/>
						</button>
					</div>
				</div>
			</header>

			<div
				className={`menu-overlay ${menuOpen ? "open" : ""}`}
				onClick={() => setMenuOpen(false)}
				aria-hidden={!menuOpen}
			/>

			<aside
				id="sliding-nav"
				className={`sliding-nav ${menuOpen ? "open" : ""}`}
				aria-hidden={!menuOpen}>
				<div className="sliding-nav-header">
					<Link
						href="/"
						className="brand-link text-white"
						onClick={() => setMenuOpen(false)}>
						<ApplicationLogo width="12em" />
					</Link>
					<button
						type="button"
						onClick={() => setMenuOpen(false)}
						className="close-button"
						aria-label="Close navigation">
						<X
							size={20}
							strokeWidth={2.2}
						/>
					</button>
				</div>

				<nav className="sliding-nav-links">
					{navItems.map((item, index) => (
						<Link
							key={item.href}
							href={item.href}
							className={`nav-link-item ${pathname === item.href ? "active" : ""}`}>
							<span className="nav-link-index">
								{String(index + 1).padStart(2, "0")}
							</span>
							<span className="nav-link-label">{item.label}</span>
							<span
								className="nav-link-flare"
								aria-hidden="true"
							/>
						</Link>
					))}
				</nav>

				<p className="copyright-text">
					Copyright {currentYear} Black Photography. All rights reserved.
				</p>
			</aside>

			<style>{`
				.site-header {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					z-index: 70;
					padding: 16px 20px;
					transition:
						background-color 220ms ease,
						box-shadow 220ms ease,
						backdrop-filter 220ms ease;
				}

				.site-header.is-sticky {
					background: rgba(18, 14, 10, 0.58);
					backdrop-filter: blur(10px);
					box-shadow: 0 8px 26px rgba(0, 0, 0, 0.2);
				}

				.site-header-inner {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 16px;
				}

				.brand-link {
					color: #fff8ea;
					text-decoration: none;
					font-size: 1.05rem;
					font-weight: 600;
					letter-spacing: 0.08em;
					text-transform: uppercase;
				}

				.header-right {
					display: flex;
					align-items: center;
					gap: 10px;
				}

				.social-links {
					display: flex;
					align-items: center;
					gap: 8px;
				}

				.icon-link,
				.menu-toggle,
				.close-button {
					width: 36px;
					height: 36px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					border-radius: 999px;
					border: 1px solid rgba(255, 239, 212, 0.35);
					background: rgba(220, 181, 112, 0.28);
					color: #fffaf0;
					cursor: pointer;
					transition:
						background-color 180ms ease,
						border-color 180ms ease;
				}

				.icon-link:hover,
				.menu-toggle:hover,
				.close-button:hover {
					background: rgba(220, 181, 112, 0.42);
					border-color: rgba(255, 239, 212, 0.55);
				}

				.menu-toggle,
				.close-button {
					padding: 0;
				}

				.menu-overlay {
					position: fixed;
					inset: 0;
					z-index: 75;
					background: rgba(10, 7, 4, 0.45);
					opacity: 0;
					visibility: hidden;
					transition:
						opacity 240ms ease,
						visibility 240ms ease;
				}

				.menu-overlay.open {
					opacity: 1;
					visibility: visible;
				}

				.sliding-nav {
					position: fixed;
					top: 0;
					right: 0;
					height: 100dvh;
					width: min(92vw, 380px);
					z-index: 80;
					display: flex;
					flex-direction: column;
					gap: 18px;
					padding: 22px;
					background: rgba(32, 24, 16, 0.88);
					backdrop-filter: blur(16px);
					border-left: 1px solid rgba(219, 182, 116, 0.42);
					transform: translateX(104%);
					transition: transform 300ms cubic-bezier(0.24, 0.9, 0.32, 1);
				}

				.sliding-nav.open {
					transform: translateX(0);
				}

				.sliding-nav-header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 12px;
				}

				.sliding-nav-links {
					display: flex;
					flex-direction: column;
					gap: 10px;
					margin-top: 8px;
				}

				.nav-link-item {
					position: relative;
					overflow: hidden;
					display: flex;
					align-items: center;
					gap: 12px;
					text-decoration: none;
					color: rgba(255, 247, 234, 0.82);
					font-size: 1.1rem;
					font-weight: 500;
					line-height: 1.25;
					padding: 12px 14px;
					border-radius: 12px;
					border: 1px solid rgba(255, 236, 196, 0.08);
					background: rgba(255, 230, 180, 0.03);
					isolation: isolate;
					transition:
						color 160ms ease,
						background-color 160ms ease,
						border-color 160ms ease,
						transform 220ms ease,
						box-shadow 220ms ease;
				}

				.nav-link-index {
					font-size: 0.72rem;
					font-weight: 700;
					letter-spacing: 0.12em;
					color: rgba(255, 229, 182, 0.6);
					min-width: 1.6rem;
				}

				.nav-link-label {
					position: relative;
					z-index: 2;
					letter-spacing: 0.01em;
				}

				.nav-link-flare {
					position: absolute;
					top: 50%;
					left: -35%;
					width: 46%;
					height: 220%;
					transform: translate(-30%, -50%) rotate(20deg);
					background: rgba(255, 222, 153, 0.22);
					filter: blur(14px);
					opacity: 0;
					transition:
						opacity 220ms ease,
						left 320ms ease;
					z-index: 1;
					pointer-events: none;
				}

				.nav-link-item:hover {
					color: #fffef9;
					background: rgba(220, 181, 112, 0.22);
					border-color: rgba(255, 236, 196, 0.45);
					transform: translateX(-2px);
					box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
				}

				.nav-link-item:hover .nav-link-flare {
					opacity: 1;
					left: 102%;
				}

				.nav-link-item:focus-visible {
					outline: none;
					color: #fffef9;
					background: rgba(220, 181, 112, 0.24);
					border-color: rgba(255, 236, 196, 0.62);
					box-shadow:
						0 0 0 3px rgba(255, 217, 145, 0.22),
						0 12px 28px rgba(0, 0, 0, 0.2);
				}

				.nav-link-item:focus-visible .nav-link-flare {
					opacity: 1;
					left: 102%;
				}

				.nav-link-item.active {
					color: #fffef9;
					background: rgba(220, 181, 112, 0.34);
					border-color: rgba(255, 236, 196, 0.55);
					box-shadow: inset 0 0 0 1px rgba(255, 236, 196, 0.22);
				}

				.nav-link-item.active .nav-link-index {
					color: rgba(255, 238, 206, 0.9);
				}

				.copyright-text {
					margin-top: auto;
					font-size: 0.78rem;
					line-height: 1.45;
					color: rgba(255, 245, 226, 0.65);
				}

				@media (max-width: 768px) {
					.site-header {
						padding: 14px;
					}

					.social-links {
						display: none;
					}
				}
			`}</style>
		</>
	)
}

export default Navigation

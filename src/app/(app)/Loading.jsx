import ApplicationLogo from "@/components/ApplicationLogo"
import { Spinner } from "@/components/ui/spinner"

const Loading = () => {
	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#faf6ef_0%,#f7f1e6_48%,#f8f3ea_100%)] px-6">
			<div className="pointer-events-none absolute -left-24 top-[-120px] h-64 w-64 rounded-full bg-[#f3dfb4]/55 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 bottom-[-120px] h-72 w-72 rounded-full bg-[#ecd19a]/45 blur-3xl" />
			<div className="relative z-10 w-full max-w-md rounded-[2rem] border border-[#d5b26d] bg-[linear-gradient(160deg,rgba(255,200,98,0.24),rgba(255,247,235,0.95))] p-10 text-center shadow-[0_24px_56px_rgba(160,120,54,0.22)] backdrop-blur-xl">
				<div className="mx-auto mb-4 text-[#2d261f]">
					<ApplicationLogo width="11.5em" />
				</div>
				<p className="text-xs uppercase tracking-[0.35em] text-[#c9973e]">
					Black Photography
				</p>
				<h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2d261f]">
					Preparing your experience
				</h2>
				<div className="mt-8 flex items-center justify-center gap-3">
					<div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d2ad63]/70 bg-[#fff9ef] shadow-[0_10px_24px_rgba(160,120,54,0.2)]">
						<Spinner className="h-5 w-5 text-[#c9973e]" />
					</div>
					<p className="text-sm font-medium text-[#5a4f42]">
						Loading images and details...
					</p>
				</div>
				<div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-[#f2e2c7]">
					<div className="h-full w-2/3 animate-pulse rounded-full bg-[linear-gradient(90deg,#d2ad63,#ffc862,#d2ad63)]" />
				</div>
			</div>
		</div>
	)
}

export default Loading

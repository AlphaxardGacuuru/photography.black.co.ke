import Btn from "@/components/ui/button"
import LoadingImage from "@/components/ui/loading-image"

const Contract = () => {
	return (
		<main className="bg-[linear-gradient(180deg,#faf6ef_0%,#f7f1e6_48%,#f8f3ea_100%)] text-[#2f2a24]">
			<section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
				<div className="rounded-[2rem] border border-[#d5b26d] bg-[linear-gradient(160deg,rgba(255,200,98,0.24),rgba(255,247,235,0.96))] p-8 shadow-[0_24px_46px_rgba(160,120,54,0.18)] sm:p-10">
					<div className="mb-8 flex flex-col items-center text-center">
						<LoadingImage
							src="/img/bg-img/havi logos-1.png"
							alt="Black Photography logo"
							width={260}
							height={90}
							className="h-auto w-[220px] sm:w-[260px]"
						/>
						<p className="mt-5 text-sm uppercase tracking-[0.35em] text-[#ffc862]">
							Contract
						</p>
						<h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2d261f] sm:text-4xl">
							Reserve your photography package
						</h1>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-[#5a4f42]">
							Share your event details and preferred package. This draft form
							helps start planning your coverage timeline and deliverables.
						</p>
					</div>

					<form className="grid gap-6">
						<div className="grid gap-2">
							<label
								htmlFor="name"
								className="text-sm font-medium text-[#4b3f31]">
								Name
							</label>
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Your full name"
								required
								className="h-12 rounded-xl border border-[#d5b26d]/70 bg-[#fffaf2] px-4 text-[#2f2a24] outline-none transition focus:border-[#c9973e] focus:ring-2 focus:ring-[#d5b26d]/35"
							/>
						</div>

						<div className="grid gap-2">
							<label
								htmlFor="package"
								className="text-sm font-medium text-[#4b3f31]">
								Select package
							</label>
							<select
								id="package"
								name="package"
								defaultValue=""
								className="h-12 rounded-xl border border-[#d5b26d]/70 bg-[#fffaf2] px-4 text-[#2f2a24] outline-none transition focus:border-[#c9973e] focus:ring-2 focus:ring-[#d5b26d]/35">
								<option
									value=""
									disabled>
									Choose a package
								</option>
								<option>Wedding Plus</option>
								<option>Wedding Standard</option>
								<option>Wedding Budget</option>
								<option>Engagement Shoot</option>
								<option>Baby bump Shoot</option>
								<option>Family Shoot</option>
							</select>
						</div>

						<div className="grid gap-3 rounded-xl border border-[#d5b26d]/60 bg-[#fff8eb] p-4">
							<p className="text-sm font-medium text-[#4b3f31]">Add-ons</p>
							<label className="flex items-center gap-3 text-sm text-[#5a4f42]">
								<input
									type="checkbox"
									name="addon-drone"
									className="h-4 w-4 rounded border-[#d5b26d]/70 text-[#c9973e]"
								/>
								Drone
							</label>
							<label className="flex items-center gap-3 text-sm text-[#5a4f42]">
								<input
									type="checkbox"
									name="addon-live-streaming"
									className="h-4 w-4 rounded border-[#d5b26d]/70 text-[#c9973e]"
								/>
								Live Streaming
							</label>
						</div>

						<div className="grid gap-6 sm:grid-cols-2">
							<div className="grid gap-2">
								<label
									htmlFor="date"
									className="text-sm font-medium text-[#4b3f31]">
									Date
								</label>
								<input
									id="date"
									type="date"
									name="date"
									className="h-12 rounded-xl border border-[#d5b26d]/70 bg-[#fffaf2] px-4 text-[#2f2a24] outline-none transition focus:border-[#c9973e] focus:ring-2 focus:ring-[#d5b26d]/35"
								/>
							</div>
							<div className="grid gap-2">
								<label
									htmlFor="duration"
									className="text-sm font-medium text-[#4b3f31]">
									Duration in days
								</label>
								<input
									id="duration"
									type="number"
									name="duration"
									min={1}
									placeholder="e.g. 1"
									className="h-12 rounded-xl border border-[#d5b26d]/70 bg-[#fffaf2] px-4 text-[#2f2a24] outline-none transition focus:border-[#c9973e] focus:ring-2 focus:ring-[#d5b26d]/35"
								/>
							</div>
						</div>

						<Btn
							type="submit"
							variant="glass"
							size="lg"
							className="w-fit border-[#d2ad63]/80 bg-[#d2ad63]/24 text-[#c9973e] backdrop-blur-xl hover:bg-[#d2ad63]/34">
							Submit contract request
						</Btn>
					</form>
				</div>
			</section>
		</main>
	)
}

export default Contract

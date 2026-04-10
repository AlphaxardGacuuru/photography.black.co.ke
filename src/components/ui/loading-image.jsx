"use client"

import Image from "next/image"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"

const LoadingImage = ({
	alt,
	className,
	wrapperClassName,
	overlayClassName,
	onLoad,
	onError,
	...props
}) => {
	const [isLoading, setIsLoading] = useState(true)

	const handleLoad = (event) => {
		setIsLoading(false)
		onLoad?.(event)
	}

	const handleError = (event) => {
		setIsLoading(false)
		onError?.(event)
	}

	return (
		<div className={cn("relative", wrapperClassName)}>
			<Image
				{...props}
				alt={alt}
				onLoad={handleLoad}
				onError={handleError}
				className={cn(
					"transition-opacity duration-500",
					isLoading ? "opacity-0" : "opacity-100",
					className
				)}
			/>
			{isLoading ? (
				<div
					aria-hidden="true"
					className={cn(
						"absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-inherit bg-[linear-gradient(145deg,rgba(255,247,232,0.95),rgba(246,230,197,0.9))]",
						overlayClassName
					)}>
					<div className="pointer-events-none absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0)_20%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_80%)]" />
					<Spinner className="relative z-10 h-5 w-5 text-[#c9973e]" />
					<span className="relative z-10 text-xs font-medium uppercase tracking-[0.18em] text-[#8f6f3c]">
						Loading image
					</span>
				</div>
			) : null}
		</div>
	)
}

export default LoadingImage

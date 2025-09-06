import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const BrandHeader = () => {
	return (
		<header className="bg-base-300/80 backdrop-blur sticky top-0 z-50">
			<div className="w-full max-w-full mx-auto px-[20px]">
				<div className="flex items-center h-16 md:h-20">
					<Link to="/" className="flex items-center gap-4">
						<img src={logo} alt="Company Logo" className="h-14 w-auto object-contain py-1" />
						<div className="text-xl md:text-2xl font-bold">
							Parida <span className="text-primary">& Sons</span>
						</div>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default BrandHeader 
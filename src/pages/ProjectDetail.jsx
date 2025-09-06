import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { projects } from '../data'
import vidA from '../components/Patrapada/video_20250803_104600.mp4'
import vidB from '../components/Patrapada/video_20250803_105026.mp4'
//import img01 from '../components/Patrapada/IMG_20250726_155404.jpg'
import img02 from '../components/Patrapada/IMG_20250803_104137.jpg'
import img03 from '../components/Patrapada/IMG_20250803_104155.jpg'
import img04 from '../components/Patrapada/IMG_20250803_104221.jpg'
import img05 from '../components/Patrapada/IMG_20250803_104231.jpg'
import img06 from '../components/Patrapada/IMG_20250803_104520.jpg'
import img07 from '../components/Patrapada/IMG_20250803_104707.jpg'
import img08 from '../components/Patrapada/IMG_20250803_104751.jpg'
import img09 from '../components/Patrapada/IMG_20250803_104811.jpg'
import img10 from '../components/Patrapada/IMG_20250803_104825.jpg'
import img11 from '../components/Patrapada/IMG_20250803_104921.jpg'
import img12 from '../components/Patrapada/IMG_20250803_105006.jpg'
import img13 from '../components/Patrapada/IMG_20250803_105127.jpg'
import img14 from '../components/Patrapada/IMG_20250803_105802.jpg'
import img15 from '../components/Patrapada/IMG_20250803_105818.jpg'
import img16 from '../components/Patrapada/IMG_20250803_105837.jpg'
import img17 from '../components/Patrapada/IMG_20250803_110552.jpg'

// DaruThenga imports
import daruImg01 from '../components/DaruThenga/IMG_20250726_155142.jpg'
import daruImg02 from '../components/DaruThenga/IMG_20250726_155340.jpg'
import daruImg03 from '../components/DaruThenga/IMG_20250726_155344.jpg'
import daruImg04 from '../components/DaruThenga/IMG_20250726_155353.jpg'
import daruImg05 from '../components/DaruThenga/IMG_20250726_155404.jpg'
import daruImg06 from '../components/DaruThenga/IMG_20250726_155412.jpg'
import daruImg07 from '../components/DaruThenga/IMG_20250726_155418.jpg'
import daruImg08 from '../components/DaruThenga/IMG_20250726_155420.jpg'
import daruImg09 from '../components/DaruThenga/IMG_20250726_155431.jpg'
import daruImg10 from '../components/DaruThenga/IMG_20250726_155436.jpg'
import daruImg11 from '../components/DaruThenga/IMG_20250726_155907.jpg'
import daruImg12 from '../components/DaruThenga/IMG_20250726_155916.jpg'

// Kiit (Adarsh Vihar) imports
import kiitImg01 from '../components/Kiit/IMG_20250802_100949.jpg'
import kiitImg02 from '../components/Kiit/IMG_20250802_101121.jpg'
import kiitImg03 from '../components/Kiit/IMG_20250802_101126.jpg'
import kiitImg04 from '../components/Kiit/IMG_20250802_101154.jpg'
import kiitImg05 from '../components/Kiit/IMG_20250802_101216.jpg'
import kiitImg06 from '../components/Kiit/IMG_20250802_101218.jpg'
import kiitImg07 from '../components/Kiit/IMG_20250802_101641.jpg'
import kiitImg08 from '../components/Kiit/IMG_20250802_101650.jpg'
import kiitImg09 from '../components/Kiit/IMG_20250802_101659.jpg'
import kiitImg10 from '../components/Kiit/IMG_20250802_101756.jpg'
import kiitImg11 from '../components/Kiit/IMG_20250802_101757.jpg'
import kiitImg12 from '../components/Kiit/IMG_20250802_101815.jpg'
import kiitImg13 from '../components/Kiit/IMG_20250802_101820.jpg'
import kiitImg14 from '../components/Kiit/IMG_20250802_101823.jpg'
import kiitImg15 from '../components/Kiit/IMG_20250802_102231.jpg'
import kiitImg16 from '../components/Kiit/IMG_20250802_102233.jpg'
import kiitImg17 from '../components/Kiit/IMG_20250802_102241.jpg'
import kiitImg18 from '../components/Kiit/IMG_20250802_102249.jpg'
import kiitImg19 from '../components/Kiit/IMG_20250802_102301.jpg'

// Manguli imports
import manguliImg01 from '../components/Manguli/IMG-20250830-WA0068.jpg'
import manguliImg02 from '../components/Manguli/IMG-20250830-WA0069.jpg'
import manguliImg03 from '../components/Manguli/IMG-20250830-WA0070.jpg'
import manguliImg04 from '../components/Manguli/IMG-20250830-WA0071.jpg'
import manguliImg05 from '../components/Manguli/IMG-20250830-WA0072.jpg'
import manguliImg06 from '../components/Manguli/IMG-20250830-WA0073.jpg'
import manguliImg07 from '../components/Manguli/IMG-20250830-WA0074.jpg'
import manguliImg08 from '../components/Manguli/IMG-20250830-WA0075.jpg'
import manguliImg09 from '../components/Manguli/IMG-20250830-WA0076.jpg'
import manguliImg10 from '../components/Manguli/IMG-20250830-WA0077.jpg'
import manguliImg11 from '../components/Manguli/IMG-20250830-WA0078.jpg'
import manguliImg12 from '../components/Manguli/IMG-20250830-WA0079.jpg'
import manguliImg13 from '../components/Manguli/IMG-20250830-WA0080.jpg'
import manguliImg14 from '../components/Manguli/IMG-20250830-WA0081.jpg'
import manguliVid01 from '../components/Manguli/VID-20250830-WA0003.mp4'

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const patrapadaMedia = {
	images: [
		 img02, img03, img04, img05, img06, img07, img08, img09,
		img10, img11, img12, img13, img14, img15, img16, img17,
	],
	videos: [vidA, vidB],
	about: `Located in Patrapada, this project showcases our end-to-end delivery from site preparation
	and structural framework to finishing and landscaping. The scope covered earthwork, reinforced concrete
	(RCC) works, masonry, electrical and plumbing installation, waterproofing, exterior facade, and final
	quality assurance.`,
}

const daruThengaMedia = {
	images: [
		daruImg01, daruImg02, daruImg03, daruImg04, daruImg05, daruImg06,
		daruImg07, daruImg08, daruImg09, daruImg10, daruImg11, daruImg12,
	],
	videos: [],
	about: `Located in DaruThenga, this multi-story residential building project demonstrates our expertise in 
	commercial construction and architectural excellence. The project encompasses comprehensive architectural 
	and structural design, advanced HVAC systems, modern electrical infrastructure, and complete project 
	oversight. We delivered a state-of-the-art residential complex that meets contemporary residential needs while 
	maintaining the highest standards of quality and safety.`,
}

const adarshViharMedia = {
	images: [
		kiitImg01, kiitImg02, kiitImg03, kiitImg04, kiitImg05, kiitImg06,
		kiitImg07, kiitImg08, kiitImg09, kiitImg10, kiitImg11, kiitImg12,
		kiitImg13, kiitImg14, kiitImg15, kiitImg16, kiitImg17, kiitImg18, kiitImg19,
	],
	videos: [],
	about: `Located in Adarsh Vihar, this residential building project exemplifies our commitment to 
	quality residential construction. The project features modern architectural design, premium finishes, 
	and comprehensive amenities. We delivered a comfortable and sustainable living space that meets the 
	highest standards of residential construction while ensuring timely completion and client satisfaction.`,
}

const manguliMedia = {
	images: [
		manguliImg01, manguliImg02, manguliImg03, manguliImg04, manguliImg05, manguliImg06,
		manguliImg07, manguliImg08, manguliImg09, manguliImg10, manguliImg11, manguliImg12,
		manguliImg13, manguliImg14,
	],
	videos: [manguliVid01],
	about: `Located in Manguli, this Utkal Mahindra Automobile project showcases our expertise in 
	automotive facility construction. The project involved building a state-of-the-art automobile 
	showroom and service center with modern infrastructure, advanced facilities, and premium finishes. 
	We delivered a facility that meets the highest standards of automotive retail and service operations.`,
}

const patrapadaFacts = [
	{ label: 'Location', value: 'Patrapada, Bhubaneswar, Odisha' },
	{ label: 'Project Type', value: 'Residential / Mixed-use' },
	{ label: 'Structure', value: 'RCC + Brick Masonry' },
	{ label: 'Status', value: 'Completed' },
]

const daruThengaFacts = [
	{ label: 'Location', value: 'DaruThenga, Bhubaneswar, Odisha' },
	{ label: 'Project Type', value: 'Residential / Mixed Use' },
	{ label: 'Structure', value: 'Multi-story RCC Framework' },
	{ label: 'Status', value: 'Completed' },
]

const adarshViharFacts = [
	{ label: 'Location', value: 'Adarsh Vihar, Bhubaneswar, Odisha' },
	{ label: 'Project Type', value: 'Residential Building' },
	{ label: 'Structure', value: 'RCC Framework + Masonry' },
	{ label: 'Status', value: 'Completed' },
]

const manguliFacts = [
	{ label: 'Location', value: 'Manguli, Bhubaneswar, Odisha' },
	{ label: 'Project Type', value: 'Automotive Showroom & Service Center' },
	{ label: 'Structure', value: 'Steel + RCC Framework' },
	{ label: 'Status', value: 'Completed' },
]

const patrapadaMilestones = [
	{ date: '2024', title: 'Groundbreaking & Site Prep' },
	{ date: ' 2024', title: 'Foundation & RCC Framing' },
	{ date: ' 2024', title: 'Masonry & Plastering' },
	{ date: ' 2024', title: 'MEP Rough-ins' },
	{ date: ' 2024', title: 'Finishing & Handover' },
]

const daruThengaMilestones = [
	{ date: '2022', title: 'Site Survey & Design Finalization' },
	{ date: '2022', title: 'Foundation & Structural Framework' },
	{ date: '2022', title: 'MEP Systems Installation' },
	{ date: '2022', title: 'Interior Finishing & HVAC' },
	{ date: '2022', title: 'Final Inspection & Handover' },
]

const adarshViharMilestones = [
	{ date: '2025', title: 'Site Planning & Design Approval' },
	{ date: '2025', title: 'Foundation & Structural Work' },
	{ date: '2025', title: 'Masonry & Electrical Work' },
	{ date: '2025', title: 'Interior Finishing & Plumbing' },
	{ date: '2025', title: 'Final Inspection & Handover' },
]

const manguliMilestones = [
	{ date: '2023', title: 'Site Survey & Design Planning' },
	{ date: '2023', title: 'Foundation & Steel Structure' },
	{ date: '2023', title: 'MEP & HVAC Installation' },
	{ date: '2023', title: 'Interior & Exterior Finishing' },
	{ date: '2023', title: 'Equipment Installation & Handover' },
]

const patrapadaLocation = {
	address: 'Patrapada, Bhubaneswar, Odisha',
	mapQuery: 'Patrapada, Bhubaneswar, Odisha'
}

const daruThengaLocation = {
	address: 'DaruThenga, Bhubaneswar, Odisha',
	mapQuery: 'DaruThenga, Bhubaneswar, Odisha'
}

const adarshViharLocation = {
	address: 'Adarsh Vihar, Bhubaneswar, Odisha',
	mapQuery: 'Adarsh Vihar, Bhubaneswar, Odisha'
}

const manguliLocation = {
	address: 'Manguli, Bhubaneswar, Odisha',
	mapQuery: 'Manguli, Bhubaneswar, Odisha'
}

const ProjectDetail = () => {
	const { slug } = useParams()
	const navigate = useNavigate()
	const project = projects.find(p => slugify(p.title) === slug)



	if (!project) {
		return (
			<div className="section-container">
				<h1 className="section-title">Project not found</h1>
				<Link to="/" className="custom-btn-primary">Go Home</Link>
			</div>
		)
	}

	const isPatrapada = slug === 'residential-building-patrapada'
	const isDaruThenga = slug === 'residential-building-daruthenga'
	const isAdarshVihar = slug === 'residential-building-adarsh-vihar'
	const isManguli = slug === 'utkal-mahindra-automobile-manguli'
	
	let media = { images: [], videos: [], about: '' }
	let facts = []
	let milestones = []
	let location = { address: '', mapQuery: '' }
	
	if (isPatrapada) {
		media = patrapadaMedia
		facts = patrapadaFacts
		milestones = patrapadaMilestones
		location = patrapadaLocation
	} else if (isDaruThenga) {
		media = daruThengaMedia
		facts = daruThengaFacts
		milestones = daruThengaMilestones
		location = daruThengaLocation
	} else if (isAdarshVihar) {
		media = adarshViharMedia
		facts = adarshViharFacts
		milestones = adarshViharMilestones
		location = adarshViharLocation
	} else if (isManguli) {
		media = manguliMedia
		facts = manguliFacts
		milestones = manguliMilestones
		location = manguliLocation
	}
	const related = projects.filter(p => slugify(p.title) !== slug).slice(0, 3)

	return (
		<main className="min-h-screen bg-base-100">
			<section className="section-container">
				<div className="max-w-6xl mx-auto">
					{/* Back Button */}
					<div className="mb-6">
						<button 
							onClick={() => navigate(-1)} 
							className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-4"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="m15 18-6-6 6-6"/>
							</svg>
							Back to Previous Page
						</button>
					</div>
					
					<h1 className="text-3xl md:text-5xl font-bold mb-6 text-neutral">
						<span className="text-primary">{project.title}</span>
					</h1>
					<div className="rounded-2xl overflow-hidden shadow-xl border border-base-300 mb-8">
						<img src={project.image} alt={project.title} className="w-full h-auto object-cover" loading="lazy" />
					</div>
					<p className="text-neutral/80 text-lg leading-relaxed mb-8">
						{project.description}
					</p>

					{(isPatrapada || isDaruThenga || isAdarshVihar || isManguli) && (
						<>
							{/* Overview */}
							<div className="bg-base-100 border border-base-300 rounded-xl p-6 md:p-8 shadow-sm mb-10">
								<h2 className="text-2xl font-semibold mb-4 text-neutral">Project Overview</h2>
								<p className="text-neutral/80 leading-relaxed">
									{media.about}
								</p>
							</div>

							{/* Facts */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
								{facts.map((f, i) => (
									<div key={i} className="bg-base-100 border border-base-300 rounded-xl p-4 shadow-sm">
										<p className="text-neutral/60 text-sm">{f.label}</p>
										<p className="text-neutral font-semibold">{f.value}</p>
									</div>
								))}
							</div>

							{/* Videos */}
							{media.videos.length > 0 && (
								<div className="mb-12">
									<h2 className="text-2xl font-semibold mb-4 text-neutral">Project Videos</h2>
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
										{media.videos.map((src, i) => (
											<div key={i} className="rounded-xl overflow-hidden border border-base-300 bg-base-100 shadow-sm">
												<video src={src} controls preload="metadata" className="w-full h-auto" poster={media.images[i % media.images.length]} />
											</div>
										))}
									</div>
								</div>
							)}

							{/* Gallery */}
							{media.images.length > 0 && (
								<div className="mb-12">
									<h2 className="text-2xl font-semibold mb-4 text-neutral">Photo Gallery</h2>
									<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
										{media.images.map((src, i) => (
											<div key={i} className="rounded-lg overflow-hidden border border-base-300 bg-base-100">
												<img src={src} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
											</div>
										))}
									</div>
								</div>
							)}

							{/* Milestones */}
							<div className="mb-12">
								<h2 className="text-2xl font-semibold mb-4 text-neutral">Project Milestones</h2>
								<div className="space-y-4">
									{milestones.map((m, i) => (
										<div key={i} className="flex items-start gap-3">
											<div className="mt-1 w-2 h-2 rounded-full bg-primary"></div>
											<div>
												<p className="text-neutral/60 text-sm">{m.date}</p>
												<p className="text-neutral font-medium">{m.title}</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Location */}
							<div className="mb-12">
								<h2 className="text-2xl font-semibold mb-4 text-neutral">Location</h2>
								<p className="text-neutral/80 mb-4">{location.address}</p>
								<div className="rounded-xl overflow-hidden border border-base-300 bg-base-100 shadow-sm">
									<iframe
										title={`${project.title} Map`}
										width="100%"
										height="360"
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
									></iframe>
								</div>
							</div>

							{/* Related Projects */}
							{related.length > 0 && (
								<div className="mb-4">
									<h2 className="text-2xl font-semibold mb-4 text-neutral">Related Projects</h2>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
										{related.map((p) => (
											<Link 
												key={p.title} 
												to={`/projects/${slugify(p.title)}`}
												className="rounded-xl overflow-hidden border border-base-300 bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
											>
												<div className="relative overflow-hidden">
													<img 
														src={p.image} 
														alt={p.title} 
														className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" 
														loading="lazy" 
													/>
													<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
												</div>
												<div className="p-4">
													<h3 className="font-semibold text-neutral line-clamp-1 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
													<p className="text-neutral/70 text-sm line-clamp-2">{p.description}</p>
													<div className="mt-3 text-primary font-medium text-sm">View Project →</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							)}
						</>
					)}

					<div className="flex gap-4 mt-8">
						<button onClick={() => navigate(-1)} className="custom-btn-outline">Back to Previous Page</button>
						<Link to="/" className="custom-btn-outline">Back to Home</Link>
						<Link to="/contact" className="custom-btn-primary">Contact Us</Link>
					</div>
				</div>
			</section>
		</main>
	)
}

export default ProjectDetail 
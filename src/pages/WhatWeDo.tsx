import { Header } from "../components/Header"
import { NewsLetter } from "../components/NewsLetter"
import { Footer } from "../components/Footer"
import introWhatWeDo from "../assets/images/intro-whatwedo.png"
import why1 from "../assets/images/why-1.png"
import why2 from "../assets/images/why-2.png"

export const WhatWeDo = () => {
	return (
		<div className="max-w-[1360px] mx-auto bg-white"> 
			<Header />
			<div className="flex items-center space-x-72 p-28">
				<div className="mt-8">
					<h1 className="text-orange100 text-5xl font-normal mb-2.5">WHAT WE DO</h1>
					<p className="text-xl leading-9 font-normal">We make safety education accessible to everyone</p>
					<button className="rounded-3xl px-24 py-3 bg-sky-950 text-white my-8">OUR CLASSES</button>
				</div>
				<img src={introWhatWeDo} alt="" />
			</div>

			<div className="bg-orange-200 h-120 mx-auto pb-20">			
				<div className="flex flex-col items-center px-36 text-center">
					<p className="pt-28 px-28 pb-10 leading-7">
						Safety is a daily issue for many people around the world. Every day, intimidation, 
						lack of safety awareness and fear impact on people’s lives, especially amongst the 
						young and the vulnerable. Despite this, much education on safety and self-defence 
						is expensive and geared at limited groups and demographics. 
						This often makes safety education inaccessible for those who need it most.
					</p>
					<img className="pb-10" src="https://www.mustbeme.org/wp-content/themes/mustbeme/assets/images/arrow-down-blue.svg"></img>
					<h1 className="text-orange100 text-4xl pb-6">OUR SOLUTION</h1>
					<p className="px-48 leading-7">
						Our solution is to provide access to safety education and support to anyone who needs it, 
						regardless of gender, age, ethnicity or geography.
					</p>
					<p className="pt-10 px-48 leading-7 pb-10">
						<strong>We provide completely free, stand-alone safety-improvement classes </strong> 
						with the aim of empowering people to assess danger and avoid potentially harmful situations. 
						Where avoidance is not possible, we teach them the skills and confidence to react calmly and proportionately.
					</p>
				</div>
			</div>

			<div className="bg-blue-950 h-120 flex flex-col items-center pt-16">
				<h1 className="mx-auto text-4xl pb-10 text-white">HOW WE DO IT</h1>
				<div className="flex flex-row " style={{ opacity: 1, }}>
					<div className="item slick-slide slick-cloned " style={{width: 310}}>
						<img width="153" height="184" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-3.png" className="attachment-thumbnail size-thumbnail"/>					
					</div>
					<div className="item slick-slide slick-cloned" style={{width: 310}}>
						<img width="157" height="189" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-2.png" className="attachment-thumbnail size-thumbnail"/>					
					</div>
					<div className="item slick-slide slick-cloned" style={{width: 310}}>
						<img width="147" height="177" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon.png" className="attachment-thumbnail size-thumbnail"/>					
					</div>
					
					{/* <div className="item slick-slide slick-cloned slick-active" data-slick-index="-1" id="" aria-hidden="false" style={{width: 310}}>
						<img width="153" height="184" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-3.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-current slick-active slick-center" data-slick-index="0" aria-hidden="false" style={{width: 310}}>
						<img width="157" height="189" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-2.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{width: 310}}>
						<img width="147" height="177" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide" data-slick-index="2" aria-hidden="true" style={{width: 310}}>
						<img width="153" height="184" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-3.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide" data-slick-index="3" aria-hidden="true" style={{width: 310}}>
						<img width="157" height="189" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-2.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide" data-slick-index="4" aria-hidden="true" style={{width: 310}}>
						<img width="147" height="177" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide" data-slick-index="5" aria-hidden="true" style={{width: 310}}>
						<img width="153" height="184" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-3.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true" style={{width: 310}}>
						<img width="157" height="189" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-2.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true" style={{width: 310}}>
						<img width="147" height="177" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-cloned slick-center" data-slick-index="8" id="" aria-hidden="true" style={{width: 310}}>
						<img width="153" height="184" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-3.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" style={{width: 310}}>
						<img width="157" height="189" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-2.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" style={{width: 310}}>
						<img width="147" height="177" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div>
					<div className="item slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" style={{width: 310}}>
						<img width="153" height="184" src="https://www.mustbeme.org/wp-content/uploads/2021/09/slider-icon-3.png" className="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" />					
					</div> */}
				</div>
				<p className="pt-10 pb-10 text-white">Our classes are unique. Created by our chair and founder, Mayra, they are designed to work for people of all backgrounds and abilities.</p>
			</div>

			<div className="bg-white h-120 flex flex-col items-center pt-16">
				<h1 className="text-orange100 text-4xl pb-5">WHY WE DO IT</h1>
				<p>We believe that everyone has the right to feel safe.</p>
			</div>

			<div className="bg-white flex flex-row items-center px-44 gap-12 pb-10 leading-7">
				<img src={why1} alt="" />
				<p>
					Whilst working with young people and vulnerable groups around the world, 
					our founder Mayra noticed huge gaps in the availability of personal safety education. 
					This lack of access to resources – and the potential impact on communities – motivated her to create change.
				</p>
			</div>

			<div className="bg-white flex flex-row items-center px-44 pb-20 gap-12 leading-7">
				<div className="font-normal">
					<p>
						She set out to create a programme that would work for all people, not just those who could pay for expensive self-defence classes. 
						It had to involve a <strong>short time commitment</strong>, making it <strong>flexible</strong> enough for busy students and communities. The programme needed to be 
						<strong> universally understandable</strong> as well as <strong>culturally and physically inclusive</strong>. 
					</p>
					<p className="pt-10">
						Must Be Me was the result of this ambition and has grown 
						to become a recognised safety-education charity, with successful projects in the UK and Kenya to date.
					</p>
					<button className="rounded-3xl px-24 py-3 bg-sky-950 text-white my-8">GET IN TOUCH</button>
				</div>
				<img src={why2} alt="" />
			</div>

			
			<NewsLetter />
			<Footer />

			</div>
		
	)
}
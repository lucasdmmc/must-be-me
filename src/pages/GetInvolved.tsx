import getInvolvedIntroImage from "../assets/images/intro-getinvolved.png"
import volunteerImage from "../assets/images/volunteer.png"
import donateImage from "../assets/images/donate.png"
import { BlueButton } from "../components/BlueButton"

export const GetInvolved = () => {

	return(
		<div>
			<div className="flex justify-center">
				<img src={getInvolvedIntroImage} alt="" style={{width: 600}} />
			</div>
			<div className="flex flex-col bg-lightBrown">
				
				<div className="text-center px-64 pt-10 pb-20">
					<h1 className="text-5xl text-orange100">GET INVOLVED</h1>
					<p className="pt-4 leading-7">
						Do you believe that safety education should be freely available to 
						anyone who needs it? Are you looking for a way to make a real difference 
						and improve the lives of others? Join us in our mission to make the 
						world a safer place for everyone.
					</p>
				</div>

				<div className="flex justify-center px-32 gap-28 py-20">
					<img src={volunteerImage} alt="" style={{width: 428}} />
					<div>
						<h1 className="text-4xl text-orange100">VOLUNTEER</h1>
						<p className="py-4 leading-7">
							Our terrific team of volunteers makes Must Be Me possible. 
							By volunteering with us, you can help get crucial personal 
							safety training to those who need it.
						</p>
						<p className="leading-7">
							Are you a keen fundraiser? Do you want to help with classes 
							or could you be our next incredible instructor? Whatever the 
							time and talent you have available, there’s a role for you. 
							Click the volunteer button to discover how you can make a difference.
						</p>
						<BlueButton label="I WANT TO VOLUNTEER" />
					</div>
				</div>

				<div className="flex px-24 pb-24 pt-12">
					<div>
						<h1 className="text-darkBlue text-4xl">DONATE</h1>
						<p className="py-4">
							You can help us create a world where safety education is free, inclusive and effective.
						</p>
						<p className="pt-4">
							Our teams are delivering accessible personal safety training to those who need it. 
							Give now and help us improve lives by getting our expert training staff and courses 
							to where they’re needed.
						</p>
						<BlueButton label="DONATE NOW" />
					</div>
					<img src={donateImage} alt="" style={{width: 528}} />
				</div>

			</div>
		</div>
	)
}
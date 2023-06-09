import faq from '../assets/images/faq.png'
import faqOpen from '../assets/images/faq-open.png'
import { useState } from 'react'

export const Faqs = () => {
  const [toggleFqaOne, setToggleFqaOne] = useState(false)
  const [toggleFqaTwo, setToggleFqaTwo] = useState(false)
  const [toggleFqaThree, setToggleFqaThree] = useState(false)
  const [toggleFqaFour, setToggleFqaFour] = useState(false)
  const [toggleFqaFive, setToggleFqaFive] = useState(false)
  const [toggleFqaSix, setToggleFqaSix] = useState(false)
  const [toggleFqaSeven, setToggleFqaSeven] = useState(false)
  const [toggleFqaEight, setToggleFqaEight] = useState(false)
  const [toggleFqaNine, setToggleFqaNine] = useState(false)
  const [toggleFqaTen, setToggleFqaTen] = useState(false)
  const [toggleFqaEleven, setToggleFqaEleven] = useState(false)
  const [toggleFqaTwelve, setToggleFqaTwelve] = useState(false)
  const [toggleFqaThirteen, setToggleFqaThirteen] = useState(false)
  const [toggleFqaFourteen, setToggleFqaFourteen] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center mt-14 mb-24">
      <strong className="uppercase text-orange100 text-5xl mb-10">Faqs</strong>

      <div className="bg-darkBrown w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-darkBlue text-xl">
            How do I book a class?
          </strong>
          {toggleFqaOne ? (
            <img
              onClick={() => setToggleFqaOne(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaOne(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaOne && (
          <span className="text-base w-[400px]">
            You can book onto a class using the Book a Class link at the bottom
            of this page.
          </span>
        )}
      </div>

      <div className="bg-darkBlue w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">
            Do I need to have a certain level of fitness to attend a class?
          </strong>
          {toggleFqaTwo ? (
            <img
              onClick={() => setToggleFqaTwo(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaTwo(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaTwo && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-justify text-white">
              No, our classes are designed to be accessible for all levels of
              fitness and ability.
            </span>
            <span className="text-base text-justify text-white">
              If you have a disability that affects your daily movement and
              activities, please email our team before the session and we will
              do our best to adapt the class content so that you get the most
              out of the experience.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBrown w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-darkBlue text-xl">
            How long is each session? How many do I need to attend?
          </strong>
          {toggleFqaThree ? (
            <img
              onClick={() => setToggleFqaThree(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaThree(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaThree && (
          <div className="w-[1100px]">
            <span className="text-base text-justify">
              Each one-hour class is a complete stand-alone course. There is no
              need to attend multiple sessions. Classes were designed in this
              way to enable more people to fit them into their busy lives and
              ensure that our attendees get the maximum possible benefit with a
              minimal time commitment.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBlue w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">
            Are Must Be Me classes really free?
          </strong>
          {toggleFqaFour ? (
            <img
              onClick={() => setToggleFqaFour(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaFour(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaFour && (
          <span className="text-base text-white">
            Yes. We are committed to removing barriers to safety education,
            including cost. You will never be asked to pay for a Must Be Me
            class
          </span>
        )}
      </div>

      <div className="bg-darkBrown w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-darkBlue text-xl">
            Are your classes Covid-19 safe?
          </strong>
          {toggleFqaFive ? (
            <img
              onClick={() => setToggleFqaFive(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaFive(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaFive && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-justify">
              We put safety first at all times. Our sessions are conducted with
              group sizes appropriate for the venue. We regularly check the
              applicable government guidelines and comply with guidance on
              masks, hand-washing and appropriate social distancing at the time
              of the class. We will be instigating Track and Trace for our
              classes for as long as is legally required.
            </span>
            <span className="text-base text-justify">
              If you are unsure whether to attend due to Covid-19 or another
              illness, please get in touch through the Contact us page and we
              will be happy to advise you and rebook your class if needed.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBlue w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">
            Isn’t it dangerous to teach self-defence in just one hour?
          </strong>
          {toggleFqaSix ? (
            <img
              onClick={() => setToggleFqaSix(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaSix(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaSix && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-white text-justify ">
              At Must Be Me we wholeheartedly agree that physical self-defence
              techniques should only be used in extreme situations where there
              is no alternative.
            </span>
            <span className="text-base text-white text-justify">
              We focus heavily on avoiding or escaping dangerous situations,
              teaching only those self-defence manoeuvres that could help an
              individual escape should the worst happen. Our course content is
              well researched and based on best practice. We teach our physical
              self-defence elements in a respectful manner, designed to empower
              and reassure rather than to inspire dangerous false confidence.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBrown w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-darkBlue text-xl">
            Where are your classes held? Are your venues wheelchair accessible?
          </strong>
          {toggleFqaSeven ? (
            <img
              onClick={() => setToggleFqaSeven(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaSeven(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaSeven && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-justify">
              We use a variety of venues including community centres, halls and
              schools.
            </span>
            <span className="text-base text-justify">
              We are currently working on adapting our classes to best serve
              those using mobility aids, including wheelchairs. Please get in
              touch via the Contact us page to enquire about accessible courses.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBlue w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">
            Do you provide classes for larger groups?
          </strong>
          {toggleFqaEight ? (
            <img
              onClick={() => setToggleFqaEight(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaEight(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaEight && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-white text-justify ">
              We do. For larger groups, please get in touch via the Contact us
              page to ensure we can accommodate you all together. For groups of
              fewer than 5 people, we recommend using the online booking system
              individually.
            </span>
            <span className="text-base text-white text-justify">
              All our class sizes are planned in line with Covid-19 regulations
              at the time of delivery.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBrown w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-darkBlue text-xl">
            How many students can attend each session?
          </strong>
          {toggleFqaNine ? (
            <img
              onClick={() => setToggleFqaNine(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaNine(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaNine && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-justify">
              Numbers may vary depending on the venue, but we always maintain a
              staff-to-candidate ratio of 1 to 15 to ensure that you get the
              support you need.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBlue w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">
            There are no classes in my area. What can I do?
          </strong>
          {toggleFqaTen ? (
            <img
              onClick={() => setToggleFqaTen(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaTen(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaTen && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-white text-justify ">
              We are sorry we haven’t reached your area just yet – send us an
              email through the Contact us page and we’ll see what we can do.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBrown w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-darkBlue text-xl">
            Do I need to be fluent in English to attend?
          </strong>
          {toggleFqaEleven ? (
            <img
              onClick={() => setToggleFqaEleven(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaEleven(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaEleven && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-justify">
              We try to keep things as simple as possible for all our learners –
              if you’re able to have a conversation in English, you should be
              able to understand our classes. If you’re not sure whether your
              level of English is suitable, please get in touch and we’ll make
              sure the session is right for you.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBlue w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">
            Can you provide classes for communities who do not speak English?
          </strong>
          {toggleFqaTwelve ? (
            <img
              onClick={() => setToggleFqaTwelve(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaTwelve(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaTwelve && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-white text-justify ">
              Yes. We feel strongly that language shouldn’t be a barrier to
              entry, and we have instructors able to teach in a variety of
              languages including Spanish, French and Turkish. We can also
              provide translators if needed – get in touch via the Contact us
              page and we’ll do our best to accommodate your language needs
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBrown w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-darkBlue text-xl">
            I need training for specific safety concerns. Is this something Must
            Be Me can provide?
          </strong>
          {toggleFqaThirteen ? (
            <img
              onClick={() => setToggleFqaThirteen(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaThirteen(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaThirteen && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-justify">
              Absolutely. We are experienced in adding bespoke elements to
              augment our Must Be Me training to fit the needs of specific
              cultures, communities and circumstances.
            </span>
            <span className="text-base text-justify">
              Our previous projects have involved working closely alongside
              different communities, businesses and groups of vulnerable people
              to create classes covering elements of safety improvement that are
              specific to their requirements. However, Must Be Me courses are
              designed to teach civilian personal safety – they are not suitable
              for those seeking self-defence training in a professional
              capacity, for example military staff or war journalists...
            </span>
            <span className="text-base text-justify">
              Get in touch through our Contact us page to see how we can help
              with your specific safety-education needs.
            </span>
          </div>
        )}
      </div>

      <div className="bg-darkBlue w-full py-4 px-12">
        <div className="flex justify-between items-center">
          <strong className="text-white text-xl">
            How do you ensure the safety of participants, especially children
            and the vulnerable?
          </strong>
          {toggleFqaFourteen ? (
            <img
              onClick={() => setToggleFqaFourteen(false)}
              className="cursor-pointer"
              src={faqOpen}
              alt=""
            />
          ) : (
            <img
              onClick={() => setToggleFqaFourteen(true)}
              className="cursor-pointer"
              src={faq}
              alt=""
            />
          )}
        </div>
        {toggleFqaFourteen && (
          <div className="flex flex-col gap-4 w-[1100px]">
            <span className="text-base text-white text-justify ">
              We take pride in prioritising the safeguarding and wellbeing of
              our service users. You can access our Children and Vulnerable
              Persons policy here or please feel free to contact us for further
              information
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

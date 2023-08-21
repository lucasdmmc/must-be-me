import { useState } from 'react'
import { CButton, CCard, CCardBody, CCollapse } from "@coreui/react"
import { CaretDown } from 'phosphor-react'
import { faqs } from '../data/faq'

export const NewFaq = () => {
  const [visibleStates, setVisibleStates] = useState(faqs.map(() => false));

  const toggleVisible = (index: number) => {
    const newVisibleStates = [...visibleStates];
    newVisibleStates[index] = !newVisibleStates[index];
    setVisibleStates(newVisibleStates);
  };

  return (
    <div className='my-5 flex flex-col rounded-none'>
      <strong className="uppercase text-center text-orange100 text-3xl lg:text-5xl mb-10">
        Faqs
      </strong>
      {faqs.map((faq, index) => (
        <div key={faq.id}>
          <CCard className={`flex flex-row-reverse items-center rounded-none border-none ${index % 2 === 0 ? 'bg-darkBlue' : 'bg-darkBrown'}`}>
            <CButton className={`${visibleStates[index] && 'rotate-180 transition duration-300'} transition duration-300 border-none bg-transparent text-black`} onClick={() => toggleVisible(index)}>
              <CaretDown className={`${index % 2 === 0 ? 'text-white' : 'text-black'}`} />
            </CButton>
            <CCardBody className={`text-base font-semibold md:text-xl ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
              {faq.title}
            </CCardBody>
          </CCard>
          <CCollapse visible={visibleStates[index]}>
          <CCard className={`border-none rounded-none ${index % 2 === 0 ? 'bg-darkBlue text-white' : 'bg-darkBrown'}`}>
              <CCardBody>
                {faq.description}
              </CCardBody>
            </CCard>
          </CCollapse>
        </div>
      ))}
    </div>
  );
}

//className='flex flex-row-reverse items-center border-none bg-darkBrown
//className='text-darkBlue text-base font-semibold md:text-xl
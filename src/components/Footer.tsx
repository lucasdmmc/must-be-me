import logoFooter from '../assets/images/logo-footer.svg'
import logoInstagram from '../assets/images/icon-instagram.svg'

import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="bg-darkBlue px-5 pt-10 pb-20  sm:p-20">
      <div className="flex justify-between items-center mb-10">
        <img src={logoFooter} alt="" />
        <Link to="/">
          <img src={logoInstagram} alt="" />
        </Link>
      </div>
      <span className="text-[14px] sm:text-base text-white leading-relaxed">
        Copyright 2023 Must Be Me. <br />
        Registered Charity in England & Wales (No. 1179393). <br />
        Privacy Policy. Children & Vulnerable persons policy <br />
        Registered Office: Office T15 Hurlingham Studio Ranelagh Gardens London
        SW6 3PA
      </span>
    </div>
  )
}

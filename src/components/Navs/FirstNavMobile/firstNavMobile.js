import React from 'react'
import { Link } from "react-router-dom";
import YeshteryMobile from "../../../Icons/YeshteryMobile";
import './firstNavMobileStyle.scss'

const FirstNavMobile = () => {
    return (
        <div className="yeshtry-mobile">
        <div className="yeshtry-mobile-container">
        <Link>
          <YeshteryMobile />
        </Link>
        </div>
      </div>
    )
}

export default FirstNavMobile

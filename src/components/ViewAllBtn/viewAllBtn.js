import React from 'react';
import { Link } from 'react-router-dom';
import './viewAllBtnStyle.scss'

const ViewAllBtn = () => {
    return (
        <Link className='view-all-btn'>
        <strong>View All</strong>
        </Link>
    )
}

export default ViewAllBtn

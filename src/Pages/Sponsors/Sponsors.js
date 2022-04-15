import React from 'react'
import NaviBar from '../Components/Navbar/Navbar'
import SponsorsCard from './Cards/SponsorsCard'

export default function Sponsors() {
  return (
    <div>
        <NaviBar/>
        <div className='sponsors-section'>
            <SponsorsCard
            />
        </div>
    </div>
  )
}

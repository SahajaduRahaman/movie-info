import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='left-footer'>Movie Section
            <div className='item'>Hollywood</div>
            <div className='item'>Bollywood</div>
            <div className='item'>Animated</div>
            <div className='item'>South Movies</div>
        </div>
        <div className='center-footer'>Show Section
            <div className='item'>Tv Shows</div>
            <div className='item'>Drame Series</div>
            <div className='item'>Sports</div>
            <div className='item'>Web Series</div>
        </div>
        <div className='right-footer'>OTT Section
            <div className='item'>Netflix</div>
            <div className='item'>Amazon Prime</div>
            <div className='item'>HBO Max</div>
            <div className='item'>Disney Plus</div>
        </div>
    </div>
  )
}

export default Footer
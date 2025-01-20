import React from 'react'
import HotelCardItem from './HotelCardItem'

const Hotels = ({ trip }) => {
    return (
        <div>
            <h2 className='font-bold text-lg md:text-xl mt-0 md:mt-2 '>Hotel Recommendation</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-3'>

                {trip?.TripData?.hotels?.map((hotel, index) => (
                    <HotelCardItem hotel={hotel} key={index}/>
                
                ))}


            </div>
        </div>
    )
}

export default Hotels

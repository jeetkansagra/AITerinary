import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PlaceCardItem = ({ place }) => {

  const [photoUrl, setPhotoUrl] = useState()
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place])

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName
    }

    const result = await GetPlaceDetails(data).then(resp => {
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[4].name)
      setPhotoUrl(PhotoUrl);
    })
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'>
      <div className='border rounded-lg p-2 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-xl cursor-pointer'>
        <img src={photoUrl ? photoUrl : '/travel.jpg'} className='w-[150px] h-[150px] rounded-xl ' alt="" />

        <div>
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-gray-500'>{place.placeDetails}</p>
          <p className='mt-1.5'>🕒 {place.travelTime}</p>
          <p className='mt-1.5'>🎫 {place.ticketPricing === 0
            ? "Free"
            : place.ticketPricing === "Varies"
              ? "Varies"
              : '$' + place.ticketPricing}
          </p>

        </div>
      </div>
    </Link>

  )
}

export default PlaceCardItem

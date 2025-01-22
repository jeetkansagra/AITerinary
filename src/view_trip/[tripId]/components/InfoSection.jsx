import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'  // Added useState import
import { IoIosSend } from "react-icons/io";



function InfoSection ({ trip }) {

    const[photoUrl,setPhotoUrl] =useState()
    useEffect(()=>{
        trip&&GetPlacePhoto();
    },[trip])
        
    const GetPlacePhoto =async() =>{
        const data={
            textQuery:trip?.userSelection?.location?.label
        }

        const result=await GetPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[4].name)

            const PhotoUrl=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[4].name)
            setPhotoUrl(PhotoUrl);
        })
    } 
      
    return (
        <div>
            <img src={photoUrl ? photoUrl :'/travel.jpg'} alt="" className='h-[300px] w-full object-cover rounded-lg' />

            <div className='flex justify-between items-end sm:items-center'> 
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-lg md:2xl: '>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-1 md:gap-5 sm:gap-2 pt-1  '>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-base lg:text-xl'>🗓️ {trip.userSelection?.noOfDays} Days</h2>

                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-base lg:text-xl'>💰 {trip.userSelection?.budget} Budget</h2>

                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-base lg:text-xl'>🧳 No. of Traveler: {trip.userSelection?.noOfTraveller}
                        </h2>
                    </div>
                </div>
                <div className='flex justify-end pl-8 mb-4 items-end'>
                    <Button ><IoIosSend /></Button>
                </div>
                

            </div>

        </div>
    )
}

export default InfoSection

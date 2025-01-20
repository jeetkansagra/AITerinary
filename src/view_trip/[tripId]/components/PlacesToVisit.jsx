import PlaceCardItem from "./PlaceCardItem.jsx"

const PlacesToVisit = ({trip}) => {
   

  return (
    <div>
      <h2 className='font-bold text-lg md:text-xl mt-2 md:mt-4'>Places To Visit</h2>
        
      <div>
        {trip?.TripData?.itinerary.map((item,index) =>(
            <div key={index} className="mt-2">
                <h2 className='font-medium text-lg'>{item.day}</h2>
                <div className="grid lg:grid-cols-2 gap-4">
                {item?.plan?.map((place,index) =>(
                    <div key={index}  className="my-1.5">
                        <h2 className="font-medium text-sm text-orange-600">{place.time}</h2>
                        <PlaceCardItem place={place}/>
                    </div>
                ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit

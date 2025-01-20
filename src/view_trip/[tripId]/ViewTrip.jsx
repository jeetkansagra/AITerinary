import { db } from '@/service/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import Footer from './components/Footer';

const ViewTrip = () => {

    const {tripId} = useParams();

    const [trip,setTrip]=useState([])

    useEffect(() =>{
        tripId && GetTripData();
    },[tripId])

    const GetTripData =async() =>{
        const docRef =doc(db,"AITrips",tripId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document:",docSnap.data())
            setTrip(docSnap.data())
        }else{
            console.log("No Such Document");
            toast('No trip Found!')
        }
    }
    
    return (
    <div className='px-10 pt-3 pb-8 md:px-20 lg:px-32 xl:px-40'>
      {/* Information Section */}
        <InfoSection trip={trip} />

      {/* Recommended Hotels */}
        <Hotels trip={trip}/>


      {/* Daily Plan */}
        <PlacesToVisit trip={trip}/>

        {/* Footer */}
        <Footer trip={trip}/>
    </div>
  )
}

export default ViewTrip

import { db } from '@/service/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import UserTripCard from './components/UserTripCard';

const MyTrip = () => {


    useEffect(()=>{
       GetUserTrips(); 
    },[])
    const navigation = useNavigation();
    const[userTrips,setUserTrips]= useState([])

    //use to get all latest trips
    const GetUserTrips=async()=>{
        const user=JSON.parse(localStorage.getItem('user'));
        
        if(!user)
        {
            navigation('/');
            return ;
        }
        
        const q=query(collection(db,'AITrips'),where('userEmail','==',user?.email))
        const querySnapshot = await getDocs(q);
        setUserTrips([])
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prevVal =>[...prevVal,doc.data()])
        });
    }


  return (
    <div className='sm:px-14 md:px-24 lg:px-56 px-5 mt-5 md:mt-8 lg:mt-10 '>
      <h2 className='font-bold text-xl md:text-2xl mb-2 lg:text-3xl highlight-brush'>My Trips</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-5'> 
        {userTrips?.length>0 ? userTrips.map((trip,index)=>(
            <UserTripCard  trip={trip} key={index} />
        ))
        : [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'> 

          </div>
        ))
        }
      </div>
    </div>
  )
}

export default MyTrip

import React from 'react'
import ReviewForm from './ReviewForm'
import DisplayReview from './DisplayReview'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchNotices } from '../utils/fetchData';
import { useEffect, useState } from 'react';
import {hexToString} from 'viem'


const Reviews = () => {
  const [notices, setNotices] = useState([]);

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      
    });
  };

  const getData = async () => {
    try {
      const noticesData = await fetchNotices();
      setNotices(JSON.parse(hexToString(findHighestTxId(noticesData).node.payload)).data);
      console.log("Notices fetched successfully:", JSON.parse(hexToString(findHighestTxId(noticesData).node.payload)).data);
    } catch (error) {
      console.error("Failed to fetch notices:", error);
    }
  };

  useEffect(() => {

    getData();
  }, []);
  

  function findHighestTxId(objects) {
    if (!Array.isArray(objects) || objects.length === 0) {
      return null;
    }
  
    return objects.reduce((maxObj, currentObj) => {
      return currentObj.node.input.index > maxObj.node.input.index ? currentObj : maxObj;
    });
  }


  return (
    <div className='border mt-12 mx-4 md:mx-10 lg:mx-20 p-6 md:p-12 lg:p-20 bg-white rounded-3xl'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-cyan-600 mb-8'>Reviews about Noozzule</h1>
      <div className='border mt-6 md:mt-10 min-h-fit h-80 md:h-80  max-h-fit rounded-3xl'>
        <div>
          <ToastContainer />
        </div>
        <div className=' p-10'>
            {
              notices ? notices.map((review) => (
                <DisplayReview key={review.id} review={review.review} sender={review.sender} txId={review.id} />

              )) : <p> No coments available yet</p>
            }
        </div>
      </div>
      <div className='mt-6 md:mt-10'>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Reviews;

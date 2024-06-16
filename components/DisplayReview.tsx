import React from 'react'



interface DisplayReviewProps {
  review: string;
  sender: string;
  txId: number;
}

const DisplayReview: React.FC<DisplayReviewProps> = ({ review, txId, sender }) => {

  function isEven(number: number): boolean {
    return number % 2 === 0;
  }

  console.log(review);
  return (
    <div className={`border mb-4 py-2 px-5 rounded-xl max-w-max w-fit ${isEven(txId) ? 'ml-auto' : 'mr-auto'}`}>
        <div className='font-thin text-xs mb-2 text-teal-800'>{sender}</div>
        <div className='font-medium font-mono'>{review}</div>
    </div>

  )
}

export default DisplayReview
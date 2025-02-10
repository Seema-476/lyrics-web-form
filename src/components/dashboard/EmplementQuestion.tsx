import React from 'react'

const EmplementQuestion = () => {
    const Question = [
        {
          list: {
            data: [
              {
                title: "What is the capital of India?",
                options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
              },
            ],
          },
        },
      ];
  return (
    <div className='bg-gray-400 py-12'>
    <p className='md:text-4xl text-2xl text-center font-medium'>
      {Question[0].list.data[0].title} {Question[0].list.data[0].options[0]}
    </p>
  </div>
  )
}

export default EmplementQuestion

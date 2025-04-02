import React from 'react'

const Faq = (props) => {
  return (
  <div className='bg-white min-h-[25vh] flex flex-col gap-0 justify-center rounded-3xl'>
      <div className='mx-5 font-semibold  p-2  text-2xl lg:text-center'>{props.ques}</div>
      <div className='mx-5 font-sans p-2 text-xl lg:text-center'>{props.ans}</div>
    </div>
  )
}

export default Faq

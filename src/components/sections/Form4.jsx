import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { section2 } from '../../app/activeSectionSlice'


function Form4() {
  const section = useSelector((state) => state.active.section)
  const planConfig = useSelector((state) => state.plan.planDetails)
  const dispatch = useDispatch()
  if (section !== 4) return null //thought of a more concise way to conditionally render the section components

  return (
    <div className="container4 flex flex-col p-2 gap-4">
      <div className="top font-medium text-5xl text-primaryDark ">Order Summary</div>
      <div className="order-summary text-gray-400">Double Check you order and make sure all is set before confirming</div>
      <div className="total flex items-center justify-between">
        <div>
          <p>{`${planConfig.planDetails} (${planConfig.duration})`}</p>
          <button 
          className='underline hover:font-bold ease-in-out duration-300 hover:text-lg font-semibold'
          onClick={() => dispatch(section2())}>Change</button>
        </div>
        <h2 className='text-primaryDark'>${planConfig.price}</h2>
      </div>
    </div>
  )
}

export default Form4
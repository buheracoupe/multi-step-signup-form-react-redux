import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { section2 } from '../../app/activeSectionSlice'


function Form4() {
  const section = useSelector((state) => state.active.section)
  const planConfig = useSelector((state) => state.plan.planDetails)
  const addOns = useSelector((state) => state.addOns.addOns)
  const dispatch = useDispatch()
  if (section !== 4) return null //thought of a more concise way to conditionally render the section components

   if(Object.keys(planConfig).length === 0){
     return (
       <div className="flex flex-col items-center justify-center h-full">
         <p className="text-primaryDark text-2xl text-center md:text-4xl font-medium">Please select a plan in step 2</p>
         <button 
         className='text-white bg-secondaryDark hover:bg-primary font-semibold rounded-md px-8 py-2 mt-4'
          onClick={() => dispatch(section2())}>Step 2
          </button>
       </div>
     )
   }
       
  
  return (
    <div className="container4 flex flex-col p-2 gap-4">
      <div className='top'>
      <div className=" font-medium text-5xl text-primaryDark ">Order Summary</div>
      <div className="order-summary text-gray-400">Double Check you order and make sure all is set before confirming</div>
      </div>
    
      <div className="total bg-gray-100 md:w-[500px] mx-auto rounded-md p-2">
        <div className="section1 flex justify-between items-center border-b-2 border-b-gray-500 px-2 pb-6">
        <div>
          <p>{`${planConfig.planDetails} (${planConfig.duration})`}</p>
          <button 
          className='underline hover:font-bold hover:text-primary ease-in-out duration-300 font-semibold'
          onClick={() => dispatch(section2())}>Change</button>
        </div>
        <h2 className='text-primaryDark font-bold'>${planConfig.price}</h2>
        </div>
        <div className="addons">
        {addOns.length === 0 ? null : <h2 className='text-primaryDark font-semibold mt-4 px-2'>Add-ons</h2>}
          {addOns.map((addOn) => {
            return (
              <div key={addOn.name} className="flex mb-2 p-2 items-center justify-between">
                <p className='text-gray-400 text-sm'>{addOn.name}</p>
                <p>{planConfig.duration === "yearly"? `$${addOn.price*12}/annum` : `$${addOn.price}/month`}</p>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className="finalTotal flex justify-between w-[198px] md:w-[500px] mx-auto">
        <h2 className='text-primaryDark'>Total ({planConfig.duration}) </h2>
        <p className='font-bold'>${planConfig.duration === "yearly"? planConfig.price + addOns.reduce((acc,curr)=> acc + curr.price*12,0) :
         planConfig.price + addOns.reduce((acc, curr) => acc + curr.price, 0) }</p>
      </div>
    </div>
  )
}

export default Form4
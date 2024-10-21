import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addAddOn, removeAddOn } from '../../app/addOnsSlice';


function Form3() {
  const section = useSelector((state) => state.active.section)
  const addOns = useSelector((state) => state.addOns)
  const dispatch = useDispatch();
  const [checkedAddOns, setCheckedAddOns] = useState({
    'DLC and Expansions': false,
    'Community and Forums': false,
    'Virtual Reality Integration': false,
    
  })



  return (
    <div className={section === 3?  "w-full mb-4 p-2 flex flex-col gap-4": "hidden"}>
      <div className="top">
        <h1 className='text-5xl text-primaryDark font-medium'>Pick Add-ons</h1>
        <p className='text-gray-400'>Select the add-ons you'd like to include in your gaming experience.</p>
      </div>
      <div className='flex gap-2 flex-col mx-auto '>
        <div className='border-2 grid grid-cols-[1fr_3fr_1fr] place-items-center border-gray-200 rounded-md md:w-[400px] p-4'>
          <input onChange={(event)=> {
            const checked = event.target.checked;

            checked? dispatch(addAddOn({ name: 'DLC and Expansions',price: 4, checked})) : dispatch(removeAddOn("DLC and Expansions"))
          }}
          className='accent-primary h-5 w-5'
           type="checkbox" />

          <div>
            <h1 className='font-bold text-primaryDark'>DLC and Expansions</h1>
            <p className="text-sm text-gray-400">Unlock new adventures, characters and challenges</p>
          </div>
          <p>$4/month</p>
        </div>
  <div className='border-2 grid grid-cols-[1fr_3fr_1fr] place-items-center border-gray-200 rounded-md md:w-[400px] p-4'>
          <input
          onChange={(event)=> {
            const checked = event.target.checked;
            checked? dispatch(addAddOn({ name: 'Community and Forums',price: 2, checked})) : dispatch(removeAddOn("Community and Forums"))
          }}
           className='accent-primary h-5 w-5' type="checkbox" name="" id="" />
          <div>
            <h1 className='font-bold text-primaryDark'>Community and Forums</h1>
            <p className="text-sm text-gray-400">Join fellow gamers, share your experiences, and get help</p>
          </div>
          <p>$2/month</p>
        </div>
        <div className='border-2 grid grid-cols-[1fr_3fr_1fr] place-items-center border-gray-200 rounded-md md:w-[400px] p-4'>
          <input
          onChange={(event)=> {
            const checked = event.target.checked;
            checked? dispatch(addAddOn({ name: 'Virtual Reality Integration',price: 3, checked})) : dispatch(removeAddOn("Virtual Reality Integration"))
          }}
          className='accent-primary h-5 w-5' type="checkbox" name="" id="" />
          <div>
            <h1 className='font-bold text-primaryDark'>Virtual Reality Integration</h1>
            <p className="text-sm text-gray-400">Offer support for virtual reality headsets and games</p>
          </div>
          <p>$3/month</p>
        </div>
      </div>
    </div>
  )
}

export default Form3
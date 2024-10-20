import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GiAncientSword } from "react-icons/gi";
import { GiAbstract065 } from "react-icons/gi";
import { GiAlienEgg } from "react-icons/gi";
import { setPlan } from '../../app/planChoiceSlice';

function Form2() {
  const section = useSelector((state) => state.active.section)
  const planChoice = useSelector((state) => state.plan.duration)
  const dispatch = useDispatch()
  return (
<form className={section === 2? "Form1-container w-full mb-4 p-2 flex flex-col gap-2" : "hidden"}>
<div className="flex flex-col gap-4">
  <h1 className='text-4xl md:text-5xl font-medium text-primaryDark'>Select Your Plan</h1>
  <p className='text-lg text-gray-400'>You have the option of monthly or yearly billing</p>
</div>
<div className='plans flex gap-8 mt-4 mx-auto justify-center w-full'>
  <div className="rounded-md md:p-5 flex flex-col gap-4 text-primaryDark border-2 border-gray-300 p-2">
  <GiAbstract065 className='text-5xl text-blue-400' />
  <span>
      <p className='font-semibold'>Basic Plan</p>
      {planChoice === "yearly" && <p className='text-gray-500'>$90/year</p>}
      {planChoice === "monthly" && <p className='text-gray-500'>$9/month</p>}
      <p className={planChoice === "yearly"? null : "hidden"}>1 Month Free</p>
    </span>
  </div>
  <div className="rounded-md md:p-5 flex flex-col gap-4 text-primaryDark border-2 border-gray-300 p-2">
  <GiAlienEgg className='text-5xl text-green-400' />
  <span>
      <p className='font-semibold'>Silver Plan</p>
      {planChoice === "yearly" && <p className='text-gray-500'>$120/year</p>}
      {planChoice === "monthly" && <p className='text-gray-500'>$12/month</p>}
      <p className={planChoice === "yearly"? null : "hidden"}>2 Months Free</p>
    </span>
  </div>
  <div className="rounded-md md:p-5 flex flex-col gap-4 text-primaryDark border-2 border-gray-300 p-2">
    <GiAncientSword className='text-5xl text-orange-600' />
    <span>
      <p className='font-semibold'>Premium Plan</p>
      {planChoice === "yearly" && <p className='text-gray-500'>$200/year</p>}
      {planChoice === "monthly" && <p className='text-gray-500'>$19/month</p>}
      <p className={planChoice === "yearly"? null : "hidden"}>2 Months Free</p>
    </span>
  </div>
</div>
<div onClick={() => planChoice === "monthly"? dispatch(setPlan("yearly")) : dispatch(setPlan("monthly"))}
 className='toggle-plan bg-slate-100 rounded-md p-4  flex items-center gap-4 mx-auto mt-8 text-primaryDark'>
  <p className={planChoice === "monthly"? "font-bold" : null}>Monthly</p>
  <div className={`${planChoice === "monthly"? "justify-start": "justify-end"} switch-container rounded-xl h-5 flex p-1 items-center w-16 bg-primary`}>
    <div className='switch rounded-full h-4 w-4 bg-white '></div>
  </div>
  <p className={planChoice === "yearly"? "font-bold" : null}>Yearly</p>
</div>
</form>
  )
}

export default Form2
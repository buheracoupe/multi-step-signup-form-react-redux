import React from 'react'
import { section1,section2,section3,section4 } from '../app/activeSectionSlice'
import { useSelector, useDispatch } from 'react-redux'

function ButtonDisplay() {
const section = useSelector((state)=> state.active.section )
const planConfig = useSelector ((state)=> state.plan.planDetails)
const dispatch = useDispatch()

    function handleNext(){
        switch (section){

            case 1: dispatch(section2()); break
            case 2: dispatch(section3()); break
            case 3: dispatch(section4()); break
            default: dispatch(section4()); break
        }
    }

    function handleBack(){
        switch (section){
            case 2: dispatch(section1()); break
            case 3: dispatch(section2()); break
            case 4: dispatch(section3()); break
            default: dispatch(section1()); break
        }
    }

    if(Object.keys(planConfig).length === 0 && section === 4) return

  return (
    <div className={`btn-container md:absolute md:w-[600px] flex justify-between md:bottom-0 items-center  px-8 py-4 
    ${section === 1? "md:-right-64" : "md:left-32"}`}>
        {section !==1 && <button onClick={handleBack} className='text-gray-400'>Go Back</button>}
        <button onClick={handleNext} className='bg-primaryDark rounded-md p-1 text-primaryLight'>{section === 4? "Confirm" : "Next Step"}</button>
    </div>
  )
}

export default ButtonDisplay
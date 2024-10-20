import React from 'react'
import { section1,section2,section3,section4 } from '../app/activeSectionSlice'
import { useSelector, useDispatch } from 'react-redux'

function ButtonDisplay() {
const section = useSelector((state)=> state.active.section )
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

  return (
    <div className='btn-container md:absolute md:left-32 md:w-[600px] flex justify-between md:bottom-0 items-center  px-8 py-4'>
        <button onClick={handleBack} className='text-gray-400'>Go Back</button>
        <button onClick={handleNext} className='bg-primaryDark rounded-md p-1 text-primaryLight'>Next Step</button>
    </div>
  )
}

export default ButtonDisplay
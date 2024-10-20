import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { section1, section2, section3, section4 } from '../app/activeSectionSlice'

function ToggleSection() {
    const section = useSelector((state) => state.active.section)
    const dispatch =  useDispatch()

  

  return (
<div className='text-white flex bg-primary md:flex-col md:justify-start md:items-center md:w-24 md:rounded-l-md justify-center p-4'>
    <div onClick={() => dispatch(section1())} className={section === 1? "number bg-white text-secondaryDark" : "number"}>1</div>
    <div onClick={() => dispatch(section2())} className={section === 2? "number bg-white text-secondaryDark" : "number"}>2</div>
    <div onClick={() => dispatch(section3())} className={section === 3? "number bg-white text-secondaryDark" : "number"}>3</div>
    <div onClick={() => dispatch(section4())} className={section === 4? "number bg-white text-secondaryDark" : "number"}>4</div>
</div>  )
}

export default ToggleSection
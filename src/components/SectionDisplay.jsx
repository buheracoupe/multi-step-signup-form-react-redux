import React from 'react'
import Form1 from './sections/Form1'
import Form2 from './sections/Form2'
import Form3 from './sections/Form3'
import Form4 from './sections/Form4'


function SectionDisplay() {
  return (
    <div className="display-container md:w-[600px] relative bg-[#EBEBEB]">
        <div className='rounded-lg absolute bg-white w-[400px] md:w-[700px] -top-20 left-1/2 transform -translate-x-1/2 h-[450px] z-10 md:static md:transform md:translate-x-0 md:h-full '>
        <Form1 />
        <Form2 />
        <Form3 />
        <Form4 />
        </div>
    </div>
)
}

export default SectionDisplay
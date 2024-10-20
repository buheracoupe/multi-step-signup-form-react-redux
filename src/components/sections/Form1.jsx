import React from 'react'
import { useForm } from 'react-hook-form'

function Form1() {
    const { register, handleSubmit } = useForm()
  return (
<div className="Form1-container p-2 flex gap-2">
    <form className="form">
        <div className="top flex flex-col gap-4 mb-4">
            <h1 className='text-primaryDark text-4xl md:text-5xl font-medium'>Personal Info</h1>
            <p className='text-gray-400 md:text-xl text-lg'>Please provide your name email address and phone number.</p>
        </div>
        <div className='flex flex-col gap-4 md:text-lg items-center md:gap-8'>
    <div className=' flex w-[80%] mx-auto flex-col gap-2 text-primaryDark'>
        <label htmlFor="name">Name</label>
        <input placeholder='e.g Martin Luther' className="border-primary px-2 border-2 rounded-md h-10 w-[80%] " id='name' type="text" />
        </div>
    <div className=' flex w-[80%] mx-auto flex-col gap-2 text-primaryDark'>
        <label htmlFor="email">Email Address</label>
        <input placeholder='e.g martinluther@gmail.com' className="border-primary px-2 border-2 rounded-md h-10 w-[80%] " id='email' type="text" />
    </div>
    <div className=' flex w-[80%] mx-auto flex-col gap-2 text-primaryDark'>
        <label htmlFor="phone-number">Phone Number</label>
        <input placeholder='e.g +1 717 222 1958' className="border-primary px-2 border-2 rounded-md h-10 w-[80%] " type="text" id='phone-number' />
    </div>

        </div>
    </form>
</div>  )
}

export default Form1
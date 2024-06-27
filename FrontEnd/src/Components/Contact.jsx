import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[400px]'>

     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
     <h1 className=" font-large font-semibold text-black">Contact Us</h1>
     {/*name */}
     <div className='mt-4 space-y-2'>
            <span>Name</span><br></br>
            <input 
            type="text"
            placeholder='Enter your fullname'
            className='w-80 px-3 py-1 border rounded-md outline-none'/>
     </div>
      {/*Email */}
      <div className='mt-4 space-y-2'>
      <span>Email</span><br></br>
            <input 
            type="email"
            placeholder='Enter your Email'
            className='w-80 px-3 py-1 border rounded-md outline-none'/>
      </div>
       {/*Message */}
        <div className='mt-4 space-y-2'>
        <span>Message</span><br></br>
        <textarea type="message"
          placeholder='Type your message'
          className='w-80 h-40 px-3 py-1 border rounded-md outline-none' >
       </textarea>
        </div>
        {/*button */}
        <div className='flex mt-4'>
        <Link to="/" className='bg-blue-700 text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>Submit</Link>
        </div>

     
     </form>
      </div>
    </div>
  )
}

export default Contact

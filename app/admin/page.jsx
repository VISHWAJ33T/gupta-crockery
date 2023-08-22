"use client"
import React, { useState } from 'react'
import Form from '@/Components/Form'
import Link from 'next/link'


const page = () => {
  const [objectId, setObjectId] = useState("")
  return (
    <div className="mx-3 text-center flex sm:flex-row flex-col gap-y-5  justify-center items-center sm:items-start my-24 gap-x-5">
      <div className='flex flex-col gap-y-5 bg-[#a0a0a0] rounded-md p-5'>
        <h3 className="text-3xl font-bold">Create A New Item</h3>
        <Link href="admin/createItem" className='bg-[#131b2e] text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full'>Create</Link></div>
      <form className="flex flex-col gap-y-3 bg-[#a0a0a0] rounded-md text-start p-5">
        <h3 className="text-3xl font-bold">Edit an Existing Item</h3>
        <label className="text-lg">
          Enter Object id here: <input className="border rounded-full px-3" type="text" value={objectId} required onChange={(e) => setObjectId(e.target.value)} /></label>
        <Link href={{
          pathname: "admin/editItem",
          query: { id: objectId },
        }} className='bg-[#131b2e] text-center text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full'>Edit Item</Link>
      </form>
    </div>
  )
}

export default page
"use client"
import React, { useState } from 'react'
import Form from '@/Components/Form'
import Link from 'next/link'


const page = () => {
  const URL = process.env.NEXT_PUBLIC_URL
  const DeleteItem = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      if (!objectId) return alert("Item Id not found");
      try {
        const response = await fetch(`${URL}/api/item/${objectId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Item Deleted Successfully")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };


  const [objectId, setObjectId] = useState("")
  return (
    <>

      <div className="mx-3 text-center flex sm:flex-row flex-col gap-y-5  justify-center items-center sm:items-start my-24 gap-x-5">
        <div className='flex flex-col gap-y-5 border-y-4 shadow-2xl rounded-md p-5'>
          <h3 className="text-3xl font-bold">Edit Carousel Images</h3>
          <Link href="Admin729/editCarouselImgs" className='bg-[#131b2e] text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full'>Edit</Link></div>
        <div className='flex flex-col gap-y-5 border-y-4 shadow-2xl rounded-md p-5'>
          <h3 className="text-3xl font-bold">Edit Categories Images</h3>
          <Link href="Admin729/editCategoriesImg" className='bg-[#131b2e] text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full'>Edit</Link></div>
      </div>


      <div className="mx-3 text-center flex sm:flex-row flex-col gap-y-5  justify-center items-center sm:items-start my-24 gap-x-5">
        <div className='flex flex-col gap-y-5 border-y-4 shadow-2xl rounded-md p-5'>
          <h3 className="text-3xl font-bold">Create A New Item</h3>
          <Link href="Admin729/createItem" className='bg-[#131b2e] text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full'>Create</Link></div>
        <form className="flex flex-col gap-y-3 border-y-4 shadow-2xl rounded-md text-center sm:text-start p-5">
          <h3 className="text-3xl font-bold">Edit an Existing Item</h3>
          <label className="text-lg">
            Enter Object id &nbsp; <input className=" border-2 rounded-lg px-3" type="text" value={objectId} required onChange={(e) => setObjectId(e.target.value)} /></label>
          <div className="flex w-[100%] justify-evenly">
            <Link href={{
              pathname: "Admin729/editItem",
              query: { id: objectId },
            }} className='bg-[#131b2e] w-45% text-center text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full'>Edit Item</Link>
            <button onClick={DeleteItem} className='bg-[crimson] w-45% text-center text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full'>Delete Item</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default page
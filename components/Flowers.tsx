import React from 'react'
import flowers from '@/misc/flowers.data'

console.log(flowers);


function Flowers() {
  return (
    <>
    <h1 className='text-blue-500'>Flowers</h1>
    {flowers.map((flower) => (
        <li key={flower._id} className='text-green-200'>{flower.name}</li>
    ))}
    </>
  )
}

export default Flowers
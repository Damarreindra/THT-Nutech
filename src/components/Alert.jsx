import React from 'react'

function Alert({message}) {
  return (
    <div className='absolute right-5 bottom-5 bg-green-500 text-white rounded p-4'>
        <p>{message}</p>
    </div>
  )
}

export default Alert
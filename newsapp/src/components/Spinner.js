import React from 'react'
import spinner from './Spinner-5.gif'

export default function Spinner() {
  return (
    <div className='text-center'>

      <img className='my-3' src={spinner} alt="spinner"  />
    </div>
  )
}

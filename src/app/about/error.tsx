"use client"
import React from 'react'

type Props = {}

// export default function ErrorPage({}: Props) {
//   return (
//     <div>ErrorPage</div>
//   )
// }

export default function Error({ error, reset }: any){
  return (
    <div className='w-full text-center'>
      <div className='text-2xl text-red-500'>
        <h1>Error</h1>
        <pre>{error.message}{" "}</pre>
      </div>
      <p>Handled by error.tsx in AppRouter</p>
      <button onClick={reset} className='w-20 h-8 bg-orange-200 rounded-md mt-3 hover:bg-orange-300'>reset</button>
    </div>
  )
}
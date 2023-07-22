import React from 'react'

type Props = {}

export default async function About({}: Props) {
  const result = await fetch('https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs')
  const data = await result.json()
  // await delay(2000)
  // console.log(data)
  return (
    <div>
      {/* <span>Debug: {JSON.stringify(data)}</span> */}
      <ul>
        {data.youtubes.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

//delay
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
import React from 'react'
import Movie from './movie'

type Props = {}

export default async function Home({}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY
  const url = `https://api.themoviedb.org/3/person/1263930/movie_credits?api_key=${key}`
  const data = await fetch(url)
  const res =await data.json()
  // await delay(2000)
  return (
    <div>
      <div className='grid gap-2 grid-cols-fluid'>
        {res.cast.map((item: any) => (
          <Movie 
            key={item.id}
            id={item.id}
            title={item.title}
            poster_path={item.poster_path}
            release_date={item.release_date}
          ></Movie>
        ))}
      </div>
    </div>
  )
}

//delay
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
import React from 'react'
import Image from 'next/image'

type Props = {
    params: any;
}

export default async function MovieDetail({ params }: Props) {
    const { id } = params
    const key = process.env.NEXT_PUBLIC_API_KEY
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
    const imageUrl = 'https://image.tmdb.org/t/p/original'
    const data = await fetch(movieUrl, { next: { revalidate: 10 }}) // clear cache every 10 seconds
    const res = await data.json()
    // console.log(res)
    return (
        <div>
            <h2 className='text-4xl font-bold'>{res.title}</h2>
            <h2 className='text-2xl'>Runtime: {res.runtime} ms</h2>
            <Image 
                src={imageUrl + res.backdrop_path} 
                width={800} 
                height={800} 
                alt={res.title}
                className='my-6 w-full'
                priority
            />
            <p className='text-2xl'>{res.overview}</p>
        </div>
    )
}
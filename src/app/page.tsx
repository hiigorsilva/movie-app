'use client'

import Tmbd from "@/Tmbd"
import { MovieRow } from "@/components/MovieRow"
import { Movie } from "@/types/Movie"
import { useEffect, useState } from "react"

export default function Home() {
  const [movieList, setMovieList] = useState<Movie[]>([])

  useEffect(() => {
    getMovieLists()
  }, [])

  const getMovieLists = async () => {
    let list = await Tmbd.getHomeList()
    setMovieList(list)
  }

  return (
    <div className="page-home">
      <section className="lists">
        {movieList.map((movie, index) => (
          <MovieRow
            key={index}
            title={movie.title}
            items={movie.items}
          />
        ))}
      </section>
    </div>
  )
}

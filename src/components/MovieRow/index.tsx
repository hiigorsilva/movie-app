'use client'

import './style.scss'

type MovieRowProps = {
  title: string
  items: []
}

export const MovieRow = ({ title, items }: MovieRowProps) => {
  return (
    <div className=''>
      <h2>{title}</h2>
    </div>
  )
}
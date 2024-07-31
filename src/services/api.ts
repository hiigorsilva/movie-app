import axios from "axios"

const API_KEY = `${process.env.NEXT_PUBLIC_API_KEY}`
const API_BASE = 'https://api.themoviedb.org/3'

export const api = axios.create({
  baseURL: API_BASE,
  params: {
    api_key: API_KEY,
    language: 'pt-BR'
  }
})
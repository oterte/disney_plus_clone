import instance from "./axios"
import request from "./request"

export const getMovieDetail = async () => {
  const response = await instance.get(request.fetchNowPlaying)
  const id = response.data.results[Math.floor(Math.random() * response.data.results.length)].id

  const detail = await instance.get(`movie/${id}`)
  return detail
}
export const getMovieId = async () => {
    const response = await instance.get(request.fetchNowPlaying)
    const id = response.data.results[Math.floor(Math.random() * response.data.results.length)].id
    return id
  }
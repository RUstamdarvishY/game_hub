import useGenres from "../Hooks/useGenres"


const GenreList = () => {
    const { data, error, loading } = useGenres()
  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
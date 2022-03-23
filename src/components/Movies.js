import Movie from './Movie'

const Movies = ({ moviesData }) => {
    return (
        <>
            {moviesData.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
            ))}
        </>
    )
}

export default Movies;
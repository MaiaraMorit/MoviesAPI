import movieList from '../fakeDb/movieList';

//DEFINE RESOLVERS

export const resolvers = {
    Query: {
        movies: () => {
            return movieList;
        },
        movie: (_, {id}) => {
            return movieList.find((movie)=> movie.id === id);
        },
    }
}
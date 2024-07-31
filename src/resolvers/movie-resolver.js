const { movieList } = require('../fakeDb/movieList');

//DEFINE RESOLVERS

const resolvers = {
    Query: {
        movies: () => {
            return movieList;
        },
        movie: (_, {id}) => {
//            const findMovie = movieList.find((movie) => movie.id === id); - foi necessário adicionar Number() para converter o id para número.
            const findMovie = movieList.find((movie) => movie.id === Number(id));

            if(!findMovie) {
                throw new Error('Filme não encontrado');
            } else {
                return findMovie;
            }
        },
    }
}

module.exports = { resolvers };
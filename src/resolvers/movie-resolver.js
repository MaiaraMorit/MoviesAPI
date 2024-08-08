const { movieList } = require('../fakeDb/movieList');

//DEFINE RESOLVERS

const resolvers = {
    Query: {
        movies: () => {
            return movieList;
        },
        movie: (_, {id}) => {
            // Convertendo o id para número
            const findMovie = movieList.find((movie) => movie.id === Number(id));

            if (!findMovie) {
                console.log('Filme não encontrado');
                throw new Error('Filme não encontrado');
            } else {
                return findMovie;
            }
        },
    },
    Mutation: {
        // criar um filme
        create: (_, {title, year, genre, director, image}) => {
            if (!title) {
                console.log('Adicione o nome do filme.');
                throw new Error("Adicione o nome do filme.");
            }
            if (!year) {
                console.log('Adicione o ano do filme.');
                throw new Error("Adicione o ano do filme.");
            }
            if (!genre) {
                console.log('Adicione o gênero do filme.');
                throw new Error("Adicione o gênero do filme.");
            }
            if (!director) {
                console.log('Adicione o diretor do filme.');
                throw new Error("Adicione o diretor do filme.");
            }

            const maxId = movieList.reduce((max, movie) => Math.max(max, movie.id), 0); // Encontrando o maior id

            const newId = maxId + 1; // Gerando um novo id incrementando 1 ao maior id

            const newMovie = {
                id: newId,
                title,
                year,
                genre,
                director,
                image
            };

            movieList.push(newMovie);

            return newMovie;
        },

        // atualizar um filme
        update: (_, {id, title, year, genre, director, image}) => { // vou colocar pra encontrar por id e no front eu faço a seleção por nome do filme que encontrará o id e chamará a mutation update.

            // encontrar o filme que vou modificar
            const movieId = movieList.find((movie) => movie.id === Number(id));

            if (!movieId) {
                console.log("ID inválido, por favor informe um filme válido.");
                throw new Error("Por favor informe um filme válido.");
            }

            // Atualizar apenas os campos fornecidos
            if (title) movieId.title = title;
            if (year) movieId.year = year;
            if (genre) movieId.genre = genre;
            if (director) movieId.director = director;
            if (image) movieId.image = image;
            
            return movieId;
        },

        delete: (_, { id }) => {
            const movieIndex = movieList.findIndex((movie) => movie.id === Number(id));
          
            if (movieIndex === -1) {
              return { success: false, message: 'Filme não encontrado' };
            }
          
            const deletedMovie = movieList.splice(movieIndex, 1)[0];
          
            return {
              success: true,
              message: `Filme "${deletedMovie.title}" deletado com sucesso`
            };
          }
    }
};

// Simulação da chamada da mutação (se for um arquivo de teste separado)
//( () => {
//    try {
//        const result = resolvers.Mutation.update(null, {
//            id: 1,
//            title: "Filme Exemplo",
//        });
//        console.log('Resultado da mutação:', result);
//        console.log('Lista de filmes:', movieList);
//    } catch (error) {
//        console.error('Erro:', error.message);
//    }
//})();

module.exports = { resolvers };

// melhorias:
// ao adicionar um novo filme, verificar se existe um filme que tenha o mesmo nome e diretor e ano de lançamento, caso tenha não permitir que o filme seja adicionado.
// quando um filme for deletado que a logica do id seja refeita, ou seja, que o id do filme que foi deletado seja removido e os ids dos filmes seguintes sejam decrementados em 1.
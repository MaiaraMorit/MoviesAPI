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

//            console.log('Adicionando novo filme...');
            const maxId = movieList.reduce((max, movie) => Math.max(max, movie.id), 0);
//            console.log('maxId:', maxId);

            const newId = maxId + 1;
//            console.log('newId:', newId);

            const newMovie = {
                id: newId,
                title,
                year,
                genre,
                director,
                image
            };

//          console.log('Novo filme:', newMovie);
            movieList.push(newMovie);

            return newMovie;
        }
    }
};

// Simulação da chamada da mutação (se for um arquivo de teste separado)
//(async () => {
//    try {
//        const result = await resolvers.Mutation.create(null, {
//            title: "Filme Exemplo",
//            year: 2024,
//            genre: "Ação",
//           director: "Diretor Exemplo",
//            image: "imagem.jpg"
//        });
//        console.log('Resultado da mutação:', result);
//        console.log('Lista de filmes:', movieList);
//    } catch (error) {
//        console.error('Erro:', error.message);
//    }
//})();

module.exports = { resolvers };

// parte de atualizar um filme
// parte de excluir um filme
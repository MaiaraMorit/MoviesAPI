# GraphMovies 🎬

Uma API moderna para gerenciamento de filmes, desenvolvida com **GraphQL** e **JavaScript**.

## Funcionalidades

- **Buscar Filmes**: Encontre todos os filmes ou procure por ID.
- **Adicionar Filmes**: Insira novos filmes na sua biblioteca.
- **Atualizar Filmes**: Edite informações de filmes existentes.
- **Deletar Filmes**: Remova filmes da sua coleção.

### Melhorias:
 * Ao adicionar um novo filme, verificar se existe um filme que tenha o mesmo nome e diretor e ano de lançamento, caso tenha não permitir que o filme seja adicionado.
 * Quando um filme for deletado que a logica do id seja refeita, ou seja, que o id do filme que foi deletado seja removido e os ids dos filmes seguintes sejam decrementados em 1.

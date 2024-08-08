# GraphMovies

Uma API simples para gerencimaneto de filmes utilizando GraphQL e javascript.
Esta API permite acessar todos os filmes, acessar um filme por id, adicionar ou atualizar informações de um filme já criado e deletar um filme.

### Melhorias:
 * Ao adicionar um novo filme, verificar se existe um filme que tenha o mesmo nome e diretor e ano de lançamento, caso tenha não permitir que o filme seja adicionado.
 * Quando um filme for deletado que a logica do id seja refeita, ou seja, que o id do filme que foi deletado seja removido e os ids dos filmes seguintes sejam decrementados em 1.

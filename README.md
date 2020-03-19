# Curso JavaScript ES6+
###### Repositório criado para me guiar no curso de EchmaScript6+ da Rocketseat.

Esse curso foi oferecido pela equipe da [Rocketseat](https://skylab.rocketseat.com.br).

#### Conteúdos:
1. Introdução:
    - Nesta aula foi ensinado o que é Echmascript e porque utiliza-lo.

2. Dependências:
    - Gerenciamento de dependências da aplicação utilizando o Yarn. Neste exemplo utilizarei as dependências:
        - @babel/cli (Trabalhar com a interface de linha de comando do Babel).
        - @babel/core (Criação de cache e dos módulos, que vai armazenar todas as dependências do projeto).
        - @babel/preset-env (Fazer a comunicação entre os broswers e a linguagem ES6+).
    - Colocar a pasta /node_modules no arquivo .gitignore.
    - O Babel é responsável por traduzir toda a linguagem que é escrita em ES6+ para os navegadores em um arquivo chamado bundle.js.

3. Classes:
    - Aula sobre classes, construtores e herança em ES6+.

4. Constantes e Variáveis de Escopo:
    - Const só podem ser atribuidas a um valor, depois de atribuido ele só pode ser lido e não alterado, ou seja, os valores não podem ser reatribuidos.
    - Mutação: Quando você altera valores dentro de um objeto ou vetores que são const.
    - let são variáveis de escopo, utilizadas para dentro de um escopo.

5. Operações com vetores em JavaScript:
    - Método .map para percorrer um vetor e utilização de uma função que recebe cada item do vetor e retorna ele multiplicado por 2.
    - Método .reduce para pegar o valor total e jogar no próximo valor, ou seja, fazer a soma de todos os itens do vetor.
    - Método .filter ele vai pegar apenas os valores que estão na condição criada, por exemplo se eu quiser apenas os valores pares eu uso 'return item % 2 === 0;'
    - Método .find procura um elemento específico dentro de um vetor usando o exemplo 'return item === 4;'

6. Arrow Function:
    - É bom para deixar o código mais limpo, quando utilizar CallBack, a passagem de uma função para dentro de outra função.
    - Não retorna objetos diretamente, precisa ser colocado dentro de ().

7. Valores Padrão:
    - Quando você chama uma função por exemplo de soma que tem 2 parametros, se você não colocar nenhum parâmetro na chamada da função ele retorna um NaN, para resolver isso podemos colocar valores padrões na função, exemplo. 'soma(a = 0, b = 0);'.

8. Desestruturação de Objetos:
    - Buscar dentro de objetos atributos específicos, exemplo: 'const { nome, idade } = usuario;'.
    - Pode também buscar dentro de funções, exemplo: 'function mostraNome = ( { nome } ) console.log(nome);'.

9. Operadores Rest e Spread:
    - 
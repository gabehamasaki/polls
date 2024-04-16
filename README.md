# Polls API

Bem-vindo ao projeto da API de Polls! Esta API permite que você crie, liste, atualize e delete enquetes (polls) e suas opções. Utilizando tecnologias como Fastify, Drizzle, TypeScript, Websocket, Redis e Zod, oferecemos uma solução robusta e escalável para suas necessidades de gerenciamento de enquetes.

## Configuração

Para começar a utilizar a API, siga os passos abaixo:

1. **Instalação:**
   Certifique-se de ter o ambiente Node.js configurado. Em seguida, clone este repositório e instale as dependências utilizando o comando:
   ```
   pnpm install
   ```

2. **Configuração do Docker:**
   Certifique-se de ter o Docker instalado e em execução na sua máquina.
   ```
   docker composer up -d
   ```

4. **Execução:**
   Após a compilação, inicie o servidor com o seguinte comando:
   ```
   pnpm dev
   ```

## Endpoints

A API oferece os seguintes endpoints:

### GET /polls/:id

Este endpoint retorna os detalhes de uma enquete específica pelo seu ID.

#### Parâmetros da URL:

- `id`: O ID da enquete desejada.

##### Exemplo de Requisição:

```http
GET /polls/1
```

##### Exemplo de Resposta:

```json
{
   "poll": {
       "id": 1,
       "title": "Qual é o seu animal favorito?",
       "options": [
           {
               "id": 1,
               "title": "Cachorro",
               "votes": 20
           },
           {
               "id": 2,
               "title": "Gato",
               "votes": 15
           }
       ]
   }
}
```

### POST /polls

Este endpoint cria uma nova enquete.

#### Corpo da Requisição:

```json
{
    "question": "Qual é o seu animal favorito?",
    "options": [
        "Cachorro",
        "Gato"
    ]
}
```

#### Exemplo de Requisição:

```http
POST /polls
Content-Type: application/json

{
    "title": "Qual é o seu animal favorito?",
    "options": [
        "Cachorro",
        "Gato"
    ]
}
```

#### Exemplo de Resposta:

```json
{
    "pollId": 3,
}
```

### POST /polls/:id/vote

Este endpoint permite que um usuário vote em uma opção específica de uma enquete.

### Parâmetros da URL:

- `id`: O ID da enquete na qual deseja votar.

#### Corpo da Requisição:

```json
{
    "pollOptionId": 1
}
```

#### Exemplo de Requisição:

```http
POST /polls/1/vote
Content-Type: application/json

{
    "pollOptionId": 1
}
```

#### Resposta:

Este endpoint retorna apenas o código de status HTTP para indicar o resultado da operação:

201 Created: Indica que o voto foi registrado com sucesso.
Caso ocorra algum erro durante a operação, o endpoint retornará um código de status HTTP apropriado para indicar o problema encontrado.

Com esta atualização, a documentação reflete que o endpoint retorna apenas o código de status 201 em caso de sucesso, sem uma resposta de corpo específica além disso.

Este é o resumo dos endpoints disponíveis na API de Polls. Se precisar de mais informações, consulte a documentação completa da API.

## WebSocket

Além dos endpoints HTTP, a API também oferece suporte a WebSocket para atualizações em tempo real. Conecte-se ao endpoint `ws://localhost:3000/polls/:pollId/results` para receber notificações sobre atualizações nos resultados da enquete.


## Contribuição

Se você deseja contribuir para este projeto, por favor, abra uma issue descrevendo sua sugestão de melhoria ou submeta um pull request com suas alterações propostas.

Divirta-se utilizando a API de Polls!

---
Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

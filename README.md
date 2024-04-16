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

- `GET /polls`: Retorna uma lista de todas as enquetes disponíveis.
- `GET /polls/:id`: Retorna os detalhes de uma enquete específica pelo seu ID.
- `POST /polls`: Cria uma nova enquete.
- `PUT /polls/:id`: Atualiza uma enquete existente pelo seu ID.
- `DELETE /polls/:id`: Deleta uma enquete existente pelo seu ID.

## WebSocket

Além dos endpoints HTTP, a API também oferece suporte a WebSocket para atualizações em tempo real. Conecte-se ao endpoint `ws://localhost:3000/polls/:pollId/results` para receber notificações sobre atualizações nos resultados da enquete.


## Contribuição

Se você deseja contribuir para este projeto, por favor, abra uma issue descrevendo sua sugestão de melhoria ou submeta um pull request com suas alterações propostas.

Divirta-se utilizando a API de Polls!

---
Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

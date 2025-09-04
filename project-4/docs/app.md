# Podcast Manager

### Descrição

Um app ao estilo Netlix para podcasts, onde o usuário pode navegar por categorias, ver os episódios mais recentes e ouvir seus podcasts favoritos.

### Dominio

Podcast feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias -[saúde, tecnologia, negócios, educação, humor]

- Filtrar episódios por categoria

## Como

### Como será implementado

Vou retornar em uma API rest (json) o nome do podcast, nome do episódio, imagem de capa, url do episódio

```json
[
  {
    "podcast": "Flow",
    "episode": "Episódio 1 - Entrevista com Fulano",
    "coverImage": "https://linkparaimagemdecapa.com/capa.jpg",
    "episodeUrl": "https://linkparaepisodio.com/episodio1.mp3",
    "categories": ["humor", "entrevista"]
  },
  {
    "podcast": "Nerdcast",
    "episode": "Episódio 2 - Tecnologia e Futuro",
    "coverImage": "https://linkparaimagemdecapa.com/capa2.jpg",
    "episodeUrl": "https://linkparaepisodio.com/episodio2.mp3",
    "categories": ["tecnologia", "futuro"]
  }
]
```

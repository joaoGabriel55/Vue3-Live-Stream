# vue-streaming

This project is just for learning purposes. How to play live streaming with Vue.js.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
docker-compose up -d
```

You need to link with your rtmp server using some application like [OBS](https://obsproject.com/) or [Larix Broadcast](https://softvelum.com/larix/).

`rtmp://<IP>/live/one`

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn run lint
```
## References:

[Streaming with NGINX: how to create your video server in 20 minutes, by Lucas Carrias](https://www.youtube.com/watch?v=uHi8OxNYKq0)
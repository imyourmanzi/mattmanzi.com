ARG NODE_VERSION="lts"

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app

## MARK: Install deps
COPY package*.json .
RUN npm ci

## MARK: Build app

# raise memory limit for Rollup:
# - https://github.com/sveltejs/kit/discussions/7989
# - https://rollupjs.org/troubleshooting/#error-javascript-heap-out-of-memory
ENV NODE_OPTIONS=--max-old-space-size=8192

COPY tsconfig.json vite.config.ts svelte.config.js ./

# note on copying dirs (https://stackoverflow.com/a/37715522)
COPY src src
COPY static static

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine-slim AS server

LABEL org.opencontainers.image.source=https://github.com/imyourmanzi/mattmanzi.com
LABEL org.opencontainers.image.description="Container image for mattmanzi.com"

# bring over the production assets
COPY --from=build /app/build/* /usr/share/nginx/html/

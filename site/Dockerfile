FROM node:22-alpine AS build

WORKDIR /repo

# Copy the entire repository so the sync script can read root Markdown.
COPY . .

WORKDIR /repo/site

RUN npm ci
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /repo/site/dist /usr/share/nginx/html
EXPOSE 80


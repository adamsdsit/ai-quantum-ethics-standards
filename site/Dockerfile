FROM node:20-alpine AS build

WORKDIR /repo

# Copy the entire repository so the sync script can read root Markdown.
COPY . .

WORKDIR /repo/site

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /repo/site/dist /usr/share/nginx/html
EXPOSE 80


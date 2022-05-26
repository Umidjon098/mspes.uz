# build environment
FROM node:18-alpine as build
WORKDIR /article_app
ENV PATH="/article_app/node_modules/.bin:$PATH"
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /article_app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY /etc/nginx/ssl/live/mspes.kz/fullchain.pem /etc/nginx/ssl/live/mspes.kz/fullchain.pem
COPY /etc/nginx/ssl/live/mspes.kz/privkey.pem /etc/nginx/ssl/live/mspes.kz/privkey.pem
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
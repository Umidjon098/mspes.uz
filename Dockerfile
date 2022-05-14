# build environment
FROM node:18-alpine as build
WORKDIR /article_app
ENV PATH="/article_app/node_modules/.bin:$PATH"
COPY /build ./

# production environment
FROM nginx:stable-alpine
COPY --from=build /article_app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
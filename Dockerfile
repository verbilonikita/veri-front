FROM alpine:3.17 as build
ENV NODE_VERSION 20.4.0

WORKDIR /front

RUN apk update && apk add nodejs npm
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx as runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /front/dist/verivox-front /usr/share/nginx/html
EXPOSE 4200
FROM nginx:1.17.3-alpine
COPY ./docker/* /etc/nginx/conf.d/
COPY ./public /var/www/html
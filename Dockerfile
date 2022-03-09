FROM nginx:1.21.6
#COPY /.htpasswd /etc/nginx
#COPY /default.conf /etc/nginx/conf.d
COPY /build /usr/share/nginx/html

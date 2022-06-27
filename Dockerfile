FROM nginx:1.21.6
COPY /build /usr/share/nginx/html
COPY /version.htm /usr/share/nginx/html
COPY /default.conf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx

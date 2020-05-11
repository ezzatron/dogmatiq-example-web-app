FROM nginx:alpine
COPY artifacts/webpack/build/production /usr/share/nginx/html

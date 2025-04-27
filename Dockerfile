# Imagen base con Nginx para servir archivos estáticos
FROM nginx:alpine

# Copiar los archivos del frontend al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

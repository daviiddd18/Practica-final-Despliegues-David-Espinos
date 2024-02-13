# Utiliza la imagen base de Node.js
FROM node:16-alpine

# Instala http-server globalmente
RUN npm install -g http-server

# Copia tu directorio 'public' al contenedor
COPY public /public

# Define el directorio de trabajo
WORKDIR /public

# Expone el puerto 4200
EXPOSE 4200

# Ejecuta http-server en el puerto 4200
CMD ["http-server", "-p", "4200"]


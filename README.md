# Dockerización de Aplicación con Docker Compose por David Espinós

Este proyecto demuestra la dockerización de una aplicación completa usando `docker-compose`, incluyendo servicios de backend, frontend, MongoDB, mongo-express, y un balanceador de carga NGINX. 
Adicionalmente, se integran servicios opcionales de monitorización con Prometheus y Grafana.

## Servicios Configurados

- **MongoDB**: Base de datos NoSQL utilizada por la aplicación.
- **Backend**: API construida con Express, dependiendo de MongoDB para el almacenamiento de datos.
- **Frontend**: Interfaz de usuario construida con AngularJS o similar, servida a través de un servidor de desarrollo o NGINX para archivos estáticos.
- **Mongo-Express**: Interfaz web para administrar MongoDB.
- **NGINX Load Balancer**: Balanceador de carga y proxy inverso para distribuir tráfico entre instancias de la aplicación.
- **Prometheus y Grafana**: (Opcionales) Para la monitorización de la aplicación y visualización de métricas.

## Requisitos

- Docker y Docker Compose instalados.

## Instrucciones de Uso

1. Clona el repositorio y haz el `npm install` para instalar todas las dependencias por si acaso.
2. Navega al directorio del proyecto y ejecuta `docker-compose up --build` para construir e iniciar todos los servicios definidos.
3. Accede a la aplicación a través de `http://localhost` o el puerto configurado para el frontend.
4. Utiliza mongo-express a través de su puerto asignado para administrar MongoDB.
5. (Opcional) Configura y accede a Prometheus y Grafana para monitorizar la aplicación.



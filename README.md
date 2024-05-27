# Фуллстек приложение 

Для разворачивания в Docker:

docker network create list_net

docker volume create mongo_data

docker run -d -p 27017:27017 --rm --name mongodb --network list_net --env-file ./config/dev.env -v mongo_data:/data/db mongo

В папке backend:
docker build -t list_backend .

docker run -p 3001:3001 --rm --name list_backend --network list_net --env-file ./../config/dev.env list_backend

В папке frontend:

docker build -t list_frontend .

docker run -p 3000:3000 --rm --name list_frontend list_frontend

Приложение:
http://localhost:3000/


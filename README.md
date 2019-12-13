### Development

$ `docker run --rm -d -it -u "$(id -u):$(id -g)" -p 3000:3000 --name node -v "$(pwd)":/app -w /app node:alpine`

$ `docker exec -it node yarn run test` 

$ `docker exec -it node yarn run start` 

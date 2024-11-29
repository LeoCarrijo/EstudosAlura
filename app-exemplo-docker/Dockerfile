FROM node:18
WORKDIR /app-node
# Variável em tempo de build do contêiner
ARG PORT_BUILD=6000 
# Variável em tempo de execução do contêiner
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . .
RUN npm install
ENTRYPOINT npm start
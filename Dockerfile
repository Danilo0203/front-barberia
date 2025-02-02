# Usar una imagen base de Node.js 22
FROM node:22-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración del proyecto
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instalar las dependencias con --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación
RUN npm run build

ENV NEXT_PUBLIC_PYTHON_HOST="https://danilodev0203.pythonanywhere.com"
ENV NEXT_PUBLIC_PYTHON_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4Njg5NjE5LCJpYXQiOjE3Mzg1MTMxNjQsImp0aSI6ImQ5YmRjM2NjMzk3NDRkOGY5YzQ5ZDM0ZGJiMDNmMDAyIiwidXNlcl9pZCI6MX0.Ja5jLtZAuOQfD802oMbX4Zv5YGKNdj5rR8wz-eQWJhU"

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
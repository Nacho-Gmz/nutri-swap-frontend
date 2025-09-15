# --- Etapa de Construcción (Build Stage) ---
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_API_URL
ARG VITE_ACCESS_TOKEN_KEY
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_ACCESS_TOKEN_KEY=$VITE_ACCESS_TOKEN_KEY

RUN npm run build-only

# --- Etapa de Servicio (Serve Stage) ---
# Usamos una imagen ligera de NGINX para servir los archivos estáticos
FROM nginx:stable-alpine

# Copiamos los archivos construidos de la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto 8080 (NGINX por defecto corre en 80, pero OpenShift prefiere puertos más altos)
EXPOSE 8080

RUN chmod -R g+w /var/cache/nginx

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
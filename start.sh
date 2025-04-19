#!/bin/sh
# Script para iniciar tanto el frontend de Next.js como el backend de FastAPI

# Iniciar la API de Python en segundo plano
cd /app/api && python3 main.py &

# Iniciar el servidor de Next.js
cd /app && npm start

# Mantener el contenedor ejecutándose
wait

# Node.js Serverless Hello World

Un proyecto simple de Node.js con Serverless Framework que despliega un endpoint "Hola Mundo".

## 🚀 Características

- **Endpoint único**: `/hello` que retorna un saludo
- **Serverless**: Listo para desplegar en AWS Lambda
- **CORS habilitado**: Compatible con aplicaciones web
- **Desarrollo local**: Servidor local con serverless-offline

## 📋 Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de AWS (para despliegue)

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Instalar Serverless Framework globalmente (opcional)
npm install -g serverless
```

## 🏃‍♂️ Uso

### Desarrollo Local

```bash
# Iniciar servidor local
npm start
# o
serverless offline
```

El servidor estará disponible en: `http://localhost:3000`

### Endpoint

- **GET** `/hello` - Retorna un mensaje de saludo

Ejemplo de respuesta:
```json
{
  "message": "¡Hola Mundo!",
  "timestamp": "2025-08-15T09:14:21.000Z",
  "path": "/hello",
  "method": "GET"
}
```

### Despliegue

```bash
# Desplegar a AWS
npm run deploy
# o
serverless deploy
```

## 📁 Estructura del Proyecto

```
node_serve/
├── src/
│   └── handlers/
│       └── hello.js          # Handler principal
├── package.json              # Dependencias del proyecto
├── serverless.yml           # Configuración de Serverless
└── README.md               # Este archivo
```

## ⚙️ Configuración

El archivo `serverless.yml` contiene la configuración principal:
- **Provider**: AWS
- **Runtime**: Node.js 18.x
- **Región**: us-east-1
- **Puerto local**: 3000

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

MIT
"# serverless-nodejs" 

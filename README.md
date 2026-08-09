# kata-senior-sandbox-mngr
Repositorio encargado de la comunicación con la instancia ec2 para el llamado a las peticiones con judge0


# Instrucciones de uso

1. Descargar dependencias
```bash
npm install
```
2. Levantar aplicacion en local
```bash
npm start
```
3. Consumir apis

```bash
postman request POST 'http://localhost:3001/V1/product/sandbox/submit' \
  --header 'Content-Type: application/json' \
  --body '{
    "languageId": 71,
    "sourceCode": "print(1)"
}'
```
# Consideraciones

Tener en cuenta la cuenta de AWS conectada desde consola, si no se tiene configurada la cuenta ni los recursos requeridos desde local, no funcionara la aplicación.


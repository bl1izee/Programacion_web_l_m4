# Porgramacion_web_l_m2
Misión M3

Esta aplicación web simula una gestión de almacenes, donde tienes la capcidad de subir productos, buscar productos y eliminar productos. 
Usa como simulación de bases de datos json-server, que almacena en formato json información que querramos. En este caso tenemos creado solo el endpoint de productos.
Para gestionar las api, usa  Tanstack query v5, que agrega aparte una capa caché para no tener que estar consultado en todo momento datos de la "bases de datos".

## Cómo probarlo
1. Clona el repositorio
2. Instala las dependencias con:

```bash
npm install
```

3. Arranca el servidor de la api

```bash
npx json-server db.json
```

4. Arranca el servidor de Vite:

```bash
npm run dev
```

5. Abre la página por el puerto local que te proporciona

## Uso de IA
Se ha utilizado ChatGPT como apoyo para resolver dudas, analizar errores y 
revisar posibles mejoras. Las propuestas se revisan y prueban antes de 
incorporarlas al proyecto.
Hice uso de la IA para ayudarme a crear las consultas a la api con Tanstack query, y a que es una tecnología nueva para mí. Le pedí ayuda a la hora de como poder hacer una consulta POST y DELETE con Tanstack query.

## Autopsia 
1. Tuve que tomar la decisión de como hacer la petición GET. Al principio empecé usando un useEffect que se ejecutase cuando buscarProducto cambiase, pero al final vi que en Tanstack Query al poner que la queryKey es buscarProducto, cuando se renderiza el componente identifica que ha cambiado la queryKey y lanza una nueva petición GET.
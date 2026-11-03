# Evidencias de ejecución

Esta carpeta está destinada a las capturas reales de MongoDB. Las capturas deben tomarse después de ejecutar los scripts; no se deben reemplazar por imágenes simuladas.

## Capturas recomendadas

1. **Creación y carga:** terminal con `mongosh < database.js` y los conteos finales de las cinco colecciones.
2. **Colecciones:** vista de MongoDB Compass donde se observen las cinco colecciones dentro de la base `concesionario`.
3. **Consulta 1:** resultado de carros disponibles.
4. **Consulta 2:** resultado de vehículos Toyota.
5. **Consulta 3:** resultado del filtro de precios.
6. **Consulta 4:** resultado ordenado por precio descendente.
7. **Consulta 5:** resultado de la agrupación por disponibilidad.
8. **Consulta 6:** empleados de Medellin.
9. **Consulta 7:** resumen de nómina.
10. **Consulta 8:** vendedores con comisión igual o superior al 3 %.
11. **Consulta 9:** clientes de Envigado.
12. **Consulta 10:** resultado del `$lookup` entre carros y marcas.

## Cómo guardar las capturas

Guarda las imágenes PNG o JPG en esta carpeta con nombres claros, por ejemplo:

- `01_carga_documentos.png`
- `02_colecciones_compass.png`
- `03_consulta_01.png`
- ...
- `12_consulta_10.png`

Asegúrate de que en las capturas se vea el comando ejecutado y su resultado. Si utilizas MongoDB Compass, muestra la base y colección correspondiente y el filtro o pipeline utilizado.

## Verificación de cantidades esperadas

Al ejecutar `database.js`, los conteos deben ser:

- vendedores: 10
- marcas: 10
- empleados: 10
- clientes: 10
- carros: 5
- total: 45

Si las cantidades no coinciden, revisa la salida de la terminal antes de tomar las evidencias.

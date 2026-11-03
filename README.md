# Proyecto MongoDB: Concesionario de carros

**Nombre del estudiante:** [juan pablo arenas restrepo]  
**Asignatura:** [Escribe aquí la asignatura]  
**Docente:** [Escribe aquí el nombre del docente, si aplica]

## 1. Descripción de la temática

El proyecto representa la base de datos de un concesionario de automóviles. Su propósito es organizar información de los vehículos que ofrece el negocio, las marcas que comercializa, los vendedores, los demás empleados y los clientes. La información permite realizar consultas sobre disponibilidad y precios de los vehículos, así como consultar datos del personal y de los clientes.

## 2. Nombre de la base de datos

El nombre utilizado es **`concesionario`**.

## 3. Descripción de las cinco colecciones

### 3.1. `vendedores`

Almacena los datos de los vendedores: identificador, nombre, teléfono, correo, años de experiencia, porcentaje de comisión y ciudad. Se utiliza para consultar y analizar la información del equipo comercial.

### 3.2. `marcas`

Contiene información de las marcas de vehículos: identificador, nombre, país de origen, año de fundación y tipo de vehículos que fabrica. Esta colección permite complementar los datos de cada automóvil con información de su fabricante.

### 3.3. `empleados`

Registra los integrantes del concesionario y sus datos laborales: identificador, nombre, cargo, teléfono, correo, salario y ciudad. Permite consultar el personal por ciudad y realizar cálculos de nómina.

### 3.4. `clientes`

Almacena los datos de contacto de los clientes: identificador, nombre, teléfono, correo y ciudad. Sirve para localizar clientes según su ciudad y mantener organizada la información de contacto.

### 3.5. `carros`

Contiene los vehículos del inventario: identificador ObjectId, marca, modelo, año, precio, color y estado de disponibilidad. Permite consultar el inventario, filtrar por marca o precio y conocer cuáles vehículos están disponibles.

**Cantidad de documentos recibidos:** vendedores (10), marcas (10), empleados (10), clientes (10) y carros (5), para un total de **45 documentos**. La colección `carros` contiene cinco documentos en la información suministrada; no se agregaron registros ficticios.

## 4. Explicación de las diez consultas y su propósito

Las consultas completas están implementadas y numeradas en el archivo `consultas.js`.

| N.º | Consulta | Propósito |
|---|---|---|
| 1 | Carros disponibles | Filtrar el inventario y mostrar solo los vehículos cuyo campo `disponible` es `true`. |
| 2 | Vehículos Toyota | Buscar los automóviles cuya marca sea Toyota. |
| 3 | Rango de precios | Encontrar vehículos con precio entre $90.000.000 y $130.000.000, incluyendo los límites. |
| 4 | Orden por precio | Mostrar el inventario ordenado de mayor a menor precio. |
| 5 | Conteo por disponibilidad | Agrupar los vehículos según estén disponibles o no y contar cada grupo. |
| 6 | Empleados de Medellín | Consultar los empleados cuya ciudad sea Medellin y mostrar sus datos laborales principales. |
| 7 | Resumen de nómina | Calcular la suma de salarios, el salario promedio y la cantidad de empleados. |
| 8 | Vendedores por comisión | Encontrar vendedores con comisión igual o superior al 3 %. |
| 9 | Clientes de Envigado | Consultar los clientes registrados en Envigado y mostrar sus datos de contacto. |
| 10 | Carros y marcas | Usar `$lookup` para relacionar los carros con la colección `marcas` mediante `marca` y `nombre`, respectivamente. |

## 5. Archivos incluidos

- **`database.js`**: selecciona la base `concesionario`, crea las cinco colecciones e inserta los documentos recibidos. Al final imprime los conteos.
- **`consultas.js`**: contiene las diez consultas identificadas y comentadas.
- **`evidencias/INSTRUCCIONES_EVIDENCIAS.md`**: indica cómo ejecutar los scripts y qué capturas de pantalla tomar.

## 6. Cómo ejecutar el proyecto

Se requiere tener MongoDB en ejecución y MongoDB Shell (`mongosh`) instalado.

Desde una terminal ubicada en la carpeta del proyecto:

```bash
mongosh < database.js
```

Después, ejecutar las consultas:

```bash
mongosh < consultas.js
```

También se pueden abrir ambos archivos desde `mongosh` con el comando `load("database.js")` y luego `load("consultas.js")`.

> **Importante:** `database.js` elimina las colecciones existentes con esos nombres antes de crearlas e insertar los datos. Esto permite repetir la carga sin duplicar registros, pero borra los datos anteriores de esas cinco colecciones. Ejecutarlo únicamente en la base de datos de este proyecto.

## 7. Evidencias de ejecución

Las capturas solicitadas deben obtenerse ejecutando los scripts en MongoDB Compass o `mongosh`. No se incluyen capturas simuladas: las evidencias deben mostrar la ejecución real en el entorno del estudiante. Consultar `evidencias/INSTRUCCIONES_EVIDENCIAS.md` para conocer las capturas recomendadas.

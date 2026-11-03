// 10 consultas para la base de datos concesionario.
// Ejecutar después de database.js desde mongosh.

const dbConcesionario = db.getSiblingDB("concesionario");

// CONSULTA 1. Mostrar los carros que están disponibles para la venta.
dbConcesionario.carros.find({ disponible: true });

// CONSULTA 2. Buscar los vehículos de la marca Toyota.
dbConcesionario.carros.find({ marca: "Toyota" });

// CONSULTA 3. Buscar carros con precio entre 90 y 130 millones de pesos.
dbConcesionario.carros.find({
  precio: { $gte: 90000000, $lte: 130000000 }
});

// CONSULTA 4. Mostrar todos los carros ordenados del más costoso al más económico.
dbConcesionario.carros.find().sort({ precio: -1 });

// CONSULTA 5. Contar cuántos vehículos hay disponibles y no disponibles.
dbConcesionario.carros.aggregate([
  {
    $group: {
      _id: "$disponible",
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { _id: -1 } }
]);

// CONSULTA 6. Consultar los empleados que trabajan en Medellin.
dbConcesionario.empleados.find(
  { ciudad: "Medellin" },
  { _id: 1, nombre: 1, cargo: 1, salario: 1, ciudad: 1 }
);

// CONSULTA 7. Calcular la nómina mensual total y el salario promedio.
dbConcesionario.empleados.aggregate([
  {
    $group: {
      _id: null,
      totalNomina: { $sum: "$salario" },
      salarioPromedio: { $avg: "$salario" },
      cantidadEmpleados: { $sum: 1 }
    }
  },
  { $project: { _id: 0, totalNomina: 1, salarioPromedio: 1, cantidadEmpleados: 1 } }
]);

// CONSULTA 8. Encontrar vendedores con comisión igual o superior al 3 %.
dbConcesionario.vendedores.find(
  { comision: { $gte: 3 } },
  { _id: 1, nombre: 1, experiencia: 1, comision: 1 }
);

// CONSULTA 9. Consultar los clientes que viven en Envigado.
dbConcesionario.clientes.find(
  { ciudad: "Envigado" },
  { _id: 1, nombre: 1, telefono: 1, correo: 1 }
);

// CONSULTA 10. Relacionar cada carro con la información de su marca (país y año de fundación).
dbConcesionario.carros.aggregate([
  {
    $lookup: {
      from: "marcas",
      localField: "marca",
      foreignField: "nombre",
      as: "datosMarca"
    }
  },
  {
    $unwind: {
      path: "$datosMarca",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      _id: 1,
      marca: 1,
      modelo: 1,
      anio: 1,
      precio: 1,
      pais_origen: "$datosMarca.pais_origen",
      fundacion_marca: "$datosMarca.fundacion"
    }
  }
]);

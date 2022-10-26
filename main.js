class Pizza {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

const pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["Queso muzzarella", "Tomate"],
    precio: 1200,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "Queso muzzarella",
      "Tomate",
      "Rodaja de tomate natural",
      "Ajo",
      "Perejil picado",
    ],
    precio: 1440,
  },
  {
    id: 3,
    nombre: "Jamon",
    ingredientes: ["Queso muzzarella", "Tomate", "Jamon"],
    precio: 1440,
  },
  {
    id: 4,
    nombre: "Fugazzeta",
    ingredientes: ["Queso muzzarella", "Cebolla", "Aceitunas"],
    precio: 1440,
  },
  {
    id: 5,
    nombre: "Calabresa",
    ingredientes: ["Queso muzzarella", "Longaniza calabresa", "Tomate"],
    precio: 1500,
  },
  {
    id: 6,
    nombre: "Jamon y morron",
    ingredientes: ["Queso muzzarella", "Jamon", "Morron", "Tomate"],
    precio: 1500,
  },
];

// A)

pizzas.forEach((pizzas) => {
  if (pizzas.id % 2 === 1) {
    console.log(`La pizza ${pizzas.nombre} tiene un ID impar `);
  } else {
    console.log(`La pizza ${pizzas.nombre} tiene un ID par`);
  }
});

// B)

const pizzaMenorA600 = pizzas.some(({ precio }) => precio < 600);

const imprimirRespuesta = (pizzas) => {
  if (pizzas === true) {
    console.log("Si hay pizza con valor menor a $600");
  } else {
    console.log("No hay pizza con valor menor a $600");
  }
};

imprimirRespuesta(pizzaMenorA600);

// C)

pizzas.forEach((pizzas) => {
  console.log(`Pizza: ${pizzas.nombre} | Precio: $${pizzas.precio}`);
});

// D)

pizzas.forEach((pizzas) => {
  console.log(`Los ingredientes de la pizza ${pizzas.nombre}:`);
  pizzas.ingredientes.forEach((ingredientes) => {
    console.log(`|${ingredientes}|`);
  });
});

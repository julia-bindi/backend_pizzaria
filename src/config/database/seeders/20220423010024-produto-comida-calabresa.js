'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Calabresa",
        descricao: "Muçarela, calabresa e cebola. Como não amar? Os fãs da carne suína não abrem mão. Esse é um sabor que merece estar na sua mesa de vez em quando.",
        preco: 19.90,
        imagem: "https://drive.google.com/file/d/1xzQllYThDgR1hAkW6QvWad0IVbPydQK7/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

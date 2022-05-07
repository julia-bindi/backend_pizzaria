'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Milho",
        descricao: "Milho com muçarela ou catupiry. Pode parecer simples, mas estamos falando de uma pizza sensacional de gostosa. É difícil achar alguém que não goste.",
        preco: 19.90,
        imagem: "https://drive.google.com/file/d/17QAEN5Z6b78kgZnAx-ahSIhKUnwl8nes/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

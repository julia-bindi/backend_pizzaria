'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Agua mineral sem gás",
        descricao: null,
        preco: 2.00,
        imagem: "https://drive.google.com/file/d/11sNZRGGnpJ1-Bj6XtwnthX1y1hYpN1cM/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

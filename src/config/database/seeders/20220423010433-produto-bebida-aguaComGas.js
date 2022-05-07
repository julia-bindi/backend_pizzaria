'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Agua mineral com gás",
        descricao: null,
        preco: 3.00,
        imagem: "https://drive.google.com/file/d/1T44bqsfskYazANb1U9g8cDl703BqFg1h/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

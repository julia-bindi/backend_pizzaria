'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "promoção",
        nome: "Pizza Baiana  + Pizza Portuguesa + 2 Refri Lata",
        descricao: "Trocas de sabores não são permitidas",
        preco: 39.90,
        imagem: "https://drive.google.com/file/d/19cwNNgGMNGHGKErj0HAWAb32idTxKQ8-/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

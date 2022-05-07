'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "promoção",
        nome: "2 Pizzas Calabresa + Refrigerante 2L",
        descricao: null,
        preco: 39.90,
        imagem: "https://drive.google.com/file/d/19E9EKSaihlfhdKl7vv8UYLAjIisG1RM7/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

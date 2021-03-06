'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Palmito",
        descricao: "E para aqueles que preferem pizzas mais leves, que tal palmito? Apenas palmito e uma leve camada de queijo.",
        preco: 31.90,
        imagem: "1W42hfthMBRMoKYTDjB6L93vz5l_QypCT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

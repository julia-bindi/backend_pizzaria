'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Refrigerante 2L",
        descricao: "Escolha seu sabor nos comentarios: Coca, Fanta, Guarana Antartica, Sprite. Por padrão vai Guarana Antartica.",
        preco: 12.00,
        imagem: "1GOjRWwmDbRGaEm9K0foW8vqPdVXCUHhu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

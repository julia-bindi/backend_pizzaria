'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Mussarela",
        descricao: "Simples assim e perfeita assim. Não existem palavras para descrever o quão incrível ela é. Tudo na proporção certa para matar a fome com maestria.",
        preco: 19.90,
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
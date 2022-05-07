'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Napolitana",
        descricao: "Ela parece simples, mas vou te contar o segredo",
        preco: 25.90,
        imagem: "https://drive.google.com/file/d/158vCfTgbR5bqnp0of8ouOAWfZkM9jqHN/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

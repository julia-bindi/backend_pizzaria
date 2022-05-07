'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "promoção",
        nome: "Levando 2 e pague metade na segunda!",
        descricao: "Isso mesmo! Na segunda você paga 10!!",
        preco: 29.90,
        imagem: "https://drive.google.com/file/d/1BiZCJwVH_hVSnPfeq16hGnbPby70Uyua/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

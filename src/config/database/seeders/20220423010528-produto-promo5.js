'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "promoção",
        nome: "Pizza calabresa + Refrigerante lata",
        descricao: "Aproveite!!",
        preco: 19.90,
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

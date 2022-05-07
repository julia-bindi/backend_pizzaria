'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Refigerante 600ml",
        descricao: "Escolha seu sabor nos comentarios: Coca, Fanta, Guarana Antartica, Sprite. Por padrão vai Guarana Antartica.",
        preco: 8.00,
        imagem: "https://drive.google.com/file/d/107jOCCjVP0g7fERhQGS3htOouAjbPtBZ/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

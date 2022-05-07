'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Refrigerante Lata 350ml",
        descricao: "Escolha seu sabor nos comentarios: Coca, Fanta, Guarana Antartica, Sprite. Por padrão vai Guarana Antartica.",
        preco: 5.00,
        imagem: "https://drive.google.com/file/d/1XFyEfhAVQR7CGqlAaq8YBQCCGMVzCNuH/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

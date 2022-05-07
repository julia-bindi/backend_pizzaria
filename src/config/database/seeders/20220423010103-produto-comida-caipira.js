'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Caipira",
        descricao: "Frango, milho e catupiry, ou seja, não tem erro, né?",
        preco: 22.90,
        imagem: "https://drive.google.com/file/d/1Zjfs-2Owazm2sXvYRthxmXXFPOwlZRov/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Brócolis",
        descricao: "Estamos falando aqui de um hino injustiçado! A mídia nos ensinou a não gostar de brócolis. Mas, convenhamos, é delicioso! A pizza é feita com brócolis, bacon crocante e uma leve camada de muçarela ou catupiry.",
        preco: 20.90,
        imagem: "https://drive.google.com/file/d/1Tl3mj8b2uyv9olSNdk476na97IuYywvz/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

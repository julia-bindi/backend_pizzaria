'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Suco Lata",
        descricao: "Escolha seu sabor nos comentarios: Uva, Laranja, Goiaba, Pessego, Manga. Por padrão vai Laranja.",
        preco: 5.00,
        imagem: "https://drive.google.com/file/d/1Xr2O6cb3UPWzcIXdZSFn7_mFK0HbemNw/view?usp=sharing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};

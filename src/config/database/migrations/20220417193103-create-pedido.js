'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: 'perdido_unico',
        type: Sequelize.INTEGER
      },
      idEndereco: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Enderecos',
          key: 'id',
          as: 'idEndereco'
        }
      },
      produtos: {
        type: Sequelize.STRING
      },
      precoFinal: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};
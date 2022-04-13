'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      idCliente: {
        allowNull: false,
        primaryKey: true,
        foreighKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id',
          as: 'idCliente'
        }
      },
      cep: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      rua: {
        type: Sequelize.STRING
      },
      numero: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      complemento: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Enderecos');
  }
};
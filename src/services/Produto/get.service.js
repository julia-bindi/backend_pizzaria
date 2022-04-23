
const { produtosRepository } = require("../../repositories");

module.exports.getProdutos = async (tipo) => {
  const response = await produtosRepository.list({ where: {tipo} });

  return response;
};

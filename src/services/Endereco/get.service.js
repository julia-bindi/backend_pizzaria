const { enderecoRepository } = require("../../repositories");

module.exports.getEnderecos = async (idCliente) => {
  const response = await enderecoRepository.list({ where: {idCliente} });

  return response;
};

const { StatusCodes } = require("http-status-codes");
const { EnderecoService } = require("../../services");
const yup = require("yup");

module.exports = {
    novoEndereco: async (req, res) =>{
        try{
            const schema = yup.object().shape({
                idCliente: yup.number().required(),
                cep: yup.string().required(),
                bairro: yup.string().required(),
                rua: yup.string().required(),
                numero: yup.number().required(),
                complemento: yup.string(),
            });

            await schema.validate(req.body, {
                stripUnknown: true,
              });

            const { idCliente, cep, bairro, rua, numero, complemento } = req.body;
            const response = await EnderecoService.novoEndereco(idCliente, cep, bairro, rua, numero, complemento);
            return res.status(StatusCodes.OK).json(response);
        }catch (error) {
            console.error(error);
            return res
              .status(
                error.name == "ValidationError"
                  ? StatusCodes.UNPROCESSABLE_ENTITY
                  : error.status || StatusCodes.INTERNAL_SERVER_ERROR
              )
              .json(error.message);
          }
    },
}
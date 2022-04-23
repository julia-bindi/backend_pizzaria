const { hello } = require("./hello.route")
const { cliente } = require("./cliente.route")
const { endereco } = require("./endereco.route")
const { produto } = require("./produto.route")

module.exports = {
    hello,
    cliente,
    endereco,
    produto,
}
const { hello } = require("./hello.route")
const { cliente } = require("./cliente.route")
const { endereco } = require("./endereco.route")

module.exports = {
    hello,
    cliente,
    endereco,
}
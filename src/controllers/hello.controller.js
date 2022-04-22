const { StatusCodes } = require("http-status-codes");
const { HelloService } = require("../services")

module.exports = {
    hello: async (req, res) => {
        try {
            const response = await HelloService.hello()
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            console.log(error);
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages);
        }

    }
}
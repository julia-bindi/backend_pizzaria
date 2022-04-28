const app = require("./src/config/express");
const cors = require("cors")
const port = app.get("port");

const corsoptions = {
  origin: "*",
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type','Authorization'],
  optionsSuccessStatus: 200
}

app.use(cors(corsoptions))

app.listen(port, () =>
  console.info(
    `Application currently running on port: ${port} for ${process.env.NODE_ENV}`
  )
);

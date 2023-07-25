import express from "express";
import cors from 'cors'
import { routerApi } from "./routes/index.js";
import { logErrors, errorHandler, boomErrorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = 3000;

app.use(express.json())

const whiteList = ['http://localhost:8080', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if (!whiteList.includes(origin)) {
      return callback(new Error("No permitido"))
    } else {
      callback(null, true);
    }
  }
}
app.use(cors(options))

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('holaaaaaaaaaaaaaaa')
})



app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`);
})

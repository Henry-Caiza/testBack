import { router as productsRouter } from "./productsRouter.js";
import { router as usersRouter } from "./usersRouter.js";
import { router as categoriesRouter } from "./categoriesRouter.js";
import express from 'express'

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
}

export { routerApi }

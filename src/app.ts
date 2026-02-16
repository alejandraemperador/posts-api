import express, { Router } from 'express'; //importar toda la libreria
import { NODE_ENV, PORT } from "./config"
import { UserRouter } from './features/users/user.router';

const app = express();
app.use(express.json()); //leer un body

app.get('/', (req, res) => {
  return res.send('Hola mundo!');
});

const apiRouter = Router();
app.use('/api', apiRouter);

const userRouter = new UserRouter();
apiRouter.use (userRouter.router);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  });
}

export default app;



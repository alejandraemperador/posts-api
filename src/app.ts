import express, {Router} from 'express';
import { NODE_ENV, PORT } from './config';
import {PostRouter} from "./features/users/post.router";
import cors from "cors";
import { PostController} from './features/users/post.controller';
import {errorsMiddleware} from './middlewares/errorsMiddleware';
import { PostService} from './features/users/post.service';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hola mundo!');
});

const apiRouter = Router(); 
app.use('/api', apiRouter);

const postService = new PostService();

const postController = new PostController(postService);

const postRouter  = new PostRouter(postController);
apiRouter.use(postRouter.router)

app.use(errorsMiddleware);

if(NODE_ENV != 'production') {

  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

};

export default app;

app.get('/posts', (req, res) => {
    console.log(req.query);
  return res.send('Hola mundo!');
});



import express, { Router } from 'express';
import cors from "cors";
import { NODE_ENV, PORT } from './config';
import { PostService } from './features/users/post.service';
import { PostController } from './features/users/post.controller';
import { PostRouter } from "./features/users/post.router";
import { errorsMiddleware } from './middlewares/errorsMiddleware';

const app = express();


app.use(express.json());
app.use(cors());


const postService = new PostService();
const postController = new PostController(postService);
const postRouter = new PostRouter(postController);


const apiRouter = Router();
app.use('/api', apiRouter); 
apiRouter.use(postRouter.router); 


app.get('/', (req, res) => {
  res.json({ message: "Backend funcionando correctamente" });
});


app.use(errorsMiddleware);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
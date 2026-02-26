import { Router } from "express"
import { PostController } from './post.controller';


export class PostRouter {
    public router: Router;
    private postController: PostController;


    constructor(postController: PostController) {
        this.router = Router();
        this.postController = postController;
        
        //El servidor devuelve la lista de usuarios.
        this.router.get('/posts', this.postController.getPosts);

        // Te mando datos para que los guardes ej: Cuando te registras en una página esto manda el metodo POST
        // El servidor va a crear un usuario nuevo.
        this.router.post('/posts', this.postController.createPost);

        this.router.delete('/posts/:id', this.postController.deletePost);
    }
}
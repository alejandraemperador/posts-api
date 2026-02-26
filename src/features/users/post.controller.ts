import { Request, Response } from 'express';
import  Boom  from '@hapi/boom';
import { PostService } from './post.service';

export class PostController {
    private postService: PostService

    constructor (postService: PostService) {
        this.postService = postService
    }
    getPosts = (req: Request, res:Response) => {
        const posts = this.postService.getPosts ()
        return res.json(posts)
    }
    createPost = (req: Request, res:Response) => {
        const {imageUrl, title, description} = req.body

        if(!imageUrl) {
            throw Boom.badRequest ("Image URL is required")
        }
        if(!title) {
            throw Boom.badRequest ("Title is required")
        }
        if (!description) {
            throw Boom.badRequest ("Description is required")
        }
        const post= this.postService.createPost ({
            imageUrl,
            title,
            description
        })
        return res.json(post)
    }
    deletePost = (req: Request, res:Response) => {
        const {id} = req.params
        this.postService.deletePost (String(id))
        return res.send ("Post deleted")
    }
}
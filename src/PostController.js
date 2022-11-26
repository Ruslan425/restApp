import PostService from "./PostService.js";

class PostController {

   async create(req, res) {
    try {
        if (!req.files) {
            const post = await PostService.createWithOutImage(req.body)
            console.log('no image')
            res.json(post)
        } else {
            const post = await PostService.create(req.body, req.files.image)
            console.log('image have')
            res.json(post)
        }    
    } catch(error) {
        res.status(500).json(error)
    }
   }

   async getAll(req, res) {
    try{
        const posts = await PostService.getAll();
        return res.json(posts);
    } catch(error) {
        res.status(500).json(error)
    }
   }

   async getFromId(req, res) {
    try{
        const post = await PostService.getFromId(req.params.id)
        return res.json(post)
    } catch(error) {
        res.status(500).json(error)
    }
   }

   async udate(req, res) {
    try{
        const updatePost = await PostService.udate(req.body)
        return res.json(updatePost);
    } catch(error) {
        res.status(500).json(error)
    }
   }

   async delete(req, res) {
    try{
        const post = await PostService.delete(req.params.id);
        return res.json(post);
    } catch(error) {
        res.status(500).json(error);
    }
   }

   async deleteAll(req, res) {
    try {
        const post = await PostService.deleteAll();
        return res.json(post)
    } catch(error) {
        res.status(500).json(error)
    }
   }
}

export default new PostController();
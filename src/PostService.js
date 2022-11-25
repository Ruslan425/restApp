import Post from "./Post.js";
import FileService from "./FileService.js";


class PostService {

    async create(post, image) {
        const fileName = FileService.saveImage(image);
        const createPost = await Post.create({...post, image: fileName});
        console.log(createPost)
        return createPost;
    };

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getFromId(id) {
        if (!id) {
            throw new Error('Dont have ID')
        }
        const post = await Post.findById(id)
        return post
    }

    async udate(post) {
        if (!post._id) {
            throw new Error('Dont have ID')
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, { new: true })
        return updatePost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Dont have ID')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }

    async deleteAll() {
        const post = await Post.deleteMany()
        return post
    }

};

export default new PostService();
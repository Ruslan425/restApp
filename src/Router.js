import Router from 'express';
import PostController from './PostController.js';


const router = new Router()

router.post('/post', PostController.create)

router.get('/get', PostController.getAll)

router.get('/get/:id', PostController.getFromId)

router.put('/put', PostController.udate)

router.delete('/delete/:id', PostController.delete)

router.delete('/delete', PostController.deleteAll)

export default router
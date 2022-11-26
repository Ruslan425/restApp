import app from '../app.js';
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { mongoose } from 'mongoose';
import Post from "../src/Post.js";



describe('POST /post', () => {

    beforeAll(async() => {
        const mongoserver = await MongoMemoryServer.create()
        await mongoose.connect(mongoserver.getUri())
    })

    afterAll(async() => {
       await mongoose.disconnect()
       await mongoose.connection.close()
    })

    it('test post code 200', async () => {
        const res = await request(app)
            .post('/api/post')
            .attach('file', 'D:/Programs/restApp/files/5800e393-bdde-4167-b96d-1d54794feec8.png')
            .field('author', 'sdasasdg')
            .field('title', 'ffqwfq')
            .field('content', 'fsdfsf')

        expect(res.statusCode).toBe(200)    
    })

    it('Whit out image code 500', async() => {
        const res = await request(app).post('/api/post').send({
            "author": "Test Test121",
            "title": "Test title12",
            "content": "My1212 test content"
        })
        expect(res.statusCode).toBe(500)
    })

    it('Get all product code 200', async() => {
        const res = await request(app).get('/api/get')
        expect(res.statusCode).toBe(200)
    })

    it('Get list not empty', async() => {
        const res = await request(app).get('/api/get')
        const db = await Post.find()
        expect(res.body.length === db.length).toBe(true)
    })

    it('Get from id code 200', async() => {
        const db = await Post.find()
        const id = db[0]._id
        const res = await request(app).get(`/api/get/${id}`)
        expect(res.statusCode).toBe(200)
    })

    it('Put code 200', async() => {
        const db = await Post.find()
        const id = db[0]._id
        const res = await request(app).put('/api/put').send({
            "_id" : id,
            "author": "Test",
            "title": "Test",
            "content": "test"
        })
        
        expect(res.statusCode).toBe(200)
    })

    it('Put code 500', async() => {
        const res = await request(app).put('/api/put').send({
            "_id" : 123,
            "author": "Test",
            "title": "Test",
            "content": "test"
        })
        expect(res.statusCode).toBe(500)
    })


    it('Delete all on DB', async() => {
        const res = await request(app).delete('/api/delete')
        expect(res.statusCode).toBe(200)
    })
    
})
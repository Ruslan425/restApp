import app from '../app.js';
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { mongoose } from 'mongoose';


describe('POST /post', () => {

    beforeAll(async() => {
        const mongoserver = await MongoMemoryServer.create()

        await mongoose.connect(mongoserver.getUri())
    })

    afterAll(async() => {
       await mongoose.disconnect()
       await mongoose.connection.close()
    })
    test('test post code 200', async () => {
        const res = await request(app).post('/api/post').send({
            "author": "Test Test121",
            "title": "Test title12",
            "content": "My1212 test content"
        })
        console.log(res.body)
        expect(res.statusCode).toBe(200)
    })
})
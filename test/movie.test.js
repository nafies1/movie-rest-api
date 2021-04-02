require('dotenv').config()
const request = require('supertest')
const app = require('../main')

describe('Movie Routes', () => {
  describe('/detail', () => {
    test('it should return movie detail with status code 200', (done) => {
      request(app)
        .get(`/detail/tt3896198?apikey=${process.env.API_KEY}`)
        .end((err, response) => {
          // console.log('ini response',response.body)
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('Title', expect.any(String))
          expect(response.body).toHaveProperty('Year', expect.any(String))
          expect(response.status).toBe(200)
          done()
        })
    })

    test('it should return error due invalid API key with status code 401', (done) => {
      request(app)
        .get(`/detail/tt3896198?apikey=xxx`)
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('msg', "Please input the correct API key in query params")
          expect(response.status).toBe(401)
          done()
        })
    })
  })

  describe('/search', () => {
    test('it should return list movie with status code 200', (done) => {
      request(app)
        .get(`/search?keyword=avenger&apikey=${process.env.API_KEY}`)
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('Search', expect.any(Array))
          expect(response.body).toHaveProperty('totalResults', expect.any(String))
          expect(response.status).toBe(200)
          done()
        })
    })

    test('it should return error due invalid API key with status code 401', (done) => {
      request(app)
        .get(`/search?keyword=avenger&apikey=xxx`)
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('msg', "Please input the correct API key in query params")
          expect(response.status).toBe(401)
          done()
        })
    })
  })
  // search?keyword=avenger&apikey=3a1dad53
})
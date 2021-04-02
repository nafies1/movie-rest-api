const router = require('express').Router()
const Movie = require('../services/MovieService')
const authentication = require('../middlewares/authentication')
const RequestLogController = require('../controllers/RequestLogController')

router.get('/', (req, res) => {
  res.send('Welcome to movie searcher API. For further information, please contact Us at @nafies1')
})

router.use(RequestLogController.createLogRequest)

router.use(authentication)

router.get('/search', Movie.search)

router.get('/detail/:id', Movie.getDetail)

module.exports = router
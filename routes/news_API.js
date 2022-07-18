const controller = require('../controllers/news_C');
const middle = require('../middlewares/validation');

module.exports = (app)=>{
    app.post('/onlinenews/v1/news/create',[middle.valid],controller.createNews)

    app.get('/onlinenews/v1/news/search/:id',controller.getNews);

    app.put('/onlinenews/v1/news/updateNews/:id',controller.updateNews);

    app.delete('/onlinenews/v1/news/delete/:id',controller.deleteNews);
}
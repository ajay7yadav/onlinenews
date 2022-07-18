const News = require('../models/news_Schema');
// Handler for create news
exports.createNews = async(req, res)=>{
    const newsBody = {
        title : req.body.title,
        category : req.body.category,
        content : req.body.content
    };
    try{
        const news = await News.create(newsBody);
        res.status(201).send(news);
    }catch(err){
        res.status(500).send({
            message : 'Oops internal error !'
        });
    }
};

// Handler for get news
exports.getNews = async(req, res)=>{

    const byId = req.params.id;
    try{
        const news = await News.findOne({_id : byId});

        if(!news){
            res.status(404).send({
                message : 'Id not valid !'
            });
            return;
        }
        res.status(200).send(news);

    }catch(err){
        console.log(err);
        res.status(500).send({
            message : 'Oops internal error !'
        });
    }
}

// Handler for update news
exports.updateNews = async(req, res)=>{

    const byId = req.params.id;  // update news by Id 
    const newsBody = {
        title : req.body.title,
        category : req.body.category,
        content : req.body.content
    };
    try{
        const news = await News.updateOne({_id : byId}, {$set : newsBody});

        if(!news){
            res.status(404).send({
                message : 'Id not valid !'
            });
            return;
        }
        res.status(201).send(news);

    }catch(err){
        res.status(500).send({
            message : 'internal error !'
        });
    }
}

// Handler for delete news
exports.deleteNews = async(req, res)=>{
    const byId = req.params.id;
    try{
        const news = await News.deleteOne({_id : byId});

        if(!news){
            res.status(404).send({
                message : 'Id not valid !'
            });
            return;
        }
        res.status(200).send({
            message : "deleted"
        });

    }catch(err){
        res.status(500).send({
            message : 'somthing is wrong !'
        });
    }
}
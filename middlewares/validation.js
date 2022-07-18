const properBody = (req, res, next)=>{
    // check title
    if(!req.body.title){
        res.status(401).send({
            message : 'Enter title !'
        });
        return;
    }
    // check category
    if(!req.body.category){
        res.status(401).send({
            message : 'Enter category !'
        });
        return;
    }
    // check content
    if(!req.body.content){
        res.status(401).send({
            message : 'Enter content !'
        });
        return;
    }
    next();
}
module.exports = {
    valid : properBody
}

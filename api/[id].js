const MetaData=require('../Metadata.json');

Module.exports=(req,res)=>{
    const {id}=req.query;
    res.json(JSON.parse(JSON.stringify(Metadata[id])));
} 
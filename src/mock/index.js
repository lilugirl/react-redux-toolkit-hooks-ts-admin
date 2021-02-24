const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.send('helo world');
})

app.listen(8000);

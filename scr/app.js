const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());


app.listen(port, () =>{
    console.log('sevidor rodando na porta: ',port);
});


app.post('/eco',(req,res) =>{
    
    console.log(req.body.text);
    res.json({'resposta' : req.body.text});

});



const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT;



app.listen(port, () =>{
    console.log('sevidor rodando na porta: ',port);
});


app.post('/eco',(req,res) =>{
    
    console.log(req.body.text);
    res.json({'resposta' : req.body.text});


});


/*
app.post('/chat', async (req,res) =>{
    

});
*/

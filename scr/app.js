const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT;
const llm = require('./llm');


app.listen(port, () =>{
    console.log('sevidor rodando na porta: ',port);
});


app.post('/eco',(req,res) =>{
    
    console.log(req.body.text);
    res.json({'resposta' : req.body.text});


});

app.post('/chat', async (req,res) =>{
    

    console.log(req.body.text);
    const respostaLLM = await llm(req.body.text);

    console.log(respostaLLM);
    res.json(respostaLLM['response']);


});


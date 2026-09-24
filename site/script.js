async function llmresponse(){
    const textUserresponse = document.getElementById('textUser');

    const corpoMensagem ={
        text : textUserresponse.value
    }

    const resposta = await fetch('http://localhost:3000/chat',{
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(corpoMensagem)

    });

    const respostaServer = await resposta.json();

    alert(JSON.stringify(respostaServer));

}
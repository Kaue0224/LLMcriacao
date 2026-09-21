async function  llm(mensagemUser){

    const token = process.env.TOKEN;

    const corpoMensagem = {

        model : 'llama3.2:1b',
        prompt: mensagemUser,
        stream: false

    }

    const resposta = await fetch(token, {

        method: 'POST',
        headers: {
            'Content-Type' : 'aplication/json'
        },
        body: JSON.stringify(corpoMensagem)
    })

    return await resposta.json();

}


module.exports = llm;
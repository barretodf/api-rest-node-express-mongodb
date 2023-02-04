import app from './src/app.js'; //importando o express que está em app
const port = process.env.PORT || 3000; //Porta fixa ou do ambiente de produção




//Criando o escutador
//Era server.listen - agora é app.listen
app.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
})


 const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('🛡️ API do Cidade Segura está operando normalmente!');
});


app.post('/cadastro', (req, res) => {
    const { nome, email, numero, password } = req.body;
    

    console.log('\n=====================================');
    console.log('📦 DADOS DE CADASTRO RECEBIDOS:');
    console.log(`👤 Nome: ${nome}`);
    console.log(`📧 E-mail: ${email}`);
    console.log(`📞 Telefone: ${numero}`);
    console.log('=====================================');


    return res.status(201).json({ 
        sucesso: true,
        mensagem: 'Usuário registrado com sucesso no sistema!',
        usuario: { nome, email }
    });
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log('\n=====================================');
    console.log('🔑 TENTATIVA DE LOGIN ACESSADA:');
    console.log(`📧 E-mail: ${email}`);
    console.log('=====================================');

    return res.status(200).json({ 
        sucesso: true,
        mensagem: 'Acesso liberado!',
        token: 'auth_token_cidade_segura_2026'
    });
});

app.listen(PORT, () => {
    console.log(`\n🚀 [Cidade Segura] Servidor iniciado com sucesso!`);
    console.log(`📡 Escutando na porta: ${PORT}`);
    console.log(`🔗 Link local: http://localhost:${PORT}`);
});
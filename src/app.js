require('dotenv').config();
const express = require('express');
const app = express();

//Middlewares
app.search(express.json());

//Test route
app.get('/', (req,res) => {
    res.send('TaskManager Pro API 🚀');
});

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('🚀 Servidor rodando na porta ${PORT}');
});
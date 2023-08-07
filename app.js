const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.send ('olá mundo!123 ')  
})


const clientes = [{id: 1, nome: 'joao', sobrenome: 'favero', idade: 5},
                {id: 2, nome: 'allan', sobrenome: 'favero',idade: 17}, 
               {id: 3, nome: 'tedi', sobrenome: 'favero', idade: 48},
               {id: 4, nome: 'rosana', sobrenome: 'silva', idade: 40},
];

app.get('/clientes', (req, res)=>{
    res.json (clientes);
})

app.get('/clientes/:id',(req,res)=>{
    const id = req.params.id;
    const cliente = clientes.find(cli => cli.id == id);
    res.json(cliente);
})



app.listen(3000, ()=> {
        console.log('app rodando na porta 3000!')
});
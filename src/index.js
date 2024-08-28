// Importa o módulo Express
const express = require("express") 

//Define uma classe para organizar a lógica da aplicação
class AppController{
    constructor(){
        // Cria uma nova instância do Express dentro da classe
        this.express = express();
        // Chama o método middlewares para configurar os middlewares
        // entre uma aplicação e outra
        this.middlewares();
        // Chama o método routes para definir as rotas da API
        this.routes();
    }
    middlewares(){
        // Permitindo que a aplicação receba dados em formato JSON nas requisições
        this.express.use(express.json()); // pro express usar o que tá dentro dos parenteses
    }

   
    routes(){
        const users = [];

        this.express.post("/users",(req,res)=>{  //rota pra testar no navegador
            const{id,nome,email} = req.body;
            users.push({id,nome,email});
            res.status(200).send({message:"Usuário cadastrado com sucesso"}); //fomar json
            });

            this.express.get("/users/:id",(req,res)=>{  //rota pra testar no navegador
                const{ id } = req.params;
                const user = users.find((user) => user.id == id);
                if(user) {
                    res.status(200).send(user);           
                } else {
                    res.status(400).send({ message:"Usuário não encontrado"});
                }
            });

        this.express.get("/health/",(req, res) => { 
            res.send({ nome: "Maria Clara", idade: "16", CPF: "459.349.308-00" }); 
    }); 

    }
}


module.exports = new AppController().express;
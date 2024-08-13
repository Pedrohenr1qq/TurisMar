const Connection = require('./Connection');

class ClientDAO{
    conn;
    constructor(){
    }

    async openConnection(){
        this.conn = await new Connection().createConnection();
    }

    async closeConnection(){
        if(this.conn != undefined){
            console.log("Finalizando conexão com o banco de dados...");
            this.conn.end();
        }
    }

    async create(client){
        try {
            const [results, fields] = await this.conn.query(
                'INSERT INTO `Clientes` VALUES(?,?,?,?)',
                [client.getName(), client.getAgency() , client.getPhoneNumber(), client.getNumPeople()]
            );
            console.log(fields);
        }catch (err){
            console.log(err);
        }
    }
    
    async read(name){
        try{
            const [results] = await this.conn.query(
                'SELECT * FROM `Clientes` WHERE `nome` = ?',
                [name]
            );
            if(results == undefined){
                console.log("Nome não encontrado");
            }
            else {
                console.log("Usuário encontrado!");
                console.log(results);
            }

        }catch(err){
            console.log(err);
        }

    }
    
    async update(){
        
    }
    
    async delet(client){
        try {
            await this.conn.query(
                'DELETE FROM `Clientes` where `nome` = ? AND `telefone` = ?',
                [client.getName(), client.getPhoneNumber()]
            );
            console.log("Cliente deletado com sucesso");
        }catch (err){
            console.log(err);
        }
    }
};

module.exports = ClientDAO;
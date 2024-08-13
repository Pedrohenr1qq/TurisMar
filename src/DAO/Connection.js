/**
 * Classe para criação da conecção com o banco de dados MySQL
 */


// Create Client MySQL
const mysql =  require('mysql2/promise');

class Connection{
    constructor(){}

    // Create connection with the database
    async createConnection(){
        try {
            const connection = await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'pedro_henr1qq',
                database: 'TurisMar'
            });

            console.log("Conexão sucedida!");
            return connection;   

        } catch (error) {
            throw(error);
        }
    }
}

module.exports = Connection;
// Arquivo principal do programa

// ========================= DEPENDENCIES ===============================
const prompt = require("prompt-sync")();
const Client = require("./DTO/Client");
const ClientDAO = require('./DAO/ClientDAO');

// ======================================================================

// ========================= GLOBAL OBJECTS =============================
var client;
var clientDAO = new ClientDAO();
// ======================================================================

// ============================= MAIN ===================================
async function main(){
    console.log("Iniciando o programa");
    console.log("Conectando o banco de dados...");
    await clientDAO.openConnection();

    console.log("");
    console.log("Seja bem vindo caro cliente! O que deseja fazer no momento? ");
    let operation = getUserOption();
    console.log("");
    doOperation(operation);

    clientDAO.closeConnection();
    console.log("Programa finalizado");
}

main();

// =====================================================================
function getUserOption(){
    let userInput, validValue;
    do{
        console.log("1 - Agendar passeio");
        console.log("2 - Criar conta");
        console.log("0 - Sair do programa");

        console.log("");
        userInput = parseInt(+prompt("Digite sua escolha: " ));

        validValue = (userInput >= 0  && userInput <= 2);
        if(!validValue){
            console.log("Valor não reconhecido. Tente novamente");
            console.log("");
        }

    } while(!validValue);

    return userInput;
}

function doOperation(operation){
    switch (operation) {
        case 0:
            console.log("Foi um prazer tê-lo aqui. Até a próxima.");
            break;
        case 1:
            if(!isRegistered()) clientDAO.create(createNewClient());
            if(checkNewTour()){
                
            }

            break;
        
        case 2:
            createNewClient();
            break;

        default:
            break;
    }
}


function checkNewTour(){
    let userInput = prompt("Deseja realizar um passeio? (Digite y para SIM e qualquer outro valor para NÂO) ");
    return (userInput.toUpperCase() == "Y");
}

function isRegistered(){
    let userInput = prompt("Você já possui cadastro? (Digite y para SIM e qualquer outro valor para NÂO) ");
    return (userInput.toUpperCase() == "Y");
}

// ============================ FUNCTIONS ==============================

function createNewClient(){
    let client;
    console.log("Vamos realizar seu cadastro. ");
    let name = prompt("Digite seu nome: ");
    let agency = prompt("Digite sua agência (caso não tenha, deixe esse espaço em branco): ");
    let phoneNumber = prompt("Digite seu telefone (tudo junto, sem parenteses ou espaços): ");
    let numPeople = prompt("Digite quantas pessoas estão te acompanhando (incluindo você): ");

    client = new Client(name, agency, phoneNumber, numPeople)

    console.log("Certo, cadastro realizado com sucesso!");

    return client;
}


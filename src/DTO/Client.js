/**
 * Classe para armazenamento e transferência de dados dos clientes dos passeios
 */

class Client{
    constructor(name, agency, phoneNumber, numPeople){
        this.name = name;
        this.agency = agency;
        this.phoneNumber = phoneNumber;
        this.numPeople = numPeople;
    }

    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }

    getAgency(){
        return this.agency;
    }
    setAgency(newAgency){
        this.agency = newAgency
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(newPhoneNumber){
        this.phoneNumber = newPhoneNumber
    }

    getNumPeople(){
        return this.numPeople;
    }
    setNumPeople(newNumPeople){
        this.numPeople = newNumPeople;
    }
 
};

module.exports = Client;
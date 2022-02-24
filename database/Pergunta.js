/** Model */

const Sequelize = require("sequelize");
const connection =  require("./database");

const Pergunta = connection.define('perguntas', {
    title: { 
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    descricao: {
        type: Sequelize.TEXT, 
        allowNull: false
    }
});

/** Criar tabela de perguntas.*/
Pergunta.sync({force:false}).then (() => {console.log("Tabela Criada!")});
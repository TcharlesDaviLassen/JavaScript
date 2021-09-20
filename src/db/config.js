const sqlite3 = require("sqlite3");
// o que faz a operação entre chaves, chama uma determinada função dentro da página sqlite,como a explicação abaixo
const { open } = require("sqlite");

module.exports = () =>
    open({
        ///src/db/ caminho do banco de dados onde que vai ser guardado os códigos,senhas 
        //nome do banco de dados  rocketq.sqlite
        filename:'./src/db/rocketq.sqlite',
        driver: sqlite3. Database,

    })

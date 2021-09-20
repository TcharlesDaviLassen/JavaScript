const async_hooks = require('async_hooks')
const Database = require("./config")

//Quando utilizamos await , o JavaScript vai aguardar até que a Promise finalize.
// Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise.
const initDb = {
    async init(){
        const db = await Database()


        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT 
        )`);

        await db.close()
    }
}

initDb.init();

//Comandos SQL sempre MAIUSCULO 
// id INTEGER PRIMARY KEY =>  quer dizer que im unico elemento pode ter um ID, todos irão ser diferentes 
// AUTOINCREMENT => quer dizer que implementaria de forma automática ao inves de fazer manualmente 

//PRIMARY KEY => Garante que será unicos de cada registro
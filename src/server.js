
//Pasta que da origem á todo o processo de reprodução do código 
const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

//Funções de middleware são funções que têm acesso ao objeto de solicitação (req), ao objeto de resposta (res) 
//e à próxima função no ciclo de solicitação-resposta do aplicativo. ... 
//As funções de middleware podem realizar as seguintes tarefas: Executar qualquer código.  
server.use(express.urlencoded({extended: true})) 

server.use(route)

server.listen(3000, () => console.log("Rodando Web"))
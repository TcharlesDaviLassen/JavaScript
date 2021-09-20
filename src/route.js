const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
const route = express.Router()  

//HAVIA ESQUECIDO DE COLOCAR DENTRO DAS CHAVES JUNTO COM A ROTA DA PAGINA O GÓDIGO, TAVA DANDO ERRO E NÃO LENDO O BG, ERRO ("index"), {page:'enter-room'})
route.get('/', (req, res) => res.render("index", {page:'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))
// route.get('/home', (req, res) => res.render("home"))

//Quando se coloca os dois pontos prepara se o local para receber uma variavel
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

//Havia esquecido de colocar esse parametro, ocorria um erro na reproduçao do sistema 
module.exports = route;


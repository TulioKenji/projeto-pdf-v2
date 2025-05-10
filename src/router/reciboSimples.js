import express from 'express'
import postReciboSimples from '../controller/recibosimples/postReciboSimples.js';

const reciboSimples = express.Router();

reciboSimples.use(express.static('view/index'));

reciboSimples.post('/', express.json(), postReciboSimples);

export default reciboSimples
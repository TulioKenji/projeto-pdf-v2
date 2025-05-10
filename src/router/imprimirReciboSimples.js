import express from 'express'
import getImprimirReciboSimples from '../controller/recibosimples/getImprimirReciboSimples.js';

const imprimir = express.Router();

imprimir.get('/',getImprimirReciboSimples);

export default imprimir
import express from 'express'

const app = express();

const getReciboSimples = app.use(express.static('view/index'));

export default { getReciboSimples }
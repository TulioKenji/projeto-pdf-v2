import express from 'express'
import cors from 'cors'

import reciboSimples from './router/reciboSimples.js';
import imprimirReciboSimples from './router/imprimirReciboSimples.js';

const app = express();
const port = 3000;


app.use(cors());
app.use('/', express.static('view/index'));

app.use('/recibosimples', reciboSimples);
app.use('/recibosimples/imprimir', imprimirReciboSimples);





app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
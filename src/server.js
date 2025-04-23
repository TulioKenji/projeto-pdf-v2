import express from 'express'
import cors from 'cors'

import pdfrouter from './router/pdf.js';

const app = express();
const port = 3000;


app.use(cors());
app.use('/', express.static('view/index'));

app.use('/pdf', pdfrouter);


app.get('/');



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
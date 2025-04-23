import express from 'express'
import postpdf, {contentpdf} from '../controller/postpdf.js'
import getpdf from '../controller/getpdf.js';


const pdfrouter = express.Router();



pdfrouter.get('/', express.json(), getpdf)

pdfrouter.post('/', express.json(), postpdf)

export default pdfrouter
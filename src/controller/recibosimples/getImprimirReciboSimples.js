import { contentReciboSimples } from "../../model/recibo/reciboSimplesModel.js"
import reciboSimplesTemplate from "../../../view/pdftemplates/reciboSimplesTemplate.js"
import puppeteer from "puppeteer"

const getImprimirReciboSimples = async (req,res)=>{
    
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
      
      
        await page.setContent(reciboSimplesTemplate(contentReciboSimples));
        
        const pdfBuffer = await page.pdf({
          format: "a4"
        });
      
        res.setHeader("Content-Disposition", 'attachment; filename="recibosimples.pdf"');;
        res.setHeader("Content-Type", "application/pdf");
        await browser.close();
      
        return res.end(pdfBuffer);
        
}

export default getImprimirReciboSimples
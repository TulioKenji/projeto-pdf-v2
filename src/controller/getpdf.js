import { contentpdf } from "./postpdf.js";
import arquivopdf from "../../view/pdftemplates/arquivopdf.js";
import puppeteer from "puppeteer";

const getpdf = async (req,res)=>{
    
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
      
      
        await page.setContent(arquivopdf(contentpdf));
        
        const pdfBuffer = await page.pdf({
          format: "a4",
        });
      
        res.setHeader("Content-Disposition", 'attachment; filename="relatorio.pdf"');;
        res.setHeader("Content-Type", "application/pdf");
        await browser.close();
      
        return res.end(pdfBuffer);
        
}

export default getpdf
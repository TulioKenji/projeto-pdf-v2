let contentpdf = {};
const postpdf = (req, res)=>{ 
    const mypdf = req.body;
    contentpdf = req.body;
    return res.json(mypdf);}

export default postpdf
export {contentpdf}
function arquivopdf (contentpdf){ return`<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOWNLOAD PDF</title>
</head>
<body>
    <div class="div-comprovante">
    <h2>${contentpdf.nomeEmpresa}</h2>
    <div class="div-lista">
    <ul>
        <li>Nome:</li>
        <li>Produto:</li>
        <li>Preço</li>
        <li>Forma de pagamento:</li>
        <li>Parcelas:</li>
        <li>Vendedor:</li>
    </ul>
    <ul>
        <li>${contentpdf.nomeCliente}</li>
        <li>${contentpdf.nomeProduto}</li>
        <li>R$${contentpdf.valorProduto}</li>
        <li>${contentpdf.formaPagamento}</li>
        <li>${contentpdf.formaParcelas}</li>
        <li>${contentpdf.nomeVendedor}</li>
    </ul>
</div>
</div>
</body>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
} 
header{
    display: flex;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
}

.img-menu{
    width: 50px;
    height: 50px;
}

h1{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 50px;
}

.img-conta{
    width: 50px;
    height: 50px;
}

.div-comprovante{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    margin-left: 40%;
    margin-right: 40%;
    border: 4px solid black;
}

h2{
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    text-align: center;
}

.div-lista{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

li{
    margin: 5px;
}

#buttonpdf{
    border-radius: 10px;
    width: 100px;
    height: 55px;
    border: 2px solid black;
    cursor: pointer;
}

.div-button-pdf{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>
</html>`
}
export default arquivopdf
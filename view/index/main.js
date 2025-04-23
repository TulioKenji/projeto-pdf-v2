async function sendpdf(event){
    event.preventDefault();
    const content = {
        nomeEmpresa: event.target.nomeEmpresa.value,
        nomeProduto: event.target.nomeProduto.value,
        valorProduto: +event.target.valorProduto.value,
        nomeCliente: event.target.nomeCliente.value,
        formaPagamento: event.target.formaPagamento.value,
        formaParcelas: +event.target.formaParcelas.value,
        nomeVendedor: event.target.nomeVendedor.value
    }
    
    const response = await fetch('http://localhost:3000/pdf', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content)
    })
}

async function makepdf(){
    window.location='http://localhost:3000/pdf'
}
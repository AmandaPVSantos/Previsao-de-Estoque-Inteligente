document.getElementById('stockForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos campos
    const sales = parseInt(document.getElementById('sales').value);
    const stock = parseInt(document.getElementById('stock').value);

    // Calcular a previsão de estoque (regra simples)
    const predictedStock = stock - sales;

    // Exibir o resultado
    const resultDiv = document.getElementById('result');
    if (predictedStock >= 0) {
        resultDiv.innerHTML = `Estoque previsto: ${predictedStock} unidades`;
    } else {
        resultDiv.innerHTML = `Atenção! O estoque será negativo: ${predictedStock} unidades. Considere reabastecer.`;
    }
});

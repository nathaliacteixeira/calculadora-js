function calcular() {
    
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let operacao = document.getElementById('operacao').value;
    let result = 0;

    // Valida os números 
    if(isNaN(n1) || isNaN(n2)) {
        alert('Números inválidos!');
        return;
    }

    switch(operacao){
        case '+':
            result = (n1 + n2);
            break;
        case '-':
            result = (n1 - n2);
            break;
        case '*':
            result = (n1 * n2);
            break;
        case '/':
            result = (n1 / n2);
            break;
    }
    document.getElementById('resultado').innerHTML = result.toFixed(2);
}   
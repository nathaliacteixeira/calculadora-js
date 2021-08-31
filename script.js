function calcular() {
    
    let n1 = parseFloat(document.querySelector('#numero1').value);
    let n2 = parseFloat(document.querySelector('#numero2').value);
    let operacao = document.querySelector('#operacao').value;
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
            if(n2 != 0){
                result = (n1 / n2);
            }else{
                alert("Digite um número maior que 0 para o segundo valor!");
            }
            break;
    }
    document.querySelector('#resultado').innerHTML = result.toFixed(2);
}   
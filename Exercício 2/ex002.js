var numero1 = window.prompt('Escolha um número');
var numero2 = window.prompt('Escolha outro número');

if (numero1==0) {
    window.alert('Não pode dividir com zero');
} else {
    if (numero2 == 0) {
        window.alert('Não pode dividir com zero');
    } else {
        var resultado = numero1 / numero2;
        window.alert('Esse é o resultado: ' + resultado);
    }
}
function validaMaiorIdade(anoNascimento) {
    if (anoNascimento < 2003) {
        return "Liberação autorizada";
    } else if (anoNascimento = 2003) {
        return "Validar documento de identidade";
    } else {
        return "ATENÇÃO: Liberação NÃO autorizada";
    }
}

const resultado = validaMaiorIdade(1996);

console.log(resultado)
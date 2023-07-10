const validarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
}
  
const validarSenha = (senha) => {
    return senha?.toString().length > 5
}

const validarNome = (nome) => {
    return nome?.toString().length > 2
}

const validarConfirmarSenha = (senha, confirmarSenha) => {
    return validarSenha(senha) && senha === confirmarSenha
}

export {
    validarEmail,
    validarSenha,
    validarConfirmarSenha,
    validarNome
}
const validarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
}
  
const validarSenha = (senha) => {
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return senhaRegex.test(senha);
}

const validarNome = (nome) => {
    return nome?.toString().length > 2 && nome?.toString().length < 15
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
const validarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
}
  
const validarSenha = (senha) => {
    return senha?.toString().length > 5
}

export {
    validarEmail,
    validarSenha,
}
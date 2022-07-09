function miFuncionQueFalla() { 
    throw new ConfigError('Estas usando el código incorrecto'); 
} 
module.exports = miFuncionQueFalla;
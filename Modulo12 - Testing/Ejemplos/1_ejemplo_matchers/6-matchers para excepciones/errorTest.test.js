test('La compilación de android va por buen camino', () => { 	
    
    // ⚠️Debemos envolver la función en otra para evitar que 
    // toThrow falle siempre. 
            
    expect(() => miFuncionQueFalla()).toThrow(); // Verificamos si falla
    // Verificamos una excepción en particular 
    expect(() => miFuncionQueFalla()).toThrow(ConfigError); 
            
    // Podemos testear el mensaje de error: 
    expect(() => miFuncionQueFalla()).toThrow('Usted está usando el código incorrecto'); // exacto 
    expect(() => miFuncionQueFalla()).toThrow(/Error/); // o con una expresión regular 
  });
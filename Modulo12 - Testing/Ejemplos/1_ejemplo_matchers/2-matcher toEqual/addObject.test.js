describe('objeto', () => { 

    test('igualdad', () => { 
        const objeto = {
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 30
        }
        const objeto2 = {
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 30,
        }
        expect(objeto).toEqual(objeto2);    
    })

    test('igualdad con toBe', () => {
        const objeto = {
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 30
        }
        const objeto2 = {
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 30,
        }
        expect(objeto).toBe(objeto2);
    })

 })
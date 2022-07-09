const sumar = require('./sumar');

describe('Sumar', () => {

    it('suma de dos numeros positivos', () => {
        expect(sumar(1,2)).toBe(3);
    });

    it('suma de dos numeros negativos', () => {
        expect(sumar(-1,-2)).toBe(-3);
    });

    test('suma de un numero positivo y otro negativo', () => {
        expect(sumar(1,-2)).toBe(-1);
    });
    
});

test('2 mas 2 es 4',()=>{
    const n1 = 2
    const n2 = 2
    const result = 4

    const n3 = sumar(n1, n2);

    expect(n3).toBe(result);
})
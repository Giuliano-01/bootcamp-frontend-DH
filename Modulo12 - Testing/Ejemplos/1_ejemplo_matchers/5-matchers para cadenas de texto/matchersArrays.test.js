describe('arrays', () => { 
    
    test('hay "stop" en Christoph', () => {
        expect('Christoph').toMatch(/stop/); 
    });
    test('no hay I en Team', () => { 
        expect('team').not.toMatch(/I/); 
    });
    test('hay "stop" en Christoph', () => {
        expect('Christoph').toMatch(/sToP/i);
    });

    test('contains', () => { 
        const array = [1, 2, 3, 4, 5];
        expect(array).toContain(2);
    });
    test('to contain all', () => {
        const array = [1, 2, 3, 4, 5];
        const array2 = [1, 2, 3, 4, 5];
        expect(array).toContainAll(array2);
    });
    test('to contain any', () => {
        const array = [1, 2, 3, 4, 5];
        const array2 = [1, 2, 3, 4, 5];
        expect(array).toContainAny(array2);
    });
    
});
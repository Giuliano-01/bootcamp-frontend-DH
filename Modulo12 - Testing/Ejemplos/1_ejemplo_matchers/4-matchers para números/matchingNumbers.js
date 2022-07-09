describe('numbers', () => { 
    
    test('greater than', () => { 
        expect(2).toBeGreaterThan(1);
    });
    test('less than', () => {
        expect(1).toBeLessThan(2);
    });
    test('to be less or equal to', () => {
        expect(1).toBeLessThanOrEqual(2);
    });
    test('to be greater or equal to', () => {
        expect(2).toBeGreaterThanOrEqual(1);
    });

    test('to be a number', () => {
        expect(1).toBeNumber();
    });
    test('to be a finite number', () => {
        expect(1).toBeFinite();
    });
    test('to be an integer', () => {
        expect(1).toBeInteger();
    });

    test('to be positive', () => {
        expect(1).toBePositive();
    });
    test('to be negative', () => {
        expect(-1).toBeNegative();
    });
    
    test('to be within range', () => {
        expect(1).toBeWithinRange(0, 2);
    });
    test('to be close to', () => {
        expect(1.2).toBeCloseTo(1);
    });
    

 })
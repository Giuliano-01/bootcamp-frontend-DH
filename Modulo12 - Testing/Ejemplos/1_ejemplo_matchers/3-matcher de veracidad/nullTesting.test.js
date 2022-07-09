
describe('null test', () => { 
    it('to be null', () => {
        expect(null).toBeNull();
    });
    test('to be defined', () => { 
        expect(null).toBeDefined();
    });
    test('not to be undefined', () => {
        expect(null).not.toBeUndefined();
    });
    test('to be falsy', () => {
        expect(null).toBeFalsy();
    });
    test('not to be truthy', () => {
        expect(null).not.toBeTruthy();
    });
    test('not to be NaN', () => {
        expect(null).not.toBeNaN();
    });

});
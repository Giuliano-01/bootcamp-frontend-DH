beforeEach(() => {
    console.log('before each');
});

test('test 0', () => {
    console.log('test 0');
});
test('test 00', () => {
    console.log('test 00');
});

describe('before each in desc', () => {

    beforeEach(() => {
        console.log('before each in desc');
    });
    
    test('test 1', () => {
        console.log('test 1');
    });
    test('test 2', () => {
        console.log('test 2');
    });

});

describe('after each', () => { 
    
    afterEach(() => {
        console.log('after each in desc');
    });
    
    test('test 1', () => {
        console.log('test 1');
    });
    test('test 2', () => {
        console.log('test 2');
    });
    
 });
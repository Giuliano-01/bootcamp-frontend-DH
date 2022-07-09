test('mocking a fn', () => {
    //puedo suplantar por ej al localStorage
    
    //Arrange
    const myMock = jest.fn(x => !x);
    //el mock nega lo que le pase
    
    //Act
    const result1 = myMock(true);
    const result2 = myMock(false);
    
    //Assert
    expect(result1).toBe(false);
    expect(result2).toBe(true);
});

test('mocking a fn 2', () => {
    //Arrange
    const myMock = jest.fn()

    //la primera vez que se ejecuta devuelve true
    .mockReturnValueOnce(true)
    //la segunta vez devuelve false
    .mockReturnValueOnce(false);
    
    //Act
    const result1 = myMock(true);
    const result2 = myMock(false);
    
    //Assert
    expect(result1).toBe(true);
    expect(result2).toBe(false);
});

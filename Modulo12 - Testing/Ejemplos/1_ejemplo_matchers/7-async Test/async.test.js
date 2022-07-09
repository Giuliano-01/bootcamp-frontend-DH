const asyncFn = () => new Promise((resolve, reject) => {
  
  setTimeout(() => {
    resolve(true);
  }, 1000);

});

describe('CALLBACKS', () => { 
  
  test('el texto es tarea cumplida', done => { 
    
    function callback(data) { 
        try { 
            expect(data).toBe('tarea cumplida'); 
            done(); 
        } catch (error) { 
            done(error); 
        } 
    } 
    fetchData(callback); 
  });

});

describe('PROMESAS', () => { 

  test('then', () => {

    return fetchData().then(data => { 
        expect(data).toBe('tarea cumplida');
    }); 

  });

  test('catch', () => {

    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error')); 
  
  });

});

describe('Resolves/Rejects', () => {

  test('resolves', () => { 

    return expect(fetchData()).resolves.toBe('tarea cumplida'); 
  
  });

  test('rejects', () => {

    return expect(fetchData()).rejects.toMatch('error'); 
  
  });

});


describe('async/await', () => { 
  
  test('test async function', async () => {
    
    const result = await asyncFn();
    expect(result).toBe(true);
  
  });

  test('el texto es tarea cumplida', async () => { 
    
    const data = await fetchData(); 
    expect(data).toBe('tarea cumplida'); 
  
  }); 

  test('the fetch fails with an error', async () => { 
    
    expect.assertions(1); 
    try { 
        await fetchData(); 
    } catch (e) { 
        expect(e).toMatch('error'); 
    }
     
  });

})


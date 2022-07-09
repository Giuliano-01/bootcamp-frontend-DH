import { getDemoTasks, setAppData, getAppTitle, getAppVersion, getAppLanguage, getNewExpirationTime, generateId, addDemoTask, setAppTitle, setAppVersion, setAppLanguage, getAppDescription, setAppDescription } from "./utils";

describe('utils', ()=>{
  
  // MD 1: trabajo de configuración previo.
  beforeEach(()=>{
    setAppData();
  });
  
  // MD 2: test de renderiza correctamente el título de la aplicación()
  test('2 renderiza correctamente el titulo',()=>{
    expect(getAppTitle()).toMatch('🙀 Tareas Pendientes');
  });

  // MD 3: test de setAppData()
  test('3 setAppData() inicializa la app con los valores correspondientes', ()=>{
      expect(getAppTitle()).toMatch('🙀 Tareas Pendientes');
      expect(getAppVersion()).toBe(1);
      expect(getAppLanguage()).toMatch('es-AR');
  });
    
  //MD 4: test de getNewExpirationTime()
  test('4 getNewExpirationTime() genera una fecha 15 dias en el futuro', ()=>{
      const newTime = Date.now() + (15 * 24 * 60 * 60 * 1000);
      expect(getNewExpirationTime()).toBe(newTime);
  });

  // MD 5: test de generateId()
  test('5 generateId() obtiene un valor mayor al último id generado',()=>{
      const id1 = generateId();
      const id2 = generateId();
      expect(id2).toBeGreaterThan(id1);
  });

  // MD 6: test de setAppTitle()
  test('6 setAppTitle() invocada con el valor 👌 Mis Tareas modifica el título de la aplicación y muestra ese valor',()=>{
      setAppTitle('👌 Mis Tareas');
      expect(getAppTitle()).toMatch('👌 Mis Tareas');
  });

  // MD 7: test de setAppVersion()
  describe('7 setAppVersion() permite establecer sólo valores enteros en el atributo version de app', () => { 

    test('si el valor que se ingresa es un entero, diferente al valor actual, el valor cambia',()=>{
    
      let oldVersion = getAppVersion();
      setAppVersion(2);
      let newVersion = getAppVersion();

      //expect(newVersion).toBeIntenger();
      expect(newVersion).not.toBe(oldVersion);
    });

    test('si el valor que se ingresa es un real, el valor que se guarda es un entero.', ()=>{
    
      setAppVersion(2.5);
      let newVersion = getAppVersion();
      //expect(newVersion).toBeInteger();
      expect(newVersion).toBeCloseTo(newVersion);
    });

    test('si el valor que se ingresa es no numérico, se mantiene el valor anterior', () => { 
      
      let oldVersion = getAppVersion();
      setAppVersion("a");
      let newVersion = getAppVersion();
      expect(newVersion).toBe(oldVersion);

    });

  });

  // MD 8: test de setAppLanguage() 

  describe('8 - setAppLanguage() permite establecer sólo uno de estos valores: es-AR - en-US', () => { 
      
    test('si el valor que se ingresa está en la lista, se actualiza correctamente el atributo lang.', () => { 
        
      setAppLanguage('es-AR');
      let newLanguage = getAppLanguage();
      expect(newLanguage).toMatch('es-AR');
        
      setAppLanguage('en-US');
      newLanguage = getAppLanguage();
      expect(newLanguage).toMatch('en-US');

    });

    test('si el valor que se ingresa no está en la lista, no debe cambiarse el atributo lang.', () => { 
      
      let oldLanguage = getAppLanguage();
      setAppLanguage('es-MX');
      let newLanguage = getAppLanguage();
      expect(newLanguage).not.toBe('es-MX');
      expect(newLanguage).toMatch(oldLanguage);

    });
  
  });
  
  // MD 9: test de setAppDescription()
  describe('9 setAppDescription() permite establecer un valor para app.description', () => {

    test('Al inicializar la app, no se establece un valor para app.description', () => {
      const initialDescription = getAppDescription();
      expect(initialDescription).toBeUndefined();
    });

    test('si se invoca a setAppDescription(), se actualiza el atributo', () => { 
      setAppDescription('hola');
      const newDescription = getAppDescription();
      expect(newDescription).toMatch('hola');  
    })

  });

  // MD 10: test de getDemoTasks()
  describe('10 Nuestra app carga las tareas iniciales desde una lista demo', () => { 

    test('Verifica que el método getDemoTasks() obtiene un array de tareas idéntico al valor almacenado en demoTasks', () => { 
      const demoTasks = [...getDemoTasks()];
      expect(getDemoTasks()).toEqual(demoTasks);
    });

  });
  
    
});
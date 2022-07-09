import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
//componentes
import App from './App';
import { Task } from './Task';

describe('App', () => { 
  
  //MD 1
  beforeEach(()=> render(<App />));

  //MD2
  test('El titulo se renderiza', () => {
  
    //le paso las props
    const task = {text: "probar el componente task"};
    render(<Task task={task}></Task>)
    expect(screen.getByText(/probar el componente task/i)).toBeInTheDocument();
  
  });

  //MD3
  test('renderiza correctamente el titulo', ()=>{
    
    const text = "🙀 Tareas Pendientes";
    const title = screen.getByRole('heading', {level: 1});

    expect(title).toBeInTheDocument(text);

  });

  //MD4
  test('cada tarea tiene un botón para eliminarla y que ese botón está habilitado', () => { 
    
    const task = {text: "probar el componente task"};
    render(<Task task={task}></Task>);
    const buttons = screen.getAllByRole('button', {label: /eliminar/i});

    buttons.forEach(btn => {
      expect(btn).toBeInTheDocument();
      expect(btn).toBeEnabled();
    });
  
  });

  //MD5
  test('Luego de publicar la tarea "Aprender Svelte" se reinicia el input', () => {
    const text = "Aprender Svelte";
    const input = screen.getByRole('textbox');
    userEvent.click(input);
    userEvent.keyboard(text);
    expect(input).toHaveValue(text);
    
    const buttonAgregar = screen.getByText("💾");
    userEvent.click(buttonAgregar);

    expect(input).toHaveValue('');
  });

});
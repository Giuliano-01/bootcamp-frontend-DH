import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { hover } from '@testing-library/user-event/dist/hover';
import App from './App';

afterEach(() => {
  render(<App />);
});

test('hoverable', () => {

  render(<App />);
  const hoverable = screen.getByTestId('hoverable');
  expect(hoverable).toBeInTheDocument();
  expect(hoverable).toHaveTextContent('❎');
  userEvent.hover(hoverable);
  expect(hoverable).toHaveTextContent('✅');

});

test('hover out', () => { 
  
  const hoverable = screen.getByTestId('hoverable');
  expect(hoverable).toBeInTheDocument();
  userEvent.hover(hoverable);
  expect(hoverable).toHaveTextContent('✅');
  userEvent.unhover(hoverable);
  expect(hoverable).toHaveTextContent('❎');
});




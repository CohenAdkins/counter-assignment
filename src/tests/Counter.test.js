
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  
  render(<Counter />);
});

test('renders counter message', () => {
  
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  
  const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  
  const decrementButton = screen.getByText('-');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent('-1');

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent('-2');
});

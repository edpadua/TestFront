import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Aprenda React"', () => {
  render(<App />);
  const Text = screen.getByText("Aprenda React");
  expect(Text).toBeInTheDocument();
});
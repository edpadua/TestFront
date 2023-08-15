import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Aprenda React"', () => {
  render(<App />);
  const Text = screen.getByText("Aprenda React");
  expect(Text).toBeInTheDocument();
});

test('renders placeholder "Testando"', () => {
    render(<App />);
    const Text = screen.getByPlaceholderText("Testando");
    expect(Text).toBeInTheDocument();
});

test('renders placeholder "Testando"', () => {
    render(<App />);
    const Text = screen.getByPlaceholderText("Digite o valor");
    expect(Text).toBeInTheDocument();
});


test('alt text "Lord Of The Rings"', () => {
    render(<App />);
    const Text = screen.getByAltText("Lord Of The Rings");
    expect(Text).toBeInTheDocument();
});

test('Value text "JavaScript"', () => {
    render(<App />);
    const Text = screen.getByDisplayValue("JavaScript");
    expect(Text).toBeInTheDocument();
});
    
test('Value text "JavaScript"', () => {
        render(<App />);
        const Text = screen.getByDisplayValue("Javascript");
        expect(Text).toBeInTheDocument();
});


test('Class in the button "button_test"', () => {
    render(<App />);
    const Text = screen.getElementsByClassName(button_test);
    expect(Text).toBeInTheDocument();
});

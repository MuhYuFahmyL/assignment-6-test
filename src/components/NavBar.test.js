import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar'; // Sesuaikan dengan path yang benar

describe('NavBar Component', () => {
  const searchMock = jest.fn();

  beforeEach(() => {
    render(<NavBar search={searchMock} />);
  });

  test('renders My Recipe title', () => {
    const myRecipeTitle = screen.getByTestId('my-recipe');
    expect(myRecipeTitle).toBeInTheDocument();
    expect(myRecipeTitle).toHaveTextContent('My Recipe');
  });

  test('renders search form', () => {
    const formSearch = screen.getByTestId('form-search');
    expect(formSearch).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Recipe Name');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument();
  });

  test('submits search input', () => {
    const input = screen.getByPlaceholderText('Recipe Name');
    fireEvent.change(input, { target: { value: 'Pasta' } });
    expect(input.value).toBe('Pasta');

    const button = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(button);
    
    expect(searchMock).toHaveBeenCalledWith('Pasta');
    expect(input.value).toBe(''); // Input should be cleared
  });
});

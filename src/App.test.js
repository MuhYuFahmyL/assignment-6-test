import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


describe('App Component', () => {
  const searchMock = jest.fn();

  beforeEach(() => {
    render(<App />);
  });

  // NavBar Tests
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

  // Image Banner Tests
  test('renders image banner', () => {
    const banner = screen.getByTestId('image-banner');
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg');
    expect(banner).toHaveAttribute('alt', 'banner');
  });

  // Recipe Card Tests
  test('renders each recipe card', async () => {
    const recipes = await screen.findAllByTestId(/img-recipe-/);
    
    recipes.forEach((recipe) => {
      const id = recipe.dataset.testid.split('-').pop();
      
      // Test image attributes
      expect(recipe).toBeInTheDocument();
      expect(recipe).toHaveAttribute('src'); // Ensure there is a src
      expect(recipe).toHaveAttribute('alt'); // Ensure there is an alt

      // Test title
      const title = screen.getByTestId(`title-recipe-${id}`);
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(`Test Recipe`); // Replace with expected name

      // Test rating
      const rating = screen.getByTestId(`rating-recipe-${id}`);
      expect(rating).toBeInTheDocument();
      expect(rating).toHaveTextContent('4.5'); // Replace with expected rating

      // Test link
      const link = screen.getByTestId(`link-recipe-${id}`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `https://dummyjson.com/recipes/${id}`);
    });
  });

  // Footer Tests
  test('renders footer text', () => {
    const footerText = screen.getByTestId('footer-text');
    expect(footerText).toBeInTheDocument();
    expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');
  });

  // Social Media Links Tests
  test('renders social media links', () => {
    const facebookLink = screen.getByTestId('link-facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');

    const xLink = screen.getByTestId('link-x');
    expect(xLink).toBeInTheDocument();
    expect(xLink).toHaveAttribute('href', 'https://x.com');

    const instagramLink = screen.getByTestId('link-instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
  });

  // My Recipe and Search Form Test
  test('renders my recipe and search form', () => {
    const myRecipe = screen.getByTestId('my-recipe');
    expect(myRecipe).toBeInTheDocument();

    const formSearch = screen.getByTestId('form-search');
    expect(formSearch).toBeInTheDocument();
  });
});

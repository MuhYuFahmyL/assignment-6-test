import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.jsx'; 

test('renders image-banner and checks attributes', () => {
  render(<App />);
  const bannerImage = screen.getByTestId('image-banner');
  
  expect(bannerImage).toHaveAttribute('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg');
  expect(bannerImage).toHaveAttribute('alt', 'banner');
});

test('renders card elements and checks attributes', () => {
  render(<App />);


  const imgRecipe = screen.getByTestId('img-recipe-1');
  expect(imgRecipe).toHaveAttribute('src', 'https://via.placeholder.com/150'); // Adjust based on actual image URL
  expect(imgRecipe).toHaveAttribute('alt', 'Test Recipe');

  const titleRecipe = screen.getByTestId('title-recipe-1');
  expect(titleRecipe).toHaveTextContent('Test Recipe');

  const ratingRecipe = screen.getByTestId('rating-recipe-1');
  expect(ratingRecipe).toHaveTextContent('4.5');

  const linkRecipe = screen.getByTestId('link-recipe-1');
  expect(linkRecipe).toHaveAttribute('href', '/recipes/1');
});

test('renders footer and social media links', () => {
  render(<App />);

  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toHaveTextContent('© 2024 Your Company');

  const linkFacebook = screen.getByTestId('link-facebook');
  expect(linkFacebook).toHaveAttribute('href', 'https://facebook.com');

  const linkX = screen.getByTestId('link-x');
  expect(linkX).toHaveAttribute('href', 'https://x.com');

  const linkInstagram = screen.getByTestId('link-instagram');
  expect(linkInstagram).toHaveAttribute('href', 'https://instagram.com');
});

test('renders search form and checks attributes', () => {
  render(<App />);
  
  const formSearch = screen.getByTestId('form-search');
  expect(formSearch).toBeInTheDocument(); 

  const myRecipe = screen.getByTestId('my-recipe');
  expect(myRecipe).toHaveTextContent('My Recipes');
});

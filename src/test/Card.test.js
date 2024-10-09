import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '../components/Card.jsx'; // pastikan path ke komponen benar

const el = {
  id: 1,
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
};

test('renders image with correct src and alt', () => {
  render(<Card el={el} />);
  const img = screen.getByTestId(`img-recipe-${el.id}`);
  
  expect(img).toHaveAttribute('src', el.image);
  expect(img).toHaveAttribute('alt', el.name);
});

test('renders title with correct text', () => {
  render(<Card el={el} />);
  const title = screen.getByTestId(`title-recipe-${el.id}`);
  
  expect(title).toHaveTextContent(el.name);
});

test('renders rating with correct value', () => {
  render(<Card el={el} />);
  const rating = screen.getByTestId(`rating-recipe-${el.id}`);
  
  expect(rating).toHaveTextContent(el.rating);
});

test('renders correct number of tags', () => {
  render(<Card el={el} />);
  const tag1 = screen.getByTestId(`tag-recipe-${el.tags[0]}`);
  const tag2 = screen.getByTestId(`tag-recipe-${el.tags[1]}`);
  
  expect(tag1).toHaveTextContent(el.tags[0]);
  expect(tag2).toHaveTextContent(el.tags[1]);
});

test('renders link with correct href', () => {
  render(<Card el={el} />);
  const link = screen.getByTestId(`link-recipe-${el.id}`);
  
  expect(link).toHaveAttribute('href', `https://dummyjson.com/recipes/${el.id}`);
  expect(link).toHaveTextContent('READ MORE');
});

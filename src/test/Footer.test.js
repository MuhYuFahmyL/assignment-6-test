import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer.jsx'; 

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders footer text', () => {
    const footerText = screen.getByTestId('footer-text');
    expect(footerText).toBeInTheDocument();
    expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');
  });

  test('renders link to Facebook', () => {
    const facebookLink = screen.getByTestId('link-facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
  });

  test('renders link to X', () => {
    const xLink = screen.getByTestId('link-x');
    expect(xLink).toBeInTheDocument();
    expect(xLink).toHaveAttribute('href', 'https://x.com');
  });

  test('renders link to Instagram', () => {
    const instagramLink = screen.getByTestId('link-instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
  });
});

// src/__tests__/App.test.js
import '@testing-library/jest-dom'; // Import the testing-library/jest-dom library
import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders without errors', () => {
  const { container } = render(<App />);
  // No errors if it renders without crashing
  expect(container).toBeInTheDocument();
});

test('renders the correct child components', () => {
  const { container } = render(<App />);
  
  // Check if the Navbar component is rendered
  const navbarElement = container.querySelector("[data-testid='navbar']"); // Assuming Navbar component has data-testid attribute
  expect(navbarElement).toBeInTheDocument();

  // Check if the Home component is rendered
  const homeElement = container.querySelector("[data-testid='home']");
  expect(homeElement).toBeInTheDocument();

  // Check if the About component is rendered
  const aboutElement = container.querySelector("#about");
  expect(aboutElement).toBeInTheDocument();
});

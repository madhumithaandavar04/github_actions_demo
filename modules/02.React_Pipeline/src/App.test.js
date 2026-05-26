import { render, screen } from '@testing-library/react';
import { act } from 'react';  // Use react's act
import App from './App';

test('renders without crashing', () => {
  // This test just ensures the App component renders successfully
  render(<App />);
});
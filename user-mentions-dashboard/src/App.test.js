import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import UserGenerator from './components/UserGenerator';
import LastCreatedUsers from './components/LastCreatedUsers';
import MentionsTextBox from './components/MentionsTextBox';

test('Header component renders title with the correct text', () => {
  render(<Header />);
  const element = screen.getByText('OpenAI Text Box Mentions');
  expect(element).toBeInTheDocument();
  expect(element.tagName).toBe('H1');
});

test('LastCreatedUsers component has title with not created users', () => {
  render(<LastCreatedUsers />);
  const element = screen.getByText('There are not users created');
  expect(element).toBeInTheDocument();
  expect(element.tagName).toBe('H3');
});

test('UserGenerator component has title with the correct text', () => {
  render(<UserGenerator />);
  const element = screen.getByText('User Generator');
  expect(element).toBeInTheDocument();
  expect(element.tagName).toBe('H3');
});

test('MentionsTextBox component has title with the correct text', () => {
  render(<MentionsTextBox />);
  const element = screen.getByText('Mentions Text Box');
  expect(element).toBeInTheDocument();
  expect(element.tagName).toBe('H3');
});

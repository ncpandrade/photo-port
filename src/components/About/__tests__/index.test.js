// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//ensure that after each test, we won't have any leftover memory
afterEach(cleanup);

describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });
  
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})

  
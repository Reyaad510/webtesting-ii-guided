import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
// below will clean things up for us
import '@testing-library/react/cleanup-after-each';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('renders without crashing', () => {
    render(<App />)
  });

  it('displays hello world', () => {
    const { queryByText } = render(<App />);
    const header = queryByText(/hello world/i)
    // const { getByText } = render(<App />);
    // const header = getByText(/hello world/i);
    expect(header).toBeVisible();
  });

  it('displays greeting when button is clicked', () => {
    const { getByText } = render(<App />);
    const button = getByText(/greet/i);

    fireEvent.click(button);

    getByText(/hello reyaad/i);
  })


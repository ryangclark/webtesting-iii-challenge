import React from 'react';
import { cleanup, render, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  it('Renders without crashing, and initializes state', () => {
    const { getByText } = render(<Dashboard />);
    const closer = getByText(/open/i);
    const closerButton = getByText(/Close Gate/i);
    const locker = getByText(/unlocked/i);
    const lockerButton = getByText(/Lock Gate/i);

    expect(closer).toHaveTextContent('Open');
    expect(closerButton).toHaveTextContent('Close Gate');
    expect(locker).toHaveTextContent('Unlocked');
    expect(lockerButton).toHaveTextContent('Lock Gate');
  });
});

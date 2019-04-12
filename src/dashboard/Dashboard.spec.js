import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  it('Renders without crashing, and initializes state', () => {
    const { getByText } = render(<Dashboard />);
    const openCloseStatus = getByText(/open/i);
    const openCloseButton = getByText(/Close Gate/i);
    const lockStatus = getByText(/unlocked/i);
    const lockButton = getByText(/Lock Gate/i);

    expect(openCloseStatus).toHaveTextContent('Open');
    expect(openCloseButton).toHaveTextContent('Close Gate');
    expect(openCloseButton).toHaveProperty('disabled', false);

    expect(lockStatus).toHaveTextContent('Unlocked');
    expect(lockButton).toHaveTextContent('Lock Gate');
    expect(lockButton).toHaveProperty('disabled', true);
  });

  it('Open Button toggles statuses', () => {
    const { getByText } = render(<Dashboard />);
    const openCloseStatus = getByText(/open/i);
    const openCloseButton = getByText(/Close Gate/i);
    const lockStatus = getByText(/unlocked/i);
    const lockButton = getByText(/Lock Gate/i);

    fireEvent.click(openCloseButton);
    expect(openCloseStatus).toHaveTextContent('Closed');
    expect(openCloseButton).toHaveTextContent('Open Gate');
    expect(openCloseButton).toHaveProperty('disabled', false);

    expect(lockStatus).toHaveTextContent('Unlocked');
    expect(lockButton).toHaveTextContent('Lock Gate');
    expect(lockButton).toHaveProperty('disabled', false);

    // open again to revert to default statuses
    fireEvent.click(openCloseButton);
    expect(openCloseStatus).toHaveTextContent('Open');
    expect(openCloseButton).toHaveTextContent('Close Gate');
    expect(openCloseButton).toHaveProperty('disabled', false);

    expect(lockStatus).toHaveTextContent('Unlocked');
    expect(lockButton).toHaveTextContent('Lock Gate');
    expect(lockButton).toHaveProperty('disabled', true);
  })

  it('Close Button toggles statuses', () => {
    const { getByText } = render(<Dashboard />);
    const openCloseStatus = getByText(/open/i);
    const openCloseButton = getByText(/Close Gate/i);
    const lockStatus = getByText(/unlocked/i);
    const lockButton = getByText(/Lock Gate/i);

    fireEvent.click(openCloseButton);
    fireEvent.click(lockButton);
    expect(openCloseStatus).toHaveTextContent('Closed');
    expect(openCloseButton).toHaveTextContent('Open Gate');
    expect(openCloseButton).toHaveProperty('disabled', true);

    expect(lockStatus).toHaveTextContent('Locked');
    expect(lockButton).toHaveTextContent('Unlock Gate');
    expect(lockButton).toHaveProperty('disabled', false);

    // unlock
    fireEvent.click(lockButton);
    expect(openCloseStatus).toHaveTextContent('Closed');
    expect(openCloseButton).toHaveTextContent('Open Gate');
    expect(openCloseButton).toHaveProperty('disabled', false);

    expect(lockStatus).toHaveTextContent('Unlocked');
    expect(lockButton).toHaveTextContent('Lock Gate');
    expect(lockButton).toHaveProperty('disabled', false);
  })
});

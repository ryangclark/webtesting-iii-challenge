// Test away!
import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
  it('Snapshot test', () => {
    const { container } = render(<Display locked={false} closed={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

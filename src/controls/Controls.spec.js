import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  it('Snapshot test', () => {
    const { container } = render(<Controls locked={false} closed={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

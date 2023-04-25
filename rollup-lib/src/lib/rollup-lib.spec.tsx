import { render } from '@testing-library/react';

import RollupLib from './rollup-lib';

describe('RollupLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RollupLib />);
    expect(baseElement).toBeTruthy();
  });
});

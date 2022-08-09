import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Stats from './Stats';

describe('Stats Unit Test', () => {
  it('should render the Stats component', () => {
    const component = render(<Stats />);
    expect(component.container).toBeInTheDocument();
  });
});

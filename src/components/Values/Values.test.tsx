import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Values from './Values';

describe('Values Unit Test', () => {
  it('should render the Values component', () => {
    const component = render(<Values />);
    expect(component.container).toBeInTheDocument();
  });
});

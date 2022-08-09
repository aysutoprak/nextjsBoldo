import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Unit Test', () => {
  it('should render the Navbar component', () => {
    const component = render(<Navbar />);
    expect(component.container).toBeInTheDocument();
  });
});

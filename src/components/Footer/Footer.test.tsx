import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Unit Tests', () => {
  it('should render the Footer component', () => {
    const component = render(<Footer />);
    expect(component.container).toBeInTheDocument();
  });
});

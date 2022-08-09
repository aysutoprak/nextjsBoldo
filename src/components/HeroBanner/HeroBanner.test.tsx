import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeroBanner from './HeroBanner';

describe('HeroBanner Unit Tests', () => {
  it('should render the HeroBanner component', () => {
    const component = render(<HeroBanner />);
    expect(component.container).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Leaders from './Leaders';

describe('Leaders Unit Test', () => {
  it('should render the Leaders component', () => {
    const component = render(<Leaders />);
    expect(component.container).toBeInTheDocument();
  });
});

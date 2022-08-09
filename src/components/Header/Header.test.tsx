import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header, { HeaderProps } from './Header';

describe('Header Unit Tests', () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      headerFirst: 'About',
      headerSecond: 'We love to make great things, things that matter.',
      headerThird:
        'Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.',
    };
  });

  it('should render the Header component', () => {
    const component = render(<Header {...props} />);
    expect(component.container).toBeInTheDocument();
  });

  it('should render the Header component with the given string message', () => {
    const text = 'Lorem ipsum dolor sit amet';
    const newprop: HeaderProps = { ...props, headerFirst: text };
    const component = render(<Header {...newprop} />);
    const element = component.getByText(text);
    expect(element).toBeInTheDocument();
  });
});

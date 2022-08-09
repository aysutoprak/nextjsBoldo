import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner, { SpinnerFill, SpinnerProps } from './Spinner';

describe('Spinner Unit Tests', () => {
  let props: SpinnerProps;

  beforeEach(() => {
    props = {
      fill: 'light',
    };
  });

  it('should render the spinner component', () => {
    const component = render(<Spinner {...props} />);
    expect(component.container).toBeInTheDocument();
  });

  it('should render with the dark theme', () => {
    const fill: SpinnerFill = 'dark';
    const newprop: SpinnerProps = { ...props, fill };
    const component = render(<Spinner {...newprop} />);
    const element = component.container.querySelector<HTMLButtonElement>('svg');
    expect(element?.classList.contains('fill-black')).toBeTruthy();
  });

  it('should render with the light theme', () => {
    const fill: SpinnerFill = 'light';
    const newprop: SpinnerProps = { ...props, fill };
    const component = render(<Spinner {...newprop} />);
    const element = component.container.querySelector<HTMLButtonElement>('svg');
    expect(element?.classList.contains('fill-white')).toBeTruthy();
  });
});

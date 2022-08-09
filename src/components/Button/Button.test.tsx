import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonColor, ButtonVariant, ButtonProps } from './Button';

describe('Button Unit Tests', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      variant: 'primary',
      color: 'yellow',
      buttonText: 'Click',
      isLoading: true,
    };
  });

  it('should render the button component', () => {
    const component = render(<Button {...props} />);
    expect(component.container).toBeInTheDocument();
  });

  it('should render with the corresponding background color with the primary variant selected', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'default';
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    expect(element?.classList.contains('bg-staples-grey')).toBeTruthy();
  });

  it('should render with the corresponding outline color with the ghost variant selected', () => {
    const variant: ButtonVariant = 'ghost';
    const color: ButtonColor = 'default';
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    expect(element?.classList.contains('border-staples-grey')).toBeTruthy();
    expect(element?.classList.contains('border')).toBeTruthy();
  });

  it('should render with the default background color with the text variant selected', () => {
    const variant: ButtonVariant = 'text';
    const color: ButtonColor = 'default';
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    expect(element?.classList.contains('hover:bg-staples-grey')).toBeTruthy();
  });

  it('should render correctly while the selected variant is primary and the button color is red', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'red';
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    expect(element?.classList.contains('bg-staples-red')).toBeTruthy();
  });

  it('should render correctly while the selected variant is primary and the button color is blue', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'blue';
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    expect(element?.classList.contains('bg-staples-blue')).toBeTruthy();
  });

  it('should render correctly while the selected variant is primary and the button color is green', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'green';
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    expect(element?.classList.contains('bg-green-200')).toBeTruthy();
  });

  it('should render correctly while the selected variant is primary and the button color is yellow', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'yellow';
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    expect(element?.classList.contains('bg-yellow-200')).toBeTruthy();
  });
});

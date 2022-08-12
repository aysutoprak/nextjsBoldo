import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonColor, ButtonVariant, ButtonProps } from './Button';

describe('Button Unit Tests', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      variant: 'primary',
      color: 'default',
      buttonText: 'Click',
      isLoading: true,
    };
  });

  it('should render the button component', () => {
    const component = render(<Button {...props} />);
    expect(component.container).toBeInTheDocument();
  });

  it('should render with gray background color with white text color', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'default';
    const expectedClassNames = ['bg-staples-grey', 'text-white']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render with red background color with white text color', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'red';
    const expectedClassNames = ['bg-staples-red', 'text-white']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

    it('should render with blue background color with white text color', () => {
    const variant: ButtonVariant = 'primary';
    const color: ButtonColor = 'blue';
    const expectedClassNames = ['bg-staples-blue', 'text-white']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render with no background color with gray text and change the background color to gray and text color to white when the mouse hovers over the button', () => {
    const variant: ButtonVariant = 'text';
    const color: ButtonColor = 'default';
    const expectedClassNames = ['hover:bg-staples-grey', 'hover:text-white', 'text-staples-grey']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render with no background color with red text and change the background color to red and text color to white when the mouse hovers over the button', () => {
    const variant: ButtonVariant = 'text';
    const color: ButtonColor = 'red';
    const expectedClassNames = ['hover:bg-staples-red', 'hover:text-white', 'text-staples-red']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render with no background color with blue text and change the background color to blue and text color to white when the mouse hovers over the button', () => {
    const variant: ButtonVariant = 'text';
    const color: ButtonColor = 'blue';
    const expectedClassNames = ['hover:bg-staples-blue', 'hover:text-white', 'text-staples-blue']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render with gray border color and gray text color with transparent background and change the background color to gray and the text color to white when the mouse hovers over the button', () => {
    const variant: ButtonVariant = 'ghost';
    const color: ButtonColor = 'default';
    const expectedClassNames = ['border', 'hover:bg-staples-grey', 'hover:text-white', 'border-staples-grey', 'text-staples-grey']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render with red border color and red text color with transparent background and change the background color to red and the text color to white when the mouse hovers over the button', () => {
    const variant: ButtonVariant = 'ghost';
    const color: ButtonColor = 'red';
    const expectedClassNames = ['border', 'hover:bg-staples-red', 'hover:text-white', 'border-staples-red', 'text-staples-red']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render with blue border color and blue text color with transparent background and change the background color to blue and the text color to white when the mouse hovers over the button', () => {
    const variant: ButtonVariant = 'ghost';
    const color: ButtonColor = 'blue';
    const expectedClassNames = ['border', 'hover:bg-staples-blue', 'hover:text-white', 'border-staples-blue', 'text-staples-blue']
    const newprop: ButtonProps = { ...props, variant, color };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(expect.arrayContaining(expectedClassNames))
  });

  it('should render the spinner component while isLoading is true', () => {
    const isLoading = true;
    const newprop: ButtonProps = { ...props, isLoading };
    const component = render(<Button {...newprop} />);
    expect(component.getByTestId('spinner')).toBeInTheDocument();
  });
  
});

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
      size: 'small',
      iconLabel : '',
    };
  });

  it('should render the button component', () => {
    const component = render(<Button {...props} />);
    expect(component.container).toBeInTheDocument();
  });

  it('should assert class names are correct when variant is primary and color is default.', () => {
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

  it('should assert class names are correct when variant is primary and color is red.', () => {
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

    it('should assert class names are correct when variant is primary and color is blue.', () => {
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

  it('should assert class names are correct when variant is text and color is default.', () => {
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

  it('should assert class names are correct when variant is text and color is red.', () => {
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

  it('should assert class names are correct when variant is text and color is blue.', () => {
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

  it('should assert class names are correct when variant is ghost and color is default.', () => {
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

  it('should assert class names are correct when variant is ghost and color is red.', () => {
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

  it('should assert class names are correct when variant is ghost and color is blue.', () => {
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
  
  it('should assert class names are correct when variant is icon and color is default.', () => {
    const variant: ButtonVariant = 'icon';
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

  it('should assert class names are correct when variant is icon and color is red.', () => {
    const variant: ButtonVariant = 'icon';
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

  it('should assert class names are correct when variant is icon and color is blue.', () => {
    const variant: ButtonVariant = 'icon';
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

  it('should render the icon when given an icon label', () => {
    const variant: ButtonVariant = 'icon';
    const iconLabel = 'lorem ipsum';
    const newprop: ButtonProps = { ...props, variant, iconLabel, icon : <svg></svg> };
    const component = render(<Button {...newprop} />);
    const element = component.getByTestId('icon-label');
    expect(element).toBeInTheDocument();
  });
});
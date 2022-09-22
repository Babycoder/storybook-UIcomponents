import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import Button from '../src/Button'

it('should render a button with the bg-color of primary', () => {
    render(<Button type='primary' ability={true}> Click Me</Button>);

    const primaryButton = screen.getByRole('button', { name: /Click Me/i });
    expect(primaryButton).toHaveClass('bg-[#00df9a]');
  });


it('should render a disabled button with the class of cursor-not-allowed', () => {
    render(<Button type='primary' ability={false}> Click Me</Button>);

    const primaryButtonDisabled = screen.getByRole('button', { name: /Click Me/i });
    expect(primaryButtonDisabled).toHaveClass('cursor-not-allowed');
  
  });


it('should render a button with the bg-color of secondary', () => {
    render(<Button type='secondary' ability={true}> secondary button</Button>);

    const secondaryButton = screen.getByRole('button', { name: /secondary button/i });
    expect(secondaryButton).toHaveClass('bg-[#000300]');
  });


it('should render a disabled button with the class of cursor-not-allowed', () => {
    render(<Button type='secondary' ability={false}> secondary button</Button>);

    const secondaryButtonDisabled = screen.getByRole('button', { name: /secondary button/i });
    expect(secondaryButtonDisabled).toHaveClass('cursor-not-allowed');
  
  });
  
  
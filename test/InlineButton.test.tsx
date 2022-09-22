import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import InlineButton from '../src/InlineButton'

it('should render a primary InllineButton', () => {
    render(<InlineButton type='primary' ability={true}> Click Me</InlineButton>);

    const primaryButton = screen.getByRole('button', { name: /Click Me/i });
    expect(primaryButton).toHaveClass('hover:border-b');
  });


it('should render a disabled InlineButton with the class of cursor-not-allowed', () => {
    render(<InlineButton type='primary' ability={false}> Click Me</InlineButton>);

    const primaryButtonDisabled = screen.getByRole('button', { name: /Click Me/i });
    expect(primaryButtonDisabled).toHaveClass('cursor-not-allowed');
  
  });


it('should render a secondary InlineButton with the white text color', () => {
    render(<InlineButton type='secondary' ability={true}> secondary button</InlineButton>);

    const secondaryButton = screen.getByRole('button', { name: /secondary button/i });
    expect(secondaryButton).toHaveClass('text-white');
  });


it('should render a disabled InlineButton with the class of cursor-not-allowed', () => {
    render(<InlineButton type='secondary' ability={false}> secondary button</InlineButton>);

    const secondaryButtonDisabled = screen.getByRole('button', { name: /secondary button/i });
    expect(secondaryButtonDisabled).toHaveClass('cursor-not-allowed');
  
  });
  
  
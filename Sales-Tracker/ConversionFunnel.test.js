

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConversionFunnel from './ConversionFunnel'; // Replace with your actual import
import '@testing-library/jest-dom';

describe('Conversion Funnel', () => {
  // Positive Scenarios
  test('renders the conversion funnel component', () => {
    render(<ConversionFunnel />);
    expect(screen.getByTestId('conversion-funnel')).toBeInTheDocument();
  });

 

  test('hovering over funnel sections reveals relative information', () => {
    render(<ConversionFunnel />);
    const funnelSection = screen.getByText('87.31k'); // Replace with a proper selector for the funnel section
    fireEvent.mouseOver(funnelSection);
    // Assuming the relative information is displayed in a tooltip with a specific role
    const tooltip = screen.getByRole('tooltip'); // Replace with actual role or test id for the tooltip
    expect(tooltip).toHaveTextContent('Expected relative information'); // Replace with the actual text
  });

  // Negative Scenarios
  test('funnel  display incorrect values', () => {
    render(<ConversionFunnel />);
    expect(screen.queryByText('Incorrect Value')).not.toBeInTheDocument();
  });

  test('no tooltip is shown when not hovering over funnel sections', () => {
    render(<ConversionFunnel />);
    const tooltip = screen.queryByRole('tooltip'); // Replace with actual role or test id for the tooltip
    expect(tooltip).not.toBeInTheDocument();
  });
});


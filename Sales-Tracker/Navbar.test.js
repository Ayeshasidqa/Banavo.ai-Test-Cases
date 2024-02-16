import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App'; // Import your main App component
import '@testing-library/jest-dom';



// Sales Tracker Navbar Tests
describe('Sales Tracker Navbar', () => {
  test('Sales Tracker button is present in the navbar', () => {
    render(<App />);
    const salesTrackerButton = screen.getByTestId('sales-tracker-button');
    expect(salesTrackerButton).toBeInTheDocument();
  });
 
  test('Sales Tracker is highlighted as the selected state on the dashboard', () => {
    render(<App />);
    const salesTrackerNavItem = screen.getByTestId('sales-tracker-nav-item');
    
    // Assuming 'highlighted' is a class applied to the nav item when it is in the selected state
    expect(salesTrackerNavItem).toHaveClass('highlighted');
  });
});


// Sales Co-pilot Navbar Tests

  test('Sales Co-pilot button is present in the navbar', () => {
    render(<App />);
    const salesCoPilotButton = screen.getByTestId('sales-co-pilot-button');
    expect(salesCoPilotButton).toBeInTheDocument();
  });



// Logo Tests

  test(' BANAVO.AI logo is present in the navbar', () => {
    render(<App />);
    const logo = screen.getByAltText('BAVAVO');
    expect(logo).toBeInTheDocument();
  });


// Summary Section Tests
  test('Summary Tag is present', () => {
    render(<App />);
    const summarySection = screen.getByTestId('summary-section');
    expect(summarySection).toBeInTheDocument();
  });


// Date Selection Tests
describe('Date Selection', () => {
  test('Date selection dropdown is present', () => {
    render(<App />);
    const dateSelectionDropdown = screen.getByTestId('date-selection-dropdown');
    expect(dateSelectionDropdown).toBeInTheDocument();
  });

  test('Changing the date selection updates the data displayed', async () => {
    render(<App />);
    const dateSelectionDropdown = screen.getByTestId('date-selection-dropdown');
    fireEvent.change(dateSelectionDropdown, { target: { value: 'new-date-range' } });
    // You would need to verify that data updates according to the selected date range
    // This might involve checking if certain elements are present, checking text content, etc.
  });

  test('Selecting an invalid date range shows an appropriate error message', () => {
    render(<App />);
    const dateSelectionDropdown = screen.getByTestId('date-selection-dropdown');
    fireEvent.change(dateSelectionDropdown, { target: { value: 'invalid-date-range' } });
    const errorMessage = screen.getByTestId('date-selection-error');
    expect(errorMessage).toBeInTheDocument();
  });
});
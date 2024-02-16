import React from 'react';
import { render, screen } from '@testing-library/react';


describe('Net Sales', () => {
     beforeEach(() => {
    // Render the App component before each test
    render(<NetSales/>);
  });


    it('TC-NS-04:renders the net sales component', () => {
      const netSalesComponent = screen.getByTestId('net-sales');
      expect(netSalesComponent).toBeInTheDocument();
    });

    it('TC-NS-02:shows a value for net sales', () => {
      const netSalesValue = screen.getByTestId('net-sales-value');
      expect(netSalesValue).toHaveTextContent(/^\$\d+(,\d{3})*(\.\d{2})?$/);
    });

    it('TC-NS-03:shows a percentage change for net sales', () => {
      const netSalesChange = screen.getByTestId('net-sales-change');
      expect(netSalesChange).toHaveTextContent(/^[\+\-]?\d+\.?\d*%$/);
    });

    it('TC-NS-05: does not render the net sales component if data is missing', () => {
        const netSalesComponent = screen.queryByTestId('net-sales'); // Use queryByTestId to check absence
        expect(netSalesComponent).not.toBeInTheDocument();
      });
           
  });


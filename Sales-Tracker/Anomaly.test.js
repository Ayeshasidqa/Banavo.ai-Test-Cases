import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Anomaly';



describe('Anomalies Section:AS', () => {
     beforeEach(() => {
    // Render the App component before each test
    render(<Anomaly/>);
  });


  test('TC-AS-01:renders the Anomalies component', () => {
      // Code to render the component goes here
      expect(screen.getByTestId('anomalies-section')).toBeInTheDocument();
    });
  
  test('TC-AS-02:displays the correct number of anomalies for sales, traffic,            and customers', () => {
      // Rendering and assertion code goes here
      expect(screen.getByTestId('sales-anomalies-count')).toHaveTextContent(/\d+/);
      expect(screen.getByTestId('traffic-anomalies-count')).toHaveTextContent(/\d+/);
      expect(screen.getByTestId('customer-anomalies-count')).toHaveTextContent(/\d+/);
    });
  
  test('TC-AS-03:triggers the correct action when an anomaly is clicked', () => {
      // Simulate click and check for the action
      const salesAnomaly = screen.getByTestId('sales-anomaly');
      fireEvent.click(salesAnomaly);
      // Expectation for the action, like navigation or detail display, goes here
    });
  
  });
  

  test('TC-AS-04:navigates to the Sales Anomalies page when the Anomalies section is clicked', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Assume 'anomalies-section-link' is the test ID for the clickable Anomalies section
    const anomaliesSectionLink = screen.getByTestId('anomalies-section-link');
    fireEvent.click(anomaliesSectionLink);

    // Assuming 'sales-anomalies-page' is the test ID for the Sales Anomalies page
    const salesAnomaliesPage = await screen.findByTestId('sales-anomalies-page');

    expect(salesAnomaliesPage).toBeInTheDocument();
  });


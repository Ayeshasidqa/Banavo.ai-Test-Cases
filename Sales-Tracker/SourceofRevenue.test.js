describe('Source of Revenue', () => {
    beforeEach(() => {
        // Render the App component before each test
        render(<SourceofRevenue/>);
      });
    

    it('TC-SR-01:displays the source of revenue component', () => {
      const sourceOfRevenueSection = screen.getByTestId('source-of-revenue-section');
      expect(sourceOfRevenueSection).toBeInTheDocument();
    });

    it('TC-SR-02:shows a pie chart for revenue sources', () => {
      const revenuePieChart = screen.getByTestId('revenue-pie-chart');
      expect(revenuePieChart).toBeInTheDocument();
    });
    
  });

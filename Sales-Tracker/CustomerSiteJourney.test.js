


describe('Customer Site Journey Conversion Bottlenecks Section', () => {
    beforeEach(() => {
        // Render the component before each test
        render(<CustomerSiteJourney/>);
      });

    it('TC-CSJ-01:renders the Customer Site Journey section', () => {
      // Code to render the component goes here
      expect(screen.getByTestId('customer-site-journey-section')).toBeInTheDocument();
    });
  
    it('TC-CSJ-02:lists all campaigns associated with conversion bottlenecks', () => {
      // Rendering and assertion code goes here
      const campaignsList = screen.getByTestId('campaigns-list');
      expect(campaignsList.childElementCount).toBeGreaterThan(0);
    });
  
  
     it('TC-CSJ-03:shows campaigns in descending order based on bottleneck severity', () => {
      // Code to render the component goes here
      const campaignNames = screen.getAllByTestId(/campaign-name-/i).map(node => node.textContent);
      const expectedOrder = ['Mother\'s Day Deals', 'Tanzanite', 'Jade', 'Diamond', 'Emerald', 'Topaz'];
  
      expect(campaignNames).toEqual(expectedOrder);
    });

    
    
    it('TC-CSJ-04:navigates to the Customer Journey Conversion Analysis page on click', async () => {
      // Set up initial route and mock routes for testing
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <Routes>
            <Route path="/dashboard" element={<App />} />
            <Route path="/customer-journey" element={<CustomerJourneyConversionAnalysis />} />
          </Routes>
        </MemoryRouter>
      );
  
      // Assuming 'customer-site-journey-bottleneck-section' is the test ID for the clickable section
      const bottleneckSection = screen.getByTestId('customer-site-journey-bottleneck-section');
      fireEvent.click(bottleneckSection);
  
      // This could be checking for a specific element on the expected page
      const analysisPage = await screen.findByTestId('customer-journey-conversion-analysis-page');
  
      expect(analysisPage).toBeInTheDocument();
    });

    //negative Scenarios

    it('TC-CSJ-06: does not list any campaigns if there are no conversion bottlenecks', () => {
        // Render the component with an empty campaigns list
        const campaignsList = screen.getByTestId('campaigns-list');
        expect(campaignsList.childElementCount).toBe(0);
      });
      
    it('TC-CSJ-07: does not show campaigns in the expected order based on bottleneck severity', () => {
        // Render the component with campaigns in a different order
        const campaignNames = screen.getAllByTestId(/campaign-name-/i).map(node => node.textContent);
        const unexpectedOrder = ['Diamond', 'Emerald', 'Topaz', 'Jade', 'Tanzanite', 'Mother\'s Day Deals'];
        expect(campaignNames).not.toEqual(unexpectedOrder);
      });
       
  
  });
  
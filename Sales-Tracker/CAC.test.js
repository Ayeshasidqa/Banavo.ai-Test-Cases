describe('Customer Acquisition Cost ', () => {
    beforeEach(() => {
        // Render the App component before each test
        render(<CAC/>);
      });
    
    it('TC-CAC-01:renders the CAC component', () => {
       const cacComponent = screen.getByTestId('cac');
       expect(cacComponent).toBeInTheDocument();
     });

   it('TC-CAC-02:shows CAC values for each marketing channel', () => {
     const cacChannels = ['facebook', 'google', 'mobileApp'];
     cacChannels.forEach(cacChannel => {
       const cacElement = screen.getByTestId(`cac-value-${cacChannel}`);
       expect(cacElement).toHaveTextContent(/^\$\d+(,\d{3})*(\.\d{2})?$/);
     });

 
     it('TC-CAC-04:shows CAC values for each channel', () => {
       // Assuming there is a finite list of marketing channels
       const channels = ['facebook', 'google', 'mobileApp'];
       for (const channel of channels) {
         expect(screen.getByTestId(`cac-${channel}`)).toBeInTheDocument();
       }
     });
   });
 });

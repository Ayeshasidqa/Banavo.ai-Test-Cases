describe('Visitors by Channel:VC', () => {
    test('TC-VC-03:renders the visitors by channel component', () => {
        const visitorsComponent = screen.getByTestId('visitors-by-channel');
        expect(visitorsComponent).toBeInTheDocument();
      });


    // Assuming we have a predefined set of channels
    const channels = ['direct', 'organic', 'branded', 'affiliate', 'google', 'facebook', 'social organic', 'referrals', 'sms', 'push marketing'];
    channels.forEach(channel => {
    test(`TC-VC-02:shows visitor data for the ${channel} channel`, () => {
        const channelElement = screen.getByTestId(`channel-visitor-${channel}`);
        expect(channelElement).toBeInTheDocument();
      }); 
      
    });
  });

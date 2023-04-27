import { cleanup, render, screen } from '@testing-library/react';
import { AppContext } from 'context/app-context';
import { MemoryRouter } from 'react-router-dom';
import channelsJson from '@mocks/data.json';
import Footer from '@components/ui/Footer/Footer';

const renderWithProvider = (ui: React.ReactElement) =>
  render(
    <AppContext.Provider
      value={{
        channels: channelsJson.channels,
        loading: false,
        currentTime: 0,
        startTime: 0,
        endTime: 0,
        timesArray: [],
        bookmarkPosition: 0,
        setLoading: () => {},
        setChannels: () => {},
      }}
    >
      {ui}
    </AppContext.Provider>
  );

const wrapper = (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);
describe('<Footer />', () => {
  beforeEach(() => {
    renderWithProvider(wrapper);
  });
  afterEach(cleanup);

  it('Should render a footer component ', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

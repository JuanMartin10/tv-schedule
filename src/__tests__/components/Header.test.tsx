import { cleanup, render, screen } from '@testing-library/react';
import Header from '@components/ui/Header/Header';
import { AppContext } from 'context/app-context';
import { MemoryRouter } from 'react-router-dom';
import channelsJson from '@mocks/data.json';

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
    <Header />
  </MemoryRouter>
);
describe('<Header />', () => {
  beforeEach(() => {
    renderWithProvider(wrapper);
  });
  afterEach(cleanup);

  it('Should render a header component ', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('Should render a image', () => {
    const linkElement = screen.getByRole('link', { name: 'logo' });
    expect(linkElement).toBeInTheDocument();

    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
  });
});

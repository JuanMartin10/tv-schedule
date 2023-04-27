import { AppContext } from '@context/app-context';
import {
  cleanup,
  render,
  waitFor,
  screen,
  fireEvent,
} from '@testing-library/react';
import channelsJson from '@mocks/data.json';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomeView from '@views/HomeView/HomeView';

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
    <Routes>
      <Route path='/' Component={HomeView} />
    </Routes>
  </MemoryRouter>
);

describe('<HomeView />', () => {
  beforeEach(() => {
    renderWithProvider(wrapper);
  });
  afterEach(cleanup);

  it('Should render', () => {
    renderWithProvider(wrapper);
  });
  // it('Should not render a header component', async () => {
  //   waitFor(() => {
  //     expect(screen.getByRole('header')).toBeNull();
  //   });
  // });
  it('Should match the snapshot', () => {
    const { container } = renderWithProvider(wrapper);
    expect(container).toMatchSnapshot();
  });

  it('Should render now button component ', () => {
    waitFor(() => {
      // const { getByText } = renderWithProvider(wrapper);
      const nowButton = screen.getByText(/now/i);

      expect(nowButton).toBeInTheDocument();
      fireEvent.click(nowButton);
    });
  });

  it('Should render channel images', async () => {
    waitFor(() => {
      expect(screen.getAllByRole('img')).toBeInTheDocument();
    });
  });
});

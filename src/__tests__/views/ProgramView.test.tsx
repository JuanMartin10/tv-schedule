import { AppContext } from '@context/app-context';
import { cleanup, render, waitFor, screen } from '@testing-library/react';
import channelsJson from '@mocks/data.json';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProgramView from '../../views/HomeView/ProgramView/ProgramView';

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

const channel = channelsJson.channels[1];
const program = channelsJson.channels[1].schedules[1];

const wrapper = ({ channelId, programId }: any) => (
  <MemoryRouter
    initialEntries={[
      `/${channelId}/${programId}`,
      { state: { program, channel } },
    ]}
  >
    <Routes>
      <Route path='/channelId/:programId' Component={ProgramView}></Route>
    </Routes>
  </MemoryRouter>
);
describe('<ProgramView />', () => {
  const wrapperId = () =>
    wrapper({
      channelId: 'sky1',
      programId: 'dummy_program_id',
    });

  beforeEach(() => {
    renderWithProvider(wrapperId());
  });

  afterEach(cleanup);

  it('Should render', () => {
    renderWithProvider(wrapperId());
  });

  it('Should match the snapshot', () => {
    const { container } = renderWithProvider(wrapperId());
    expect(container).toMatchSnapshot();
  });

  it('Should render podcast image', () => {
    waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(1);
      expect(images).toBeDefined();
    });
  });

  it('Should render program description', () => {
    waitFor(() => {
      const description = screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adip/i
      );
      expect(description).toBeDefined();
    });
  });
});

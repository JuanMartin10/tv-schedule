import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomeView from '../views/HomeView/HomeView';
import ProgramView from '../views/HomeView/ProgramView/ProgramView';

export const HOME_PATH = '/';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PATH} element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path=':channelId/:programId' element={<ProgramView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
